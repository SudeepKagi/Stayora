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
	* `ATLASDB_URL`: Your MongoDB Atlas connection string
	* `CLOUD_NAME`: Your Cloudinary cloud name
	* `CLOUD_API_KEY`: Your Cloudinary API key
	* `CLOUD_API_SECRET`: Your Cloudinary API secret
	* `MAP_TOKEN`: Your Mapbox access token
4. Start the server: `node app.js`

## Usage

To use the application, follow these steps:

1. Open a web browser and navigate to `http://localhost:8080`
2. Create an account or log in to an existing account
3. Browse listings, create new listings, and leave reviews
4. Search and filter listings by category, location, and more

## API Documentation

The API documentation is not available for this project. However, the API endpoints are defined in the `routes` directory.

### Endpoints

* **GET /listings**: Retrieve a list of all listings
* **POST /listings**: Create a new listing
* **GET /listings/:id**: Retrieve a single listing by ID
* **PUT /listings/:id**: Update a single listing by ID
* **DELETE /listings/:id**: Delete a single listing by ID
* **POST /listings/:id/reviews**: Create a new review for a listing
* **DELETE /listings/:id/reviews/:reviewId**: Delete a review for a listing

## Contributing

To contribute to the project, follow these steps:

1. Fork the repository: `git fork https://github.com/SudeepKagi/Stayora.git`
2. Create a new branch: `git branch feature/new-feature`
3. Make changes and commit them: `git commit -m "New feature"`
4. Push changes to your fork: `git push origin feature/new-feature`
5. Create a pull request: `git pull-request`

Please ensure that your code is formatted according to the project's coding standards and that you have included tests for any new functionality.

## License

The project is licensed under the ISC license. See the [LICENSE](LICENSE) file for more information.