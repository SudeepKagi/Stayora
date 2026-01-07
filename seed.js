const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
require('dotenv').config();

const dbUrl = process.env.ATLASDB_URL;

// Ensure this ID matches your actual User ID in MongoDB Atlas
const ADMIN_ID = '695cc30beb9354f4224a3cf8';

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

const sampleListings = [
  {
    title: 'The Amber Palace Heritage Suite',
    description:
      'Experience royal Rajasthani grandeur in this 19th-century villa with hand-painted murals.',
    image: {
      url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 25000,
    location: 'Jaipur',
    country: 'India',
    category: 'Luxury',
    owner: ADMIN_ID,
  },
  {
    title: 'Cedar Peaks Alpine Lodge',
    description:
      'A Himalayan stone lodge featuring floor-to-ceiling windows and an outdoor heated infinity pool.',
    image: {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 18500,
    location: 'Manali',
    country: 'India',
    category: 'Mountain',
    owner: ADMIN_ID,
  },
  {
    title: 'Azure Bay Private Sanctuary',
    description:
      'Minimalist coastal masterpiece with private beach access and salt-water pool.',
    image: {
      url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 32000,
    location: 'Goa',
    country: 'India',
    category: 'Beach',
    owner: ADMIN_ID,
  },
  {
    title: 'The Silver Birch Pavilion',
    description:
      'A glass-walled sanctuary nestled in a private woodland with immersive nature views.',
    image: {
      url: 'https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=2070',
      filename: 'listingimage',
    },
    price: 12500,
    location: 'Coorg',
    country: 'India',
    category: 'Forest',
    owner: ADMIN_ID,
  },
  {
    title: 'Obsidian Sands Villa',
    description:
      'Modern black-architecture villa overlooking a secluded bay with a private sun deck.',
    image: {
      url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 45000,
    location: 'Gokarna',
    country: 'India',
    category: 'Beach',
    owner: ADMIN_ID,
  },
  {
    title: 'Terracotta Heritage Farm',
    description:
      'Organic farm stay featuring traditional clay architecture and farm-to-table dining.',
    image: {
      url: 'https://plus.unsplash.com/premium_photo-1733760180239-ef05b25dd5ad?q=80&w=1471',
      filename: 'listingimage',
    },
    price: 9000,
    location: 'Alibaug',
    country: 'India',
    category: 'Farm',
    owner: ADMIN_ID,
  },
  {
    title: 'The Gilded Nomad Tents',
    description:
      'Ultra-luxury glamping in the desert with climate control and private stargazing decks.',
    image: {
      url: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 15000,
    location: 'Jaisalmer',
    country: 'India',
    category: 'Camping',
    owner: ADMIN_ID,
  },
  {
    title: 'Ethereal Cliff Cabin',
    description:
      'Perched on a 10,000ft ridge featuring panoramic views of the Western Ghats.',
    image: {
      url: 'https://plus.unsplash.com/premium_photo-1731286446832-98ee112d35fd?q=80&w=1632',
      filename: 'listingimage',
    },
    price: 14000,
    location: 'Munnar',
    country: 'India',
    category: 'Mountain',
    owner: ADMIN_ID,
  },
  {
    title: 'Ivory Manor Estate',
    description:
      'Sprawling white-marble estate with grand columns and manicured French gardens.',
    image: {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 55000,
    location: 'Udaipur',
    country: 'India',
    category: 'Luxury',
    owner: ADMIN_ID,
  },
  {
    title: 'Mist & Moss Jungle Treehouse',
    description:
      'Elevated bamboo treehouse deep in the rainforest with open-air rain showers.',
    image: {
      url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 11000,
    location: 'Wayanad',
    country: 'India',
    category: 'Forest',
    owner: ADMIN_ID,
  },
  {
    title: 'The Sandstone Mirage',
    description:
      'A golden-stone boutique hotel blending into the dunes with a hidden oasis pool.',
    image: {
      url: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 21000,
    location: 'Jodhpur',
    country: 'India',
    category: 'Desert',
    owner: ADMIN_ID,
  },
  {
    title: 'Aqua Marine Overwater Villa',
    description:
      'Luxury stilt house over crystal clear waters with a private glass floor.',
    image: {
      url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 48000,
    location: 'Lakshadweep',
    country: 'India',
    category: 'Beach',
    owner: ADMIN_ID,
  },
  {
    title: 'Wildflower Orchard Farmhouse',
    description:
      'Rustic-chic farmhouse surrounded by apple orchards and wildflower meadows.',
    image: {
      url: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 8500,
    location: 'Shimla',
    country: 'India',
    category: 'Farm',
    owner: ADMIN_ID,
  },
  {
    title: 'Summit Star Observatory',
    description:
      'Modern glass-domed suite designed specifically for celestial viewing in the cold desert.',
    image: {
      url: 'https://images.unsplash.com/photo-1765464356542-7019cce19048?q=80&w=1470',
      filename: 'listingimage',
    },
    price: 35000,
    location: 'Leh',
    country: 'India',
    category: 'Mountain',
    owner: ADMIN_ID,
  },
  {
    title: 'Bamboo Groove Eco-Resort',
    description:
      'Eco-friendly sustainable luxury retreat made entirely of sustainable bamboo.',
    image: {
      url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 13000,
    location: 'Rishikesh',
    country: 'India',
    category: 'Luxury',
    owner: ADMIN_ID,
  },
  {
    title: 'The Dunes Glamping Suite',
    description:
      'Tented luxury under the stars with private camel safaris and desert folk music.',
    image: {
      url: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 17000,
    location: 'Pushkar',
    country: 'India',
    category: 'Camping',
    owner: ADMIN_ID,
  },
  {
    title: 'Emerald Lake Hideaway',
    description:
      'Lakeside cottage with private boating dock and mist-covered morning views.',
    image: {
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 16000,
    location: 'Nainital',
    country: 'India',
    category: 'Forest',
    owner: ADMIN_ID,
  },
  {
    title: 'Crystal Cove Beach House',
    description:
      'Minimalist white-washed beach house with a wrap-around deck and private beach access.',
    image: {
      url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 28000,
    location: 'Pondicherry',
    country: 'India',
    category: 'Beach',
    owner: ADMIN_ID,
  },
  {
    title: 'The Vineyard Estate',
    description:
      "Stay in the heart of India's wine country with private cellar tours and tasting.",
    image: {
      url: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 19500,
    location: 'Nashik',
    country: 'India',
    category: 'Farm',
    owner: ADMIN_ID,
  },
  {
    title: 'Zen Garden Palace',
    description:
      'Boutique palace hotel featuring meditation gardens and traditional spa therapies.',
    image: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000',
      filename: 'listingimage',
    },
    price: 38000,
    location: 'Mysuru',
    country: 'India',
    category: 'Luxury',
    owner: ADMIN_ID,
  },
];

const seedDB = async () => {
  try {
    await Listing.deleteMany({});

    // Fix: Attach a valid GeoJSON Point to every listing
    const updatedListings = sampleListings.map((obj) => ({
      ...obj,
      geometry: {
        type: 'Point',
        coordinates: [75.8175, 26.9124], // Default coordinates [longitude, latitude]
      },
    }));

    await Listing.insertMany(updatedListings);
    console.log('Database initialized with 20 Luxury Listings.');
  } catch (err) {
    console.error('Seed Error:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
