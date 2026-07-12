# Stayora

## Description

Stayora is a web application designed for managing property listings. It allows users to create, view, update, and delete listings, each with details such as title, description, image, price, location, country, and category. The application also includes user authentication, a review system for listings, and integrates mapping functionalities to display listing locations.

## Features

- **User Authentication:** Signup, login, and logout functionalities with local strategy.
- **Listing Management:**
  - Create new listings with detailed information.
  - View all available listings with filtering options by category and search terms.
  - View individual listing details, including location on a map.
  - Update existing listing information.
  - Delete listings.
- **Image Uploads:** Support for uploading images for listings (handled via Cloudinary).
- **Geocoding:** Automatic geocoding of listing locations using Mapbox to store geographical coordinates.
- **Review System:**
  - Add reviews to listings with comments and ratings.
  - Delete reviews (only by the review author).
- **Search and Filter:** Filter listings by predefined categories and search across title, location, country, and category.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose ODM)
- **Authentication:** Passport.js (Local Strategy, `passport-local-mongoose`)
- **Image Storage:** Cloudinary (inferred from `cloudConfig.js` and Multer setup)
- **Mapping & Geocoding:** Mapbox GL JS, Mapbox Geocoding API
- **Form Handling:** Multer (for `multipart/form-data`)
- **Validation:** Joi (for schema validation of listings and reviews)

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
│   ├── js/
│   └── images/
├── routes/                 # Defines API endpoints and maps them to controller functions
│   ├── listing.js          # Routes related to accommodation listings
│   ├── review.js           # Routes related to reviews
│   └── user.js             # Routes related to user authentication and profiles
├── views/                  # EJS templates for server-side rendering
│   ├── layouts/            # Base layout templates
│   ├── partials/           # Reusable partial templates
│   ├── listings/           # Specific views for listings
│   ├── users/              # Specific views for user profiles/auth
│   └── ...                 # Other specific view directories
├── .env.example            # Template for environment variables
├── app.js                  # Main application entry point (Express setup, middleware, routes)
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Exact dependency tree
└── README.md               # This README file
```

## Installation Steps

To get `stayora` up and running on your local machine, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/) (which includes npm)
- **MongoDB**: [Install MongoDB Community Edition](https://docs.mongodb.com/manual/installation/)
- **npm**: Comes bundled with Node.js.

### 1. Clone the Repository

First, clone the `stayora` repository to your local machine:

```bash
git clone https://github.com/your-username/stayora.git
cd stayora
```

_(Replace `your-username` with the actual GitHub username or organization name if this project is hosted publicly.)_

### 2. Install Dependencies

Navigate into the project directory and install all required Node.js packages:

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory of the project. This file will store your sensitive configurations and API keys. Use the `.env.example` file as a template:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/stayoraDB
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SESSION_SECRET=a_very_secret_string_for_sessions
```

- **`PORT`**: The port number on which the Express application will listen.
- **`MONGODB_URI`**: Your MongoDB connection string. For local development, `mongodb://localhost:27017/stayoraDB` is typical.
- **`CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`**: Your credentials for Cloudinary image hosting. You can obtain these from your Cloudinary dashboard.
- **`SESSION_SECRET`**: A strong, random string used to sign the session ID cookie. **Ensure this is kept private and secure.**

### 4. Run the Application

Once all dependencies are installed and environment variables are set, you can start the application:

```bash
npm start
```

The application should now be running locally. You can access it by navigating to `http://localhost:3000` (or the port you specified in your `.env` file) in your web browser.

## Usage

After successfully installing and running `stayora`, you can begin interacting with the platform:

1.  **Access the Home Page**: Open your web browser and navigate to `http://localhost:3000` to see the landing page.
2.  **Register a New User**: Use the registration link/page to create a new user account with a unique username and password.
3.  **Log In**: Authenticate using your registered credentials to access personalized features.
4.  **Browse Listings**: Explore various eco-friendly accommodations available on the platform. Click on individual listings for detailed information.
5.  **Create/Manage Listings (if authorized)**: If your user role permits (e.g., as a host or administrator), you can add new accommodations, update existing ones, and manage associated images.
6.  **Post Reviews**: Authenticated users can leave reviews and ratings on accommodation pages to share their experiences.
7.  **Subscribe**: Sign up for the newsletter to receive updates and news from Stayora.

## Future Improvements

We have several ideas for enhancing `stayora` to provide an even richer user experience and expand its capabilities:

- **Advanced Search & Filtering**: Implement more sophisticated search options, including location-based search, price ranges, accommodation types, and sustainability certifications.
- **Booking System**: Integrate a direct booking functionality or a connection to external booking platforms.
- **Payment Gateway Integration**: Securely handle payments for bookings directly through the platform.
- **User Dashboards**: Develop comprehensive user dashboards for managing bookings, favorite listings, reviews, and profile settings.
- **Admin Panel**: Create an administrative interface for content moderation, user management, and platform analytics.
- **Real-time Notifications**: Implement real-time notifications for booking requests, review updates, or new messages.
- **Geolocation Features**: Integrate maps and location services for better listing discovery and navigation.
- **Containerization**: Implement Docker for easier deployment and environment consistency.
- **Progressive Web App (PWA) Features**: Enhance the web application with PWA capabilities for offline access and improved performance.
  abcd
