# Stayora - Eco-tourism platform for sustainable, nature-inspired accommodations
<div align="center">

![Badge](https://img.shields.io/badge/Stayora-Eco--Friendly-4F46E5?style=for-the-badge)
[![GitHub stars](https://img.shields.io/github/stars/SudeepKagi/Stayora?style=for-the-badge)](https://github.com/SudeepKagi/Stayora/stargazers)
[![License](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](LICENSE)

**Explore, Book, and Relax in Harmony with Nature**

[Features](#features) • [Installation](#installation) • [Usage](#usage) • [Contributing](#contributing)
</div>

## Overview
Stayora is a full-stack web application that lets hosts list eco-friendly stays (forest cabins, beach huts, mountain lodges, etc.) and lets travelers discover, review, and book them. The platform emphasizes sustainability, integrates interactive maps, and provides a clean, responsive UI built with EJS templates. Stayora aims to bridge the gap between nature lovers and eco-conscious accommodations, promoting a more environmentally friendly approach to tourism.

### Why Stayora?
- **Unique Listings**: Explore a curated selection of eco-friendly stays, each with its own unique character and charm.
- **Sustainable Tourism**: Support environmentally responsible accommodations and contribute to a more sustainable future.
- **Interactive Maps**: Discover new destinations and plan your trip with our interactive map feature.
- **Community Reviews**: Read and write reviews to help others make informed decisions about their stays.
- **High-Quality Images**: Browse through stunning images of each listing, showcasing the beauty of nature and the comfort of the accommodations.

## Features
### User Management
* User authentication and authorization
* User profiles with booking history and reviews
* Password reset and account recovery

### Listing Management
* Create, edit, and delete listings
* Upload images and videos for listings
* Set prices and availability

### Review System
* Leave reviews for listings
* View reviews from other users
* Delete reviews

## Tech Stack
* **Frontend**: EJS, CSS, JavaScript
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Cloud Storage**: Cloudinary
* **Map Integration**: Mapbox

## Installation
To install the project, follow these steps:
1. Clone the repository using `git clone https://github.com/SudeepKagi/Stayora.git`
2. Install the dependencies using `npm install`
3. Create a `.env` file and add the following environment variables:
	* `ATLASDB_URL`: your MongoDB Atlas connection string
	* `CLOUD_NAME`: your Cloudinary cloud name
	* `CLOUD_API_KEY`: your Cloudinary API key
	* `CLOUD_API_SECRET`: your Cloudinary API secret
	* `MAP_TOKEN`: your Mapbox access token
4. Run the application using `node app.js`

## Usage
To use the application, follow these steps:
1. Open a web browser and navigate to `http://localhost:8080`
2. Create an account or log in to an existing account
3. Browse through the listings and filter by category or location
4. View the details of a listing and leave a review
5. Create a new listing and upload images and videos

## API Documentation
The API documentation is not available for this project.

## Contributing
To contribute to the project, follow these steps:
1. Fork the repository using `git fork https://github.com/SudeepKagi/Stayora.git`
2. Create a new branch using `git branch feature/your-feature`
3. Make changes to the code and commit them using `git commit -m "your commit message"`
4. Push the changes to the remote repository using `git push origin feature/your-feature`
5. Create a pull request to merge the changes into the main branch

### Code of Conduct
* Be respectful and considerate of others
* Follow the standard professional guidelines for code quality and formatting
* Test your code thoroughly before submitting a pull request

### License
The project is licensed under the ISC license. See the [LICENSE](LICENSE) file for more information.