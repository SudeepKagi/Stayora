# Stayora

## Description

Stayora is an Express.js application for managing property listings. It provides features for user authentication, creating and managing listings, adding reviews, searching, and filtering listings. The platform integrates with Mapbox for geographical data and Cloudinary for image storage.

## Features

*   **User Management**: User registration, login, and logout functionalities.
*   **Listing Management**:
    *   Create, view, update, and delete property listings.
    *   Image upload for listings.
    *   Geocoding of listing locations and display on an interactive map.
    *   Categorization of listings (e.g., Forest, Mountain, Beach, Luxury).
*   **Search & Filtering**: Search listings by title, location, country, or category.
*   **Review System**: Users can add and delete reviews for listings.
*   **Authorization**: Role-based access control for listing owners and review authors.
*   **Error Handling**: Centralized error handling for API routes.
*   **Flash Messages**: Provides user feedback for various operations.

## Tech Stack

*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB (via Mongoose ODM)
*   **Authentication**: Passport.js (with `passport-local-mongoose`)
*   **Mapping & Geocoding**: Mapbox SDK
*   **Image Storage**: Cloudinary (integrated with Multer for uploads)
*   **Templating Engine**: EJS
*   **Frontend Styling**: Bootstrap (inferred from CSS classes)

## Folder Structure

```
.
├── controllers/            # Handles application logic for routes
│   ├── listing.js          # Logic for listing operations
│   ├── reviews.js          # Logic for review operations
│   └── users.js            # Logic for user authentication
├── models/                 # Defines database schemas
│   ├── listing.js          # Mongoose model for listings
│   ├── review.js           # Mongoose model for reviews
│   ├── subscriber.js       # Mongoose model for subscribers
│   └── user.js             # Mongoose model for users
├── public/                 # Static assets (CSS, JavaScript)
│   ├── css/
│   │   └── style.css       # Custom CSS styling
│   └── js/
│       └── map.js          # Mapbox integration logic
├── routes/                 # Defines API routes
│   ├── listing.js          # Routes for listings
│   ├── review.js           # Routes for reviews
│   └── user.js             # Routes for user authentication
├── utils/                  # Utility functions
│   ├── ExpressError.js     # Custom error class
│   └── wrapAsync.js        # Async error wrapper
├── cloudConfig.js          # Configuration for Cloudinary storage
└── middleware.js           # Custom middleware for authentication, authorization, and validation
```

## Environment Variables

*   `MAP_TOKEN`: Required for Mapbox API access for geocoding and map display.

## API Overview

### Listings

*   `GET /listings`
    *   **Description**: Retrieve all listings. Supports `category` and `search` query parameters for filtering.
    *   **Controller**: `listingController.index`
*   `POST /listings`
    *   **Description**: Create a new listing. Requires user to be logged in, image upload, and valid listing data.
    *   **Controller**: `listingController.createListing`
*   `GET /listings/new`
    *   **Description**: Renders the form for creating a new listing. Requires user to be logged in.
    *   **Controller**: `listingController.renderNewForm`
*   `GET /listings/:id`
    *   **Description**: Retrieve details of a specific listing. Populates associated reviews and owner.
    *   **Controller**: `listingController.showListing`
*   `PUT /listings/:id`
    *   **Description**: Update a specific listing. Requires user to be logged in, be the listing owner, and optionally upload a new image.
    *   **Controller**: `listingController.updateListing`
*   `DELETE /listings/:id`
    *   **Description**: Delete a specific listing. Requires user to be logged in and be the listing owner. Also deletes associated reviews.
    *   **Controller**: `listingController.deleteListing`
*   `GET /listings/:id/edit`
    *   **Description**: Renders the form to edit a specific listing. Requires user to be logged in and be the listing owner.
    *   **Controller**: `listingController.renderEditForm`

### Reviews

*   `POST /listings/:id/reviews`
    *   **Description**: Create a new review for a specific listing. Requires user to be logged in and valid review data.
    *   **Controller**: `reviewController.createReview`
*   `DELETE /listings/:id/reviews/:reviewId`
    *   **Description**: Delete a specific review from a listing. Requires user to be logged in and be the author of the review.
    *   **Controller**: `reviewController.deleteReview`

### Users

*   `GET /signup`
    *   **Description**: Renders the user signup form.
    *   **Controller**: `userController.renderSignup`
*   `POST /signup`
    *   **Description**: Registers a new user.
    *   **Controller**: `userController.signup`
*   `GET /login`
    *   **Description**: Renders the user login form.
    *   **Controller**: `userController.renderLogin`
*   `POST /login`
    *   **Description**: Authenticates a user. Redirects to `/listings` on success or `/login` on failure.
    *   **Controller**: `userController.login`
*   `GET /logout`
    *   **Description**: Logs out the current user.
    *   **Controller**: `userController.logout`

## Database Models

### `Listing`

Represents a property listing.

*   `title`: `String`, required.
*   `description`: `String`, required.
*   `image`: `{ url: String, filename: String }`
*   `price`: `Number`, required.
*   `location`: `String`, required.
*   `country`: `String`, required.
*   `reviews`: `[ObjectId]` (references `Review` model).
*   `owner`: `ObjectId` (references `User` model).
*   `geometry`: `{ type: String (default: 'Point'), coordinates: [Number] }` (GeoJSON Point).
*   `category`: `String`, required, enum: `['Forest', 'Mountain', 'Beach', 'Desert', 'Farm', 'Luxury', 'Camping']`.

### `Review`

Represents a review for a listing.

*   `comment`: `String`.
*   `rating`: `Number` (min: 1, max: 5).
*   `createdAt`: `Date` (default: current date).
*   `author`: `ObjectId` (references `User` model).

### `Subscriber`

Represents an email subscriber.

*   `email`: `String`, required, unique, trimmed, lowercase.
*   `subscribedAt`: `Date` (default: current date).

### `User`

Represents a user of the application. Uses `passport-local-mongoose` for authentication fields.

*   `email`: `String`, required.
*   `username`: `String` (provided by `passport-local-mongoose`).
*   `hash`: `String` (provided by `passport-local-mongoose`).
*   `salt`: `String` (provided by `passport-local-mongoose`).