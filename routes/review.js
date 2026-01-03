const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");

// ================= VALIDATION =================
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const msg = error.details.map(el => el.message).join(", ");
    throw new ExpressError(400, msg);
  }
  next();
};

// ================= CREATE REVIEW =================
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) throw new ExpressError(404, "Listing not found");

    const review = new Review(req.body.review);

    listing.reviews.push(review);
    await review.save();
    await listing.save();
    req.flash("success", "Thanks for sharing your experience!");
    res.redirect(`/listings/${listing._id}`);
  })
);

// ================= DELETE REVIEW =================
router.delete(
  "/:reviewId",
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
