const Listing = require('../models/listing.js');
const Review = require('../models/review.js');
const ExpressError = require('../utils/ExpressError.js');

// ================= CREATE REVIEW =================
module.exports.createReview = async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    throw new ExpressError(404, 'Listing not found');
  }

  const review = new Review(req.body.review);
  review.author = req.user._id;

  listing.reviews.push(review);

  await review.save();
  await listing.save();

  req.flash('success', 'Review added successfully!');
  res.redirect(`/listings/${listing._id}`);
};

// ================= DELETE REVIEW =================
module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;

  await Review.findByIdAndDelete(reviewId);

  await Listing.findByIdAndUpdate(id, {
    $pull: { reviews: reviewId },
  });

  req.flash('success', 'Review removed successfully.');
  res.redirect(`/listings/${id}`);
};
