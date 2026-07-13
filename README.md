# Stayora

## Description

A web platform for Stayora, an eco-tourism service focused on sustainable, nature-inspired accommodations.

## Features

- **Listing Management**: Create, read, update, and delete (CRUD) accommodation listings.
- **Listing Search & Filtering**: Filter listings by category and search by title, location, country, or category.
- **User Authentication**: User registration, login, and logout functionalities using Passport.js.
- **Review System**: Users can add and delete reviews for listings.
- **Image Upload**: Integrate Cloudinary for storing listing images.
- **Geolocation**: Utilize Mapbox for geocoding listing locations and displaying them on a map.
- **Authorization**: Implement middleware for user authentication (`isLoggedIn`), listing ownership (`isOwner`), and review authorship (`isReviewAuthor`).
- **Error Handling**: Custom error handling with `ExpressError` and `wrapAsync` utility.

## Tech Stack

- **Language**: JavaScript
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: MongoDB
- **Authentication**: Passport.js, Express Session
- **Storage**: Cloudinary
- **Package Manager**: npm

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

- `test`: `echo "Error: no test specified" && exit 1`

## Environment Variables

- `MAP_TOKEN`: Mapbox access token for geolocation services.

## API Overview

### Listings

| Method   | Path                 | Description                        | Controller Function                | Middleware                                                                    |
| :------- | :------------------- | :--------------------------------- | :--------------------------------- | :---------------------------------------------------------------------------- |
| `GET`    | `/listings`          | Get all listings.                  | `listingController.index`          |                                                                               |
| `POST`   | `/listings`          | Create a new listing.              | `listingController.createListing`  | `isLoggedIn`, `upload.single('listing[image]')`, `validateListing`            |
| `GET`    | `/listings/new`      | Render form to create new listing. | `listingController.renderNewForm`  | `isLoggedIn`                                                                  |
| `GET`    | `/listings/:id`      | Get a specific listing.            | `listingController.showListing`    |                                                                               |
| `PUT`    | `/listings/:id`      | Update a specific listing.         | `listingController.updateListing`  | `isLoggedIn`, `isOwner`, `upload.single('listing[image]')`, `validateListing` |
| `DELETE` | `/listings/:id`      | Delete a specific listing.         | `listingController.deleteListing`  | `isLoggedIn`, `isOwner`                                                       |
| `GET`    | `/listings/:id/edit` | Render form to edit a listing.     | `listingController.renderEditForm` | `isLoggedIn`, `isOwner`                                                       |

### Reviews

| Method   | Path                              | Description                              | Controller Function             | Middleware                     |
| :------- | :-------------------------------- | :--------------------------------------- | :------------------------------ | :----------------------------- |
| `POST`   | `/listings/:id/reviews`           | Create a new review for a listing.       | `reviewController.createReview` | `isLoggedIn`, `validateReview` |
| `DELETE` | `/listings/:id/reviews/:reviewId` | Delete a specific review from a listing. | `reviewController.deleteReview` | `isLoggedIn`, `isReviewAuthor` |

### Users

| Method | Path      | Description                    | Controller Function           | Middleware                                               |
| :----- | :-------- | :----------------------------- | :---------------------------- | :------------------------------------------------------- |
| `GET`  | `/signup` | Render user registration form. | `userController.renderSignup` |                                                          |
| `POST` | `/signup` | Register a new user.           | `userController.signup`       |                                                          |
| `GET`  | `/login`  | Render user login form.        | `userController.renderLogin`  |                                                          |
| `POST` | `/login`  | Authenticate user and log in.  | `userController.login`        | `saveRedirectUrl`, `passport.authenticate('local', ...)` |
| `GET`  | `/logout` | Log out the current user.      | `userController.logout`       |                                                          |

## Database Models

### Listing

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

- `post('findOneAndDelete')` hook: Deletes associated reviews when a listing is deleted.
- `geometry` field has a `2dsphere` index.

### Review

Represents a review for a listing.

| Field       | Type       | Description                                   | Constraints           |
| :---------- | :--------- | :-------------------------------------------- | :-------------------- |
| `comment`   | `String`   | The review text.                              |                       |
| `rating`    | `Number`   | Rating given by the user (1-5).               | `min: 1`, `max: 5`    |
| `createdAt` | `Date`     | Timestamp when the review was created.        | `default: Date.now()` |
| `author`    | `ObjectId` | Reference to the `User` who wrote the review. | `ref: 'User'`         |

### Subscriber

Represents an email subscriber.

| Field   | Type     | Description                 | Constraints                               |
| :------ | :------- | :-------------------------- | :---------------------------------------- |
| `email` | `String` | Subscriber's email address. | `required`, `unique`, `trim`, `lowercase` |

### User

Represents a user of the platform.

| Field   | Type     | Description           | Constraints |
| :------ | :------- | :-------------------- | :---------- |
| `email` | `String` | User's email address. | `required`  |

- Uses `passport-local-mongoose` plugin to add `username`, `hash`, and `salt` fields for authentication.
