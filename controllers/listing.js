const Listing = require('../models/listing.js');
const ExpressError = require('../utils/ExpressError.js');

// INDEX – show all listings
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render('listings/index', { allListings });
};

// NEW – render new listing form
module.exports.renderNewForm = (req, res) => {
  res.render('listings/new');
};

// CREATE – add new listing
module.exports.createListing = async (req, res, next) => {
  const url = req.file.path;
  const filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

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
