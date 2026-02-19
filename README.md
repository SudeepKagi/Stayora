# Stayora
**Eco-tourism platform for sustainable, nature-inspired accommodations**

[![Node.js](https://img.shields.io/badge/Node.js-18.20.8-brightgreen)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/Express-5.2.1-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.21.0-green)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-lightgrey)](https://opensource.org/licenses/ISC)

[Demo](#) • [Documentation](#) • [Issues](https://github.com/SudeepKagi/Stayora/issues) • [Pull Requests](https://github.com/SudeepKagi/Stayora/pulls)

## Overview

Stayora is a full-stack web application that lets hosts list eco-friendly stays (forest cabins, beach huts, mountain lodges, etc.) and lets travelers discover, review, and book them. The platform emphasizes sustainability, integrates interactive maps, and provides a clean, responsive UI built with **EJS** templates.

### Key Features

* **User authentication**: Powered by Passport + `passport-local-mongoose`.
* **CRUD for listings**: Hosts can create, edit, view, and delete listings. Images are stored on Cloudinary.
* **Geo-location & map**: Listings are geocoded via Mapbox and displayed on an interactive map.
* **Reviews**: Authenticated users can leave, edit, and delete reviews for a listing.
* **Search & filter**: Full-text search on title, location, country, category + category filter.
* **Subscription newsletter**: Simple email capture stored in MongoDB with duplicate-email handling.

### Tech Stack

* **Frontend**: EJS templates, CSS (with CSS variables), JavaScript
* **Backend**: Node.js, Express.js, MongoDB (with Mongoose)
* **Database**: MongoDB
* **Authentication**: Passport.js
* **Maps**: Mapbox
* **Image Storage**: Cloudinary

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone https://github.com/SudeepKagi/Stayora.git`
2. Install dependencies: `npm install`
3. Create a `.env` file and add the following environment variables:
	* `ATLASDB_URL`: MongoDB connection string
	* `MAP_TOKEN`: Mapbox access token
	* `CLOUD_NAME`: Cloudinary cloud name
	* `CLOUD_API_KEY`: Cloudinary API key
	* `CLOUD_API_SECRET`: Cloudinary API secret
	* `SECRET`: Express session secret
4. Run the application: `node app.js`

## Usage Guide

1. Register as a user: Visit `http://localhost:8080/signup` and fill out the registration form.
2. Login: Visit `http://localhost:8080/login` and enter your credentials.
3. Create a new listing: Visit `http://localhost:8080/listings/new` and fill out the listing form.
4. View listings: Visit `http://localhost:8080/listings` to view all listings.
5. Search and filter listings: Use the search bar and category filter to find specific listings.
6. Leave a review: Visit a listing page and click the "Leave a Review" button.

## API Documentation

The API is built using Express.js and uses RESTful endpoints. The following endpoints are available:

* **GET /listings**: Retrieve all listings
* **POST /listings**: Create a new listing
* **GET /listings/:id**: Retrieve a single listing
* **PUT /listings/:id**: Update a listing
* **DELETE /listings/:id**: Delete a listing
* **POST /listings/:id/reviews**: Create a new review for a listing
* **DELETE /listings/:id/reviews/:reviewId**: Delete a review

## Contributing Guidelines

To contribute to the project, please follow these steps:

1. Fork the repository: Create a new fork of the repository on GitHub.
2. Create a new branch: Create a new branch for your feature or bug fix.
3. Make changes: Make the necessary changes to the code.
4. Test the changes: Run the application and test the changes.
5. Commit the changes: Commit the changes with a descriptive commit message.
6. Create a pull request: Create a new pull request to merge the changes into the main branch.

Please ensure that your code is formatted according to the project's coding standards and that you have included any necessary tests or documentation.