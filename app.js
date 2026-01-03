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

// View engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Database
main()
    .then(() => console.log("Connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/stayora");
}

// Server
app.listen(8080, () => {
    console.log("Listening on port 8080");
});

// ======================= ROUTES =======================

app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);
// Home
app.get("/", (req, res) => {
    res.render("root");
});
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
