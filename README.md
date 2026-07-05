# Stayora

## Description

Stayora is a web application designed for managing property listings. It allows users to create, view, update, and delete listings, each with details such as title, description, image, price, location, country, and category. The application also includes user authentication, a review system for listings, and integrates mapping functionalities to display listing locations.

## Features

*   **User Authentication:** Signup, login, and logout functionalities with local strategy.
*   **Listing Management:**
    *   Create new listings with detailed information.
    *   View all available listings with filtering options by category and search terms.
    *   View individual listing details, including location on a map.
    *   Update existing listing information.
    *   Delete listings.
*   **Image Uploads:** Support for uploading images for listings (handled via Cloudinary).
*   **Geocoding:** Automatic geocoding of listing locations using Mapbox to store geographical coordinates.
*   **Review System:**
    *   Add reviews to listings with comments and ratings.
    *   Delete reviews (only by the review author).
*   **Search and Filter:** Filter listings by predefined categories and search across title, location, country, and category.

## Tech Stack

*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB (via Mongoose ODM)
*   **Authentication:** Passport.js (Local Strategy, `passport-local-mongoose`)
*   **Image Storage:** Cloudinary (inferred from `cloudConfig.js` and Multer setup)
*   **Mapping & Geocoding:** Mapbox GL JS, Mapbox Geocoding API
*   **Form Handling:** Multer (for `multipart/form-data`)
*   **Validation:** Joi (for schema validation of listings and reviews)

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
└── middleware.js
```

## Environment Variables

*   `MAP_TOKEN`: Required for Mapbox Geocoding and Mapbox GL JS functionalities.

## API Overview

### User Routes (`/signup`, `/login`, `/logout`)

| Method | Path        | Description                | Middleware                      |
| :----- | :---------- | :------------------------- | :------------------------------ |
| `GET`  | `/signup`   | Renders the signup form.   |                                 |
| `POST` | `/signup`   | Registers a new user.      | `wrapAsync`                     |
| `GET`  | `/login`    | Renders the login form.    |                                 |
| `POST` | `/login`    | Authenticates a user.      | `saveRedirectUrl`, `passport.authenticate`, `userController.login` |
| `GET`  | `/logout`   | Logs out the current user. |                                 |

### Listing Routes (`/listings`)

| Method   | Path             | Description                        | Middleware                                                    |
| :------- | :--------------- | :--------------------------------- | :------------------------------------------------------------ |
| `GET`    | `/`              | Displays all listings.             | `wrapAsync`                                                   |
| `POST`   | `/`              | Creates a new listing.             | `isLoggedIn`, `upload.single`, `validateListing`, `wrapAsync` |
| `GET`    | `/new`           | Renders the new listing form.      | `isLoggedIn`                                                  |
| `GET`    | `/:id`           | Displays a specific listing.       | `wrapAsync`                                                   |
| `PUT`    | `/:id`           | Updates a specific listing.        | `isLoggedIn`, `isOwner`, `upload.single`, `validateListing`, `wrapAsync` |
| `DELETE` | `/:id`           | Deletes a specific listing.        | `isLoggedIn`, `isOwner`, `wrapAsync`                          |
| `GET`    | `/:id/edit`      | Renders the edit listing form.     | `isLoggedIn`, `isOwner`, `wrapAsync`                          |

### Review Routes (`/listings/:id/reviews`)

| Method   | Path             | Description                        | Middleware                                              |
| :------- | :--------------- | :--------------------------------- | :------------------------------------------------------ |
| `POST`   | `/`              | Creates a new review for a listing.| `isLoggedIn`, `validateReview`, `wrapAsync`             |
| `DELETE` | `/:reviewId`     | Deletes a specific review.         | `isLoggedIn`, `isReviewAuthor`, `wrapAsync`             |

## Database Models

### User

Represents a user of the application.

*   `email`: String, required, unique.
*   `username`: String (managed by `passport-local-mongoose`).
*   `password`: Hashed string (managed by `passport-local-mongoose`).

### Listing

Represents a property listing.

*   `title`: String, required.
*   `description`: String, required.
*   `image`: Object
    *   `url`: String
    *   `filename`: String
*   `price`: Number, required.
*   `location`: String, required.
*   `country`: String, required.
*   `reviews`: Array of `ObjectId` references to `Review` documents.
*   `owner`: `ObjectId` reference to a `User` document.
*   `geometry`: GeoJSON Point object.
    *   `type`: String ('Point'), default 'Point'.
    *   `coordinates`: Array of Numbers `[longitude, latitude]`.
*   `category`: String, required, enum `['Forest', 'Mountain', 'Beach', 'Desert', 'Farm', 'Luxury', 'Camping']`.

### Review

Represents a review for a listing.

*   `comment`: String.
*   `rating`: Number (1 to 5).
*   `createdAt`: Date, default to current timestamp.
*   `author`: `ObjectId` reference to a `User` document.

### Subscriber

Represents an email subscriber.

*   `email`: String, required, unique, trimmed, lowercase.
*   `subscribedAt`: Date, default to current timestamp.