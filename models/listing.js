const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
    },
  },
  category: {
    type: String,
    enum: [
      'Forest',
      'Mountain',
      'Beach',
      'Desert',
      'Farm',
      'Luxury',
      'Camping',
    ],
    required: true,
  },
});

listingSchema.post('findOneAndDelete', async function (listing) {
  if (listing && listing.reviews.length) {
    await Review.deleteMany({
      _id: { $in: listing.reviews },
    });
  }
});

listingSchema.index({ geometry: '2dsphere' });

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
