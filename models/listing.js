const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://yuyiii.com/blog/wp-content/uploads/2024/03/vlcsnap-2019-08-07-17h11m00s418-1.jpg",
        set: (v) => {
            return v === "" ? "https://yuyiii.com/blog/wp-content/uploads/2024/03/vlcsnap-2019-08-07-17h11m00s418-1.jpg" : v;
        }
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    }

})

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;