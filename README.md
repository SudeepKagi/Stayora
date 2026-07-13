# Stayora

## Description

A web platform for Stayora, an eco-tourism service focused on sustainable, nature-inspired accommodations.

## Features

*   **Listing Management**: Users can create, read, update, and delete (CRUD) accommodation listings. Listings can be filtered by category and searched by title, location, country, or category.
*   **User Authentication**: Provides user registration, login, and logout functionalities using Passport.js.
*   **Review System**: Users can add, view, and remove reviews for listings.
*   **Image Upload**: Integrates Cloudinary for storing listing images.
*   **Geolocation Services**: Utilizes Mapbox for geocoding listing locations and displaying them on a map.
*   **Email Notifications**: Sends transactional emails and alerts, e.g., on user signup.
*   **Subscriber Management**: Manages email subscriptions with database storage.
*   **Authorization**: Implements middleware for authenticating users (`isLoggedIn`), verifying listing ownership (`isOwner`), and validating review authorship (`isReviewAuthor`).
*   **Error Handling**: Custom error handling for Express applications.

## Tech Stack

*   **Language**: JavaScript
*   **Runtime**: Node.js
*   **Web Framework**: Express.js
*   **Database**: MongoDB (Mongoose ODM)
*   **Authentication**: Passport.js, Express Session
*   **Image Storage**: Cloudinary, Multer
*   **Geolocation**: Mapbox SDK
*   **Templating**: EJS, EJS Mate
*   **Package Manager**: npm
*   **Utilities**: `connect-flash`, `connect-mongo`, `dotenv`, `joi`, `method-override`

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
└── utils/
    ├── ExpressError.js
    └── wrapAsync.js
```

## Scripts

*   `test`: `echo "Error: no test specified" && exit 1`

## Environment Variables

The application requires the following environment variables to be set:

*   `ATLASDB_URL`: MongoDB connection string.
*   `SECRET`: Secret key for Express session.
*   `MAP_TOKEN`: Mapbox access token for geolocation services.

## API Overview

### Router: `routes\listing.js`

| Method | Path         | Description                       | Controller                   | Middlewares                                                       |
| :----- | :----------- | :-------------------------------- | :--------------------------- | :---------------------------------------------------------------- |
| `GET`  | `/`          | Get all listings.                 | `listingController.index`    |                                                                   |
| `POST` | `/`          | Create a new listing.             | `listingController.createListing` | `isLoggedIn`, `upload.single('listing[image]')`, `validateListing` |
| `GET`  | `/:id`       | Get a specific listing.           | `listingController.showListing` |                                                                   |
| `PUT`  | `/:id`       | Update a specific listing.        | `listingController.updateListing` | `isLoggedIn`, `isOwner`, `upload.single('listing[image]')`, `validateListing` |
| `DELETE` | `/:id`     | Delete a specific listing.        | `listingController.deleteListing` | `isLoggedIn`, `isOwner`                                           |
| `GET`  | `/new`       | Render form to create new listing. | `listingController.renderNewForm` | `isLoggedIn`                                                      |
| `GET`  | `/:id/edit`  | Render form to edit a listing.    | `listingController.renderEditForm` | `isLoggedIn`, `isOwner`                                           |

### Router: `routes\review.js`

| Method | Path        | Description                       | Controller                  | Middlewares                      |
| :----- | :---------- | :-------------------------------- | :-------------------------- | :------------------------------- |
| `POST` | `/`         | Create a new review.              | `reviewController.createReview` | `isLoggedIn`, `validateReview`   |
| `DELETE` | `/:reviewId` | Delete a specific review.         | `reviewController.deleteReview` | `isLoggedIn`, `isReviewAuthor`   |

### Router: `routes\user.js`

| Method | Path      | Description                     | Controller               | Middlewares                                                                |
| :----- | :-------- | :------------------------------ | :----------------------- | :------------------------------------------------------------------------- |
| `GET`  | `/signup` | Render user registration form.  | `userController.renderSignup` |                                                                            |
| `POST` | `/signup` | Register a new user.            | `userController.signup`  |                                                                            |
| `GET`  | `/login`  | Render user login form.         | `userController.renderLogin` |                                                                            |
| `POST` | `/login`  | Authenticate user and log in.   | `userController.login`   | `saveRedirectUrl`, `passport.authenticate('local', { failureRedirect: '/login', failureFlash: true, })` |
| `GET`  | `/logout` | Log out the current user.       | `userController.logout`  |                                                                            |

## Database Models

### Model: `Listing` (Collection: `listings`)

Represents an accommodation listing.

| Field                  | Type              | Description                                   | Constraints                                                                                |
| :--------------------- | :---------------- | :-------------------------------------------- | :----------------------------------------------------------------------------------------- |
| `title`                | `String`          | Title of the listing.                         | `required`                                                                                 |
| `description`          | `String`          | Detailed description of the listing.          | `required`                                                                                 |
| `image`                | `Object`          | Stores Cloudinary image URL and filename.     |                                                                                            |
| `image.url`            | `String`          | URL of the listing image.                     |                                                                                            |
| `image.filename`       | `String`          | Filename of the listing image on Cloudinary.  |                                                                                            |
| `price`                | `Number`          | Price of the listing per night.               | `required`                                                                                 |
| `location`             | `String`          | Physical location of the listing.             | `required`                                                                                 |
| `country`              | `String`          | Country where the listing is located.         | `required`                                                                                 |
| `reviews`              | `Array<ObjectId>` | References to associated `Review` documents.  | `ref: 'Review'`                                                                            |
| `owner`                | `ObjectId`        | Reference to the `User` who owns the listing. | `ref: 'User'`                                                                              |
| `geometry`             | `Object`          | GeoJSON Point for map coordinates.            |                                                                                            |
| `geometry.type`        | `String`          | GeoJSON type (e.g., 'Point').                 | `enum: ['Point']`, `default: 'Point'`                                                      |
| `geometry.coordinates` | `Array<Number>`   | Longitude and latitude coordinates.           |                                                                                            |
| `category`             | `String`          | Category of the listing.                      | `enum: ['Forest', 'Mountain', 'Beach', 'Desert', 'Farm', 'Luxury', 'Camping']`, `required` |

*   **Indexes**: `geometry` field has a `2dsphere` index.
*   **Hooks**: `post('findOneAndDelete')` hook is implemented to delete all associated reviews when a listing is deleted.

### Model: `Review` (Collection: `reviews`)

Represents a review for a listing.

| Field       | Type       | Description                                   | Constraints           |
| :---------- | :--------- | :-------------------------------------------- | :-------------------- |
| `comment`   | `String`   | The review text.                              |                       |
| `rating`    | `Number`   | Rating given by the user (1-5).               | `min: 1`, `max: 5`    |
| `createdAt` | `Date`     | Timestamp when the review was created.        | `default: Date.now()` |
| `author`    | `ObjectId` | Reference to the `User` who wrote the review. | `ref: 'User'`         |

### Model: `Subscriber` (Collection: `subscribers`)

Represents an email subscriber.

| Field        | Type     | Description                 | Constraints                               |
| :----------- | :------- | :-------------------------- | :---------------------------------------- |
| `email`      | `String` | Subscriber's email address. | `required`, `unique`, `trim`, `lowercase` |
| `subscribedAt` | `Date`   | Timestamp of subscription.  | `default: Date.now`                       |

### Model: `User` (Collection: `users`)

Represents a user of the platform.

| Field   | Type     | Description           | Constraints |
| :------ | :------- | :-------------------- | :---------- |
| `email` | `String` | User's email address. | `required`  |

*   **Plugins**: Uses `passport-local-mongoose` plugin, which automatically adds `username`, `hash` (password), and `salt` fields for authentication.