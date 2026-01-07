// Imports
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');
const listings = require('./routes/listing.js');
const reviews = require('./routes/review.js');
const users = require('./routes/user.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const dbUrl = process.env.ATLASDB_URL;
const Subscriber = require('./models/subscriber.js');

// View engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Server
app.listen(8080, () => {
  console.log('Listening on port 8080');
});

// Database
main()
  .then(() => console.log('Connection successful'))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_URL,
  touchAfter: 24 * 3600,
});

store.on('error', (err) => {
  console.log('ERROR in MONGO SESSION STORE', err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currUser = req.user;
  res.locals.mapToken = process.env.MAP_TOKEN;
  next();
});

// Home
app.get('/', (req, res) => {
  res.render('root');
});

app.use('/listings', listings);
app.use('/listings/:id/reviews', reviews);
app.use('/', users);

// About
app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      req.flash('error', 'Email is required');
      return res.redirect('/');
    }
    await Subscriber.create({ email });
    req.flash('success', 'Welcome to the collection! You are now subscribed.');
    res.redirect('back');
  } catch (err) {
    if (err.code === 11000) {
      req.flash('error', 'This email is already part of our community.');
    } else {
      req.flash('error', 'Registration failed. Please try again later.');
    }
    res.redirect('/');
  }
});

// 404 Handler
app.use((req, res, next) => {
  next(new ExpressError(404, 'Page Not Found'));
});

// Error Handler
// Error Handler - at the very end of app.js
app.use((err, req, res, next) => {
  // Check if headers already sent
  if (res.headersSent) {
    return next(err);
  }

  const { statusCode = 500, message = 'Something went wrong' } = err;
  res.status(statusCode).render('error', { statusCode, message });
});
