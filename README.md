# Stayora  
**Eco‑tourism platform for sustainable, nature‑inspired accommodations**  

---  

![Node.js](https://img.shields.io/badge/Node.js-18.20.8-brightgreen) ![Express](https://img.shields.io/badge/Express-5.2.1-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-8.21.0-green) ![License](https://img.shields.io/badge/License-ISC-lightgrey)  

[Demo](#) • [Documentation](#) • [Issues](https://github.com/SudeepKagi/Stayora/issues) • [Pull Requests](https://github.com/SudeepKagi/Stayora/pulls)  

---  

## Overview  

Stayora is a full‑stack web application that lets hosts list eco‑friendly stays (forest cabins, beach huts, mountain lodges, etc.) and lets travelers discover, review, and book them. The platform emphasizes sustainability, integrates interactive maps, and provides a clean, responsive UI built with **EJS** templates.  

* **Who should use it?**  
  * Eco‑tourism operators who want a simple way to showcase their properties.  
  * Travelers looking for nature‑focused accommodations.  
  * Developers interested in a modern MERN‑style (Mongo‑Express‑EJS) starter kit with authentication, file uploads, and map integration.  

* **Current version:** `1.0.0` (stable)  

---  

## Features  

| Feature | Description | Status |
|---------|-------------|--------|
| **User authentication** (sign‑up, login, logout) | Powered by Passport + `passport-local-mongoose`. | ✅ Stable |
| **CRUD for listings** | Hosts can create, edit, view, and delete listings. Images are stored on Cloudinary. | ✅ Stable |
| **Geo‑location & map** | Listings are geocoded via Mapbox and displayed on an interactive map. | ✅ Stable |
| **Reviews** | Authenticated users can leave, edit, and delete reviews for a listing. | ✅ Stable |
| **Search & filter** | Full‑text search on title, location, country, category + category filter. | ✅ Stable |
| **Subscription newsletter** | Simple email capture stored in MongoDB with duplicate‑email handling. | ✅ Stable |
| **Flash messages** | Success & error notifications using `connect-flash`. | ✅ Stable |
| **Responsive UI** | EJS templates with a mobile‑first CSS layout. | ✅ Stable |
| **Session store** | Sessions persisted in MongoDB via `connect-mongo`. | ✅ Stable |
| **Error handling** | Centralised error middleware with custom `ExpressError`. | ✅ Stable |
| **Docker support** *(planned)* | Containerised deployment for easier production rollout. | 🚧 Planned |
| **API rate limiting** *(planned)* | Protect public endpoints from abuse. | 🚧 Planned |

---  

## Tech Stack  

| Layer | Technology | Reason |
|-------|------------|--------|
| **Runtime** | Node.js `v18.20.8` | Modern, async‑first JavaScript runtime |
| **Web framework** | Express `5.2.1` | Minimalist routing & middleware |
| **Templating** | EJS `3.1.10` + `ejs-mate` | Server‑side rendering with layout support |
| **Database** | MongoDB (Atlas) + Mongoose `8.21.0` | Flexible schema, geospatial queries |
| **Authentication** | Passport `0.7.0` + `passport-local-mongoose` | Simple username/password flow |
| **File uploads** | Multer `2.0.2` + `multer-storage-cloudinary` | Direct upload to Cloudinary |
| **Image storage** | Cloudinary | CDN‑backed image hosting |
| **Geocoding / Maps** | Mapbox SDK `@mapbox/mapbox-sdk` | Forward geocoding & map tiles |
| **Session store** | connect-mongo `4.6.0` | Persistent sessions in MongoDB |
| **Validation** | Joi `17.13.3` | Request payload validation |
| **Environment** | dotenv `17.2.3` | `.env` configuration |
| **Styling** | Custom CSS (see `public/css/style.css`) | Simple, lightweight UI |
| **Flash messages** | connect-flash `0.1.1` | User feedback |

---  

## Architecture  

```
Stayora/
├── app.js                 # Main entry point, middleware, routes registration
├── cloudConfig.js         # Cloudinary storage configuration
├── middleware.js          # Auth & validation helpers
├── models/                # Mongoose schemas (User, Listing, Review, Subscriber)
├── controllers/           # Business logic for listings, reviews, users
├── routes/                # Express routers (listing, review, user)
├── views/                 # EJS templates (layouts, partials, pages)
├── public/                # Static assets (css, js, images)
├── utils/                 # Custom error & async wrapper
├── init/                  # Seed data utilities
└── .env.example           # Template for required environment variables
```

* **Data flow:**  
  1. HTTP request → Express router → controller → Mongoose model → MongoDB.  
  2. For listings, the controller calls Mapbox to geocode the address, stores the GeoJSON in `geometry`, and uploads the image to Cloudinary.  
  3. Responses are rendered with EJS or redirected with flash messages.  

* **Geospatial index:** `listingSchema.index({ geometry: '2dsphere' })` enables radius searches (future feature).  

---  

## Getting Started  

### Prerequisites  

| Tool | Minimum version |
|------|-----------------|
| Node.js | `18.20.8` |
| npm | `9.x` (bundled with Node) |
| MongoDB Atlas account | – |
| Cloudinary account | – |
| Mapbox account (access token) | – |

### Installation  

```bash
# 1️⃣ Clone the repo
git clone https://github.com/SudeepKagi/Stayora.git
cd Stayora

# 2️⃣ Install dependencies
npm ci   # installs exact versions from package-lock.json

# 3️⃣ Create a .env file (see .env.example)
cp .env.example .env
# Edit .env with your credentials:
#   ATLASDB_URL=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/stayora
#   SECRET=yourSessionSecret
#   MAP_TOKEN=yourMapboxPublicToken
#   CLOUDINARY_CLOUD_NAME=...
#   CLOUDINARY_API_KEY=...
#   CLOUDINARY_API_SECRET=...

# 4️⃣ (Optional) Seed the database with sample data
node seed.js   # creates demo users, listings, reviews
```

### Running the app  

```bash
# Development (auto‑restart with nodemon if installed)
npm run dev   # not defined yet – you can use: npx nodemon app.js

# Production
node app.js
```

The server starts on **http://localhost:8080**.  

---  

## Configuration  

| Variable | Description | Example |
|----------|-------------|---------|
| `ATLASDB_URL` | MongoDB connection string (required) | `mongodb+srv://user:pass@cluster0.mongodb.net/stayora` |
| `SECRET` | Session secret for `express-session` | `superSecret123` |
| `MAP_TOKEN` | Mapbox public token for geocoding & map tiles | `pk.eyJ1Ijoi...` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud identifier | `stayora-cloud` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789012345` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `aBcDeFgHiJkLmNoPqRsTuVwXyZ` |

> **Tip:** Keep `.env` out of version control (`.gitignore` already includes it).  

---  

## Usage  

### Web UI  

* Visit `http://localhost:8080`  
* **Sign up** → **Log in** → **Create a listing** (via *New Listing* button)  
* Browse listings, filter by category, or search by keyword.  
* Click a listing to view details, map location, and reviews.  

### API (REST‑style)  

All API routes are prefixed with the base URL (`http://localhost:8080`).  
Authentication is session‑based (cookies). Use the web UI to obtain a session or integrate with a client that supports cookie handling.

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/listings` | List all listings (supports `?category=` and `?search=`) | ❌ |
| `POST` | `/listings` | Create a new listing (multipart/form‑data, `listing[image]` file) | ✅ |
| `GET` | `/listings/:id` | Show a single listing with reviews | ❌ |
| `PUT` | `/listings/:id` | Update listing (optional image) | ✅ (owner) |
| `DELETE` | `/listings/:id` | Delete a listing | ✅ (owner) |
| `POST` | `/listings/:id/reviews` | Add a review to a listing | ✅ |
| `PUT` | `/listings/:id/reviews/:reviewId` | Edit a review | ✅ (author) |
| `DELETE` | `/listings/:id/reviews/:reviewId` | Delete a review | ✅ (author) |
| `POST` | `/register` | Register a new user | ❌ |
| `POST` | `/login` | Log in a user | ❌ |
| `GET` | `/logout` | Log out current session | ✅ |
| `POST` | `/subscribe` | Subscribe to the newsletter (form field `email`) | ❌ |

#### Example: Create a Listing (cURL)

```bash
curl -X POST http://localhost:8080/listings \
  -b cookies.txt -c cookies.txt \   # use cookies from a logged‑in session
  -F "listing[title]=Forest Cabin" \
  -F "listing[description]=Cozy cabin surrounded by pine trees." \
  -F "listing[price]=120" \
  -F "listing[location]=Yosemite National Park, CA" \
  -F "listing[country]=USA" \
  -F "listing[category]=Forest" \
  -F "listing[image]=@/path/to/photo.jpg"
```

#### Example: Search Listings

```bash
curl "http://localhost:8080/listings?search=beach&category=Beach"
```

---  

## Development  

### Setting up a dev environment  

```bash
# Clone & install (see Installation)
git checkout -b feature/awesome-thing
npm install
```

### Running tests  

> No automated test suite is currently configured.  
> Feel free to add Jest/Mocha tests and run them with `npm test`.  

### Code style  

* Use **ESLint** (recommended) with the **Airbnb** base config.  
* Follow the existing file naming conventions (`camelCase` for variables, `PascalCase` for models).  

### Debugging tips  

* Errors are rendered via `views/error.ejs`.  
* Use `console.log` or `debug` module to inspect request data.  
* MongoDB connection errors appear in the console on startup.  

---  

## Deployment  

### Production (manual)  

1. Ensure environment variables are set on the host.  
2. Install dependencies with `npm ci`.  
3. Use a process manager like **PM2** or **systemd**:  

```bash
npm install -g pm2
pm2 start app.js --name stayora --watch
pm2 save
```

4. (Optional) Set up **NGINX** as a reverse proxy on port 80/443 and enable TLS.  

### Docker (future)  

A `Dockerfile` and `docker-compose.yml` are planned for the next release.  

---  

## Contributing  

We welcome contributions! Please follow these steps:

1. **Fork** the repository and **clone** your fork.  
2. Create a **feature branch**: `git checkout -b feat/your-feature`.  
3. Make your changes, ensuring the code follows the existing style.  
4. **Run the app** locally and verify that nothing is broken.  
5. Commit with a clear message and **push** to your fork.  
6. Open a **Pull Request** against `main`.  

### Pull request checklist  

- [ ] New/updated functionality is documented in the README (or relevant docs).  
- [ ] Code passes linting (`npm run lint` – add a script if you wish).  
- [ ] If you add routes or models, update the **API** table.  
- [ ] Include tests for new logic (if a test suite exists).  

### Code of Conduct  

Please be respectful and inclusive. Harassment or discriminatory behavior will not be tolerated.  

---  

## Troubleshooting & FAQ  

| Issue | Solution |
|-------|----------|
| **MongoDB connection fails** | Verify `ATLASDB_URL` is correct, network allows outbound connections, and the user has read/write permissions. |
| **Mapbox tiles not loading** | Ensure `MAP_TOKEN` is a **public** token with `styles:read` scope. |
| **Image upload returns `undefined`** | Check Cloudinary credentials (`CLOUDINARY_*` vars) and that the `uploads/` directory is writable. |
| **Session disappears after refresh** | Confirm `SECRET` is set and the same across restarts; also ensure cookies are not blocked by the browser. |
| **`npm ci` hangs** | Delete `node_modules` and `package-lock.json`, then run `npm install` again. |
| **`npm start` shows “Cannot find module './utils/ExpressError.js'”** | The file exists; ensure you are running from the project root (`Stayora/`). |

For more help, open an issue or join the discussion in the repository’s **Discussions** tab.  

---  

## Roadmap  

- **Docker support** – containerise the app for easy deployment.  
- **RESTful JSON API** – expose a versioned API (`/api/v1/...`) for third‑party clients.  
- **Rate limiting & security headers** – integrate `express-rate-limit` and `helmet`.  
- **Search by radius** – leverage the 2dsphere index for geo‑proximity queries.  
- **Unit & integration tests** – add Jest/Mocha test suites with coverage.  

---  

## License & Credits  

**License:** ISC – see the [LICENSE](https://github.com/SudeepKagi/Stayora/blob/main/LICENSE) file.  

### Contributors  

- **Sudeep Kagi** – project creator & lead developer  

### Acknowledgments  

- **Mapbox** for geocoding and map tiles.  
- **Cloudinary** for image storage.  
- **Express** community for the robust routing middleware.  

---  

*Happy coding! 🌿*  