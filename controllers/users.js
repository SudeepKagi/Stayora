const User = require('../models/user.js');
const passport = require('passport');

// ================= RENDER SIGNUP =================
module.exports.renderSignup = (req, res) => {
  res.render('users/signup');
};

// ================= SIGNUP =================
module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash('success', 'User registered successfully');
      res.redirect('/listings');
    });
  } catch (err) {
    req.flash('error', err.message);
    res.redirect('/signup');
  }
};

// ================= RENDER LOGIN =================
module.exports.renderLogin = (req, res) => {
  res.render('users/login');
};

// ================= LOGIN =================
module.exports.login = (req, res) => {
  req.flash('success', 'Login successful');
  const redirectUrl = res.locals.redirectUrl || '/listings';
  res.redirect(redirectUrl);
};

// ================= LOGOUT =================
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash('success', 'Logged out successfully');
    res.redirect('/');
  });
};
