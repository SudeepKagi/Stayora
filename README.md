# 🚀 Stayora - Eco-tourism platform for sustainable, nature-inspired accommodations

<div align="center">

![Badge](https://img.shields.io/badge/Stayora-Eco--Friendly-4F46E5?style=for-the-badge)
[![GitHub stars](https://img.shields.io/github/stars/SudeepKagi/Stayora?style=for-the-badge)](https://github.com/SudeepKagi/Stayora/stargazers)
[![License](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](LICENSE)

**Explore, Book, and Relax in Harmony with Nature**

[Features](#features) • [Installation](#installation) • [Usage](#usage) • [Contributing](#contributing)
</div>

---

## 🎯 Overview
Stayora is a full-stack web application that lets hosts list eco-friendly stays (forest cabins, beach huts, mountain lodges, etc.) and lets travelers discover, review, and book them. The platform emphasizes sustainability, integrates interactive maps, and provides a clean, responsive UI built with EJS templates. Stayora aims to bridge the gap between nature lovers and eco-conscious accommodations, promoting a more environmentally friendly approach to tourism.

### Why Stayora?
- 🌟 **Unique Listings**: Explore a curated selection of eco-friendly stays, each with its own unique character and charm.
- 🌿 **Sustainable Tourism**: Support environmentally responsible accommodations and contribute to a more sustainable future.
- 🗺️ **Interactive Maps**: Discover new destinations and plan your trip with our interactive map feature.
- 👥 **Community Reviews**: Read and write reviews to help others make informed decisions about their stays.
- 📸 **High-Quality Images**: Browse through stunning images of each listing, showcasing the beauty of nature and the comfort of the accommodations.

---

## ✨ Features
### User Management
* User authentication and authorization
* User profiles with booking history and reviews
* Password reset and account recovery

### Listing Management
* Create, edit, and delete listings
* Upload images and videos for listings
* Set prices and availability for listings

### Booking and Payment
* Secure payment processing
* Booking confirmation and notification
* Cancellation and refund policies

### Reviews and Ratings
* Leave reviews and ratings for listings
* View reviews and ratings from other users
* Average rating and review count for each listing

### Search and Filter
* Search listings by location, category, and price
* Filter listings by amenities and features
* Sort listings by price, rating, and distance

---

## 🏗️ Architecture
```
┌────────────────────┐
│  Client (EJS)  │
├────────────────────┤
│  Server (Express) │
├────────────────────┤
│  Database (MongoDB) │
├────────────────────┤
│  API (Mapbox, Cloudinary) │
└────────────────────┘
```

---

## 🛠️ Tech Stack
| Technology | Purpose | Version |
| --- | --- | --- |
| Node.js | Server-side runtime | 18.20.8 |
| Express.js | Web framework | 5.2.1 |
| MongoDB | NoSQL database | 8.21.0 |
| EJS | Templating engine | 3.1.10 |
| Mapbox | Maps and geocoding | 0.16.2 |
| Cloudinary | Image storage and processing | 1.41.3 |
| Passport.js | Authentication | 0.7.0 |
| Mongoose | MongoDB ORM | 8.21.0 |

---

## 📦 Installation
### Prerequisites
* Node.js (18.20.8 or later)
* MongoDB (8.21.0 or later)
* Mapbox API key
* Cloudinary API key

### Steps
1. Clone the repository: `git clone https://github.com/SudeepKagi/Stayora.git`
2. Install dependencies: `npm install`
3. Create a `.env` file and add the following variables:
```bash
MAP_TOKEN=YOUR_MAPBOX_API_KEY
CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
CLOUD_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUD_API_SECRET=YOUR_CLOUDINARY_API_SECRET
```
4. Start the server: `node app.js`

---

## 🚀 Usage
```javascript
// Create a new listing
const listing = new Listing({
  title: 'Eco-Friendly Forest Cabin',
  description: 'Escape to the serene woods in this solar-powered cabin.',
  image: 'https://example.com/image.jpg',
  price: 1500,
  location: 'Manali, Himachal Pradesh',
  country: 'India',
});

// Save the listing to the database
listing.save((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Listing saved successfully!');
  }
});
```

---

## 📡 API Documentation
### Get all listings
* URL: `/listings`
* Method: `GET`
* Response: JSON array of listings

### Create a new listing
* URL: `/listings`
* Method: `POST`
* Request body: JSON object with listing details
* Response: JSON object with created listing

### Get a single listing
* URL: `/listings/:id`
* Method: `GET`
* Response: JSON object with listing details

---

## 🤝 Contributing
1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes with a descriptive message
4. Open a pull request against the main branch
5. Wait for review and approval

---

## 📜 License
Stayora is licensed under the ISC License.

---

## 📈 Project Stats
![GitHub stars](https://img.shields.io/github/stars/SudeepKagi/Stayora?style=social) ![GitHub forks](https://img.shields.io/github/forks/SudeepKagi/Stayora?style=social) ![GitHub issues](https://img.shields.io/github/issues/SudeepKagi/Stayora) ![GitHub last commit](https://img.shields.io/github/last-commit/SudeepKagi/Stayora)

---

<div align="center">
### ⭐ Star this repository if you find it helpful!
**Built with ❤️ by SudeepKagi**
[GitHub](https://github.com/SudeepKagi)
</div>