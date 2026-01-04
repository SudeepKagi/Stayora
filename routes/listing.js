const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

// Listings index
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

// New listing form
router.get("/new",isLoggedIn, (req, res) => {
    res.render("listings/new");
});

// Create listing
router.post("/",isLoggedIn,validateListing,wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; 
    await newListing.save();
    req.flash("success", " Your stay has been added successfully!");
    res.redirect("/listings");
  })
);

// Show listing
router.get("/:id", wrapAsync(async (req, res) => {
  const list = await Listing.findById(req.params.id)
  .populate({
    path: "reviews",
    populate: {
      path: "author",
    },
  })
  .populate("owner");

  if (!list) {
    req.flash("error", "Listing not found.");
    return res.redirect("/listings");
  }

  res.render("listings/show", { list });
}));

// Edit listing
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(async (req, res) => {
    const list = await Listing.findById(req.params.id);
    if (!list){
        req.flash("error", "The listing you wanted to edit is not availale.");
        res.redirect("/listings")
    }else{
        res.render("listings/edit", { list });
    }
    

}));

// Update listing
router.put("/:id",isLoggedIn,isOwner,validateListing, wrapAsync(async (req, res) => {
    if (!req.body || !req.body.listing) {
      throw new ExpressError(400, "Send valid data for listing");
    }
    await Listing.findByIdAndUpdate(req.params.id, req.body.listing);
    req.flash("success", "Stay details updated successfully!");
    res.redirect(`/listings/${req.params.id}`);
}));

// Delete listing
router.delete("/:id",isLoggedIn,isOwner, wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "Stay removed successfully.");
    res.redirect("/listings");
}));

module.exports = router;