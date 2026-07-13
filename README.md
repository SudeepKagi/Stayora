# Stayora

## Description
Stayora is a web platform designed for an eco-tourism service, offering sustainable and nature-inspired accommodations.

## Features
*   **Listing Management**:
    *   Create, view, update, and delete accommodation listings.
    *   Filter and search listings by category, title, location, and country.
    *   Associate listings with an owner.
    *   Upload images for listings, stored on Cloudinary.
    *   Geocode listing locations using Mapbox to display on a map.
*   **Review System**:
    *   Add and delete reviews for specific listings.
    *   Associate reviews with an author.
*   **User Authentication**:
    *   User registration, login, and logout functionalities using Passport.js and Express Session.
    *   Authentication and authorization middleware to protect routes.
*   **Interactive Maps**: Display listing locations on an interactive map using Mapbox GL JS.
*   **Error Handling**: Custom error handling for Express.js applications.

## Tech Stack
*   **Language**: JavaScript
*   **Runtime**: Node.js
*   **Framework**: Express
*   **Database**: MongoDB
*   **Authentication**: Passport.js, Express Session
*   **Storage**: Cloudinary
*   **Mapping & Geocoding**: Mapbox SDK, Mapbox GL JS
*   **File Uploads**: Multer
*   **Package Manager**: npm

## Folder Structure
```
.
├── controllers/
│   ├── listing.js
│   ├── reviews.js
│   └── users.js
├── models/
│   ├── listing.js
│   ├── review.js
│   ├── subscriber.js
│   └── user.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── map.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
├── cloudConfig.js
├── middleware.js
└── README.md
```

## Installation
The project uses npm as its package manager.
*No explicit installation steps were provided.*

## Usage
*No explicit usage instructions were provided.*

## Scripts
*   `test`: `echo "Error: no test specified" && exit 1`

## Environment Variables
The following environment variable is used:
*   `MAP_TOKEN`: Used for Mapbox API access.

## API Overview

### User Routes (`/signup`, `/login`, `/logout`)
*   **`GET /signup`**: Renders the user signup form.
*   **`POST /signup`**: Registers a new user.
*   **`GET /login`**: Renders the user login form.
*   **`POST /login`**: Authenticates a user.
*   **`GET /logout`**: Logs out the current user.

### Listing Routes (`/listings`)
*   **`GET /listings`**: Retrieves all listings. Supports filtering by `category` and `search` query parameters.
*   **`POST /listings`**: Creates a new listing. Requires authentication and handles image upload.
*   **`GET /listings/new`**: Renders the form to create a new listing. Requires authentication.
*   **`GET /listings/:id`**: Retrieves a specific listing by ID.
*   **`PUT /listings/:id`**: Updates a specific listing by ID. Requires authentication and owner authorization, and handles image upload.
*   **`DELETE /listings/:id`**: Deletes a specific listing by ID. Requires authentication and owner authorization.
*   **`GET /listings/:id/edit`**: Renders the form to edit a specific listing. Requires authentication and owner authorization.

### Review Routes (`/listings/:id/reviews`)
*   **`POST /listings/:id/reviews`**: Creates a new review for a specific listing. Requires authentication.
*   **`DELETE /listings/:id/reviews/:reviewId`**: Deletes a specific review from a listing. Requires authentication and review author authorization.

## Database Models

### Listing
Represents an accommodation listing.
*   `title` (String, required)
*   `description` (String, required)
*   `image` (Object: `url` String, `filename` String)
*   `price` (Number, required)
*   `location` (String, required)
*   `country` (String, required)
*   `reviews` (Array of `ObjectId` references to `Review` model)
*   `owner` (ObjectId reference to `User` model)
*   `geometry` (GeoJSON Point: `type` String ('Point'), `coordinates` Array of Numbers [longitude, latitude])
*   `category` (String, enum: 'Forest', 'Mountain', 'Beach', 'Desert', 'Farm', 'Luxury', 'Camping', required)

### Review
Represents a user review for a listing.
*   `comment` (String)
*   `rating` (Number, min: 1, max: 5)
*   `createdAt` (Date, default: `Date.now()`)
*   `author` (ObjectId reference to `User` model)

### Subscriber
Represents an email subscriber.
*   `email` (String, required, unique, trimmed, lowercase)
*   `subscribedAt` (Date, default: `Date.now`)

### User
Represents a user of the platform.
*   `email` (String, required)
*   Includes `username`, `hash`, and `salt` fields provided by `passport-local-mongoose`.