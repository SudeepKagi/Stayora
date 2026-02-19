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
	* `ATLASDB_URL`: MongoDB Atlas connection string
	* `CLOUD_NAME`: Cloudinary cloud name
	* `CLOUD_API_KEY`: Cloudinary API key
	* `CLOUD_API_SECRET`: Cloudinary API secret
	* `MAP_TOKEN`: Mapbox access token
	* `SECRET`: Secret key for session management
4. Run the application: `node app.js`

## Usage Guide

1. Start the application by running `node app.js`.
2. Open a web browser and navigate to `http://localhost:8080`.
3. Register as a new user or log in if you already have an account.
4. Create a new listing by clicking on the "New Listing" button.
5. Fill in the listing details, including title, description, location, and image.
6. Click on the "Create Listing" button to save the listing.
7. View all listings by clicking on the "Listings" button.
8. Search for listings by title, location, or category using the search bar.
9. Filter listings by category using the dropdown menu.
10. Leave a review for a listing by clicking on the "Leave a Review" button.

## API Documentation

The API documentation is not available for this project. However, the API endpoints are as follows:

* **GET /listings**: Retrieve all listings
* **POST /listings**: Create a new listing
* **GET /listings/:id**: Retrieve a single listing by ID
* **PUT /listings/:id**: Update a listing
* **DELETE /listings/:id**: Delete a listing
* **POST /listings/:id/reviews**: Create a new review for a listing
* **DELETE /listings/:id/reviews/:reviewId**: Delete a review

## Contributing Guidelines

To contribute to this project, follow these steps:

1. Fork the repository on GitHub.
2. Clone the forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make changes to the code and commit them with a descriptive commit message.
5. Push the changes to your forked repository.
6. Create a pull request to the main repository.
7. Wait for the pull request to be reviewed and merged.

Note: Make sure to follow the coding standards and best practices used in the project.