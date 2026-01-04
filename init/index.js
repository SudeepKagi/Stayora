const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const { init } = require("../models/review.js");
const { InvalidOptionArgumentError } = require("commander");

const MONGO_URL = "mongodb://127.0.0.1:27017/stayora";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("connected to DB");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "69594f96d44693eb1f2c41ec",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

main()
  .then(() => {
    initDB();
  })
  .catch((err) => {
    console.log(err);
  });
