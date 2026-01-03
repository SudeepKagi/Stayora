// Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js")
const session = require("express-session");
const flash = require("connect-flash");

// View engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Server
app.listen(8080, () => {
    console.log("Listening on port 8080");
});

// Database
main()
    .then(() => console.log("Connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/stayora");
}

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


const sessionOptions = {
  secret: "eleven",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: new Date(Date.now() + 7*24*60*60*1000),
    maxAge: 7*24*60*60*1000,
    httpOnly:true,
  }
}

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ======================= ROUTES =======================
// Home
app.get("/", (req, res) => {
    res.render("root");
});

app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);

// About
app.get("/about", (req, res) => {
    res.render("about");
});

// ======================= 404 HANDLER =======================
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// ======================= ERROR HANDLER =======================
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error", { statusCode, message });
});
