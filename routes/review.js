const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");


// ================= CREATE REVIEW =================
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);

    const review = new Review(req.body.review);
    review.author = req.user._id;

    listing.reviews.push(review);

    await review.save();
    await listing.save();

    req.flash("success", "Review added successfully!");
    res.redirect(`/listings/${listing._id}`);
  })
);

// ================= DELETE REVIEW =================
router.delete(
  "/:reviewId",isLoggedIn,isReviewAuthor,
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });
    req.flash("success", "Review removed successfully.");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
