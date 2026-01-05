const Listing = require('../models/listing.js');
const ExpressError = require('../utils/ExpressError.js');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({
  accessToken: mapToken,
});

// INDEX – show all listings
module.exports.index = async (req, res) => {
  const { category } = req.query;

  let allListings;
  if (category) {
    allListings = await Listing.find({ category });
  } else {
    allListings = await Listing.find({});
  }

  res.render('listings/index', { allListings });
};
// NEW – render new listing form
module.exports.renderNewForm = (req, res) => {
  res.render('listings/new');
};

// CREATE – add new listing
module.exports.createListing = async (req, res, next) => {
  // 1. Get location text from form
  const location = req.body.listing.location;

  // 2. Forward geocode location → coordinates
  const geoResponse = await geocodingClient
    .forwardGeocode({
      query: location,
      limit: 1,
    })
    .send();

  // 3. Handle image (Cloudinary)
  const url = req.file.path;
  const filename = req.file.filename;

  // 4. Create listing
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  // 5. Save geometry (GeoJSON)
  newListing.geometry = geoResponse.body.features[0].geometry;

  await newListing.save();

  req.flash('success', 'New Listing Created!');
  res.redirect('/listings');
};

// SHOW – show single listing
module.exports.showListing = async (req, res) => {
  const list = await Listing.findById(req.params.id)
    .populate({
      path: 'reviews',
      populate: { path: 'author' },
    })
    .populate('owner');

  if (!list) {
    req.flash('error', 'Listing not found.');
    return res.redirect('/listings');
  }

  res.render('listings/show', { list });
};

// EDIT – render edit form
module.exports.renderEditForm = async (req, res) => {
  const list = await Listing.findById(req.params.id);

  if (!list) {
    req.flash('error', 'The listing you wanted to edit is not available.');
    return res.redirect('/listings');
  }

  res.render('listings/edit', { list });
};

// UPDATE – update listing
module.exports.updateListing = async (req, res) => {
  if (!req.body || !req.body.listing) {
    throw new ExpressError(400, 'Send valid data for listing');
  }

  let listing = await Listing.findByIdAndUpdate(
    req.params.id,
    req.body.listing
  );

  if (typeof req.file !== 'undefined') {
    const url = req.file.path;
    const filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash('success', 'Stay details updated successfully!');
  res.redirect(`/listings/${req.params.id}`);
};

// DELETE – delete listing
module.exports.deleteListing = async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);

  req.flash('success', 'Stay removed successfully.');
  res.redirect('/listings');
};
