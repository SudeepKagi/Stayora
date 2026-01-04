const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

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
    type: String,
    default:
      "https://yuyiii.com/blog/wp-content/uploads/2024/03/vlcsnap-2019-08-07-17h11m00s418-1.jpg",
    set: (v) => {
      return v === ""
        ? "https://yuyiii.com/blog/wp-content/uploads/2024/03/vlcsnap-2019-08-07-17h11m00s418-1.jpg"
        : v;
    },
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
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async function (listing) {
  if (listing && listing.reviews.length) {
    await Review.deleteMany({
      _id: { $in: listing.reviews },
    });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
