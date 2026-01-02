// Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const Joi = require("joi");
const { listingSchema } = require("./schema.js");
const Review = require("./models/review.js");
const { reviewSchema } = require("./schema.js");


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

// Listing Validation
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const msg = error.details.map(el => el.message).join(", ");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

// Review Validation
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const msg = error.details.map(el => el.message).join(", ");
    throw new ExpressError(400, msg);
  }
  next();
};


// ======================= ROUTES =======================

// Home
app.get("/", (req, res) => {
    res.render("root");
});

// About
app.get("/about", (req, res) => {
    res.render("about");
});

// Listings index
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

// New listing form
app.get("/listings/new", (req, res) => {
    res.render("listings/new");
});

// Create listing
app.post("/listings",validateListing,wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  })
);

// Show listing
app.get("/listings/:id", wrapAsync(async (req, res) => {
    const list = await Listing.findById(req.params.id).populate("reviews");
    if (!list) throw new ExpressError(404, "Listing not found");
    res.render("listings/show", { list });
}));

// Edit listing
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    const list = await Listing.findById(req.params.id);
    if (!list) throw new ExpressError(404, "Listing not found");
    res.render("listings/edit", { list });
}));

// Update listing
app.put("/listings/:id", wrapAsync(async (req, res) => {
    if (!req.body || !req.body.listing) {
      throw new ExpressError(400, "Send valid data for listing");
    }
    await Listing.findByIdAndUpdate(req.params.id, req.body.listing);
    res.redirect(`/listings/${req.params.id}`);
}));

// Delete listing
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    res.redirect("/listings");
}));

// Review Route 
app.post("/listings/:id/reviews",validateReview,wrapAsync(async(req,res)=>{
    if (!req.body || !req.body.review) {
      throw new ExpressError(400, "Send valid data for review");
    }
    let listing = await Listing.findById(req.params.id);
    let newListing = new Review(req.body.review);
    listing.reviews.push(newListing);
    await newListing.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);
}))

// Delete Review
app.delete(
  "/listings/:id/review/:reviewId",
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Review.findByIdAndDelete(reviewId);

    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });

    res.redirect(`/listings/${id}`);
  })
);
// ======================= 404 HANDLER =======================
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// ======================= ERROR HANDLER =======================
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error", { statusCode, message });
});
