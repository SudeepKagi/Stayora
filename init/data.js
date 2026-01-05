const sampleListings = [
  {
    title: 'Eco-Friendly Forest Cabin',
    description:
      "Escape to the serene woods in this solar-powered cabin. Surrounded by tall pines and ferns, it's the perfect digital detox spot.",
    image: {
      filename: 'listingImage',
      url: 'https://assets.cntraveller.in/photos/665848f271536eff9b76f15d/master/w_1600%2Cc_limit/_DSC8388.jpg',
    },
    price: 1500,
    location: 'Manali, Himachal Pradesh',
    country: 'India',
    geometry: {
      type: 'Point',
      coordinates: [77.1892, 32.2432], // Longitude, Latitude for Manali
    },
    category: 'Forest',
  },
  {
    title: 'Bamboo Treehouse Retreat',
    description:
      'Live among the birds in this handcrafted bamboo treehouse. Features sustainable architecture and panoramic views of the canopy.',
    image: {
      filename: 'listingImage',
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b2/fa/58/caption.jpg?w=1200&h=-1&s=1',
    },
    price: 3200,
    location: 'Wayanad, Kerala',
    country: 'India',
    geometry: {
      type: 'Point',
      coordinates: [76.132, 11.6854], // Longitude, Latitude for Wayanad
    },
    category: 'Forest',
  },
  {
    title: 'Rustic Mud Villa',
    description:
      'Experience traditional living with modern comforts. This mud villa stays naturally cool and offers an organic farm-to-table dining experience.',
    image: {
      filename: 'listingImage',
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/a2/4e/56/getlstd-property-photo.jpg?w=900&h=500&s=1',
    },
    price: 2100,
    location: 'Udaipur, Rajasthan',
    country: 'India',
    geometry: {
      type: 'Point',
      coordinates: [73.7125, 24.5854], // Longitude, Latitude for Udaipur
    },
    category: 'Farm',
  },
  {
    title: 'Glamping by the River',
    description:
      'Luxury camping right beside a flowing river. Fall asleep to the sound of water and wake up to the chirping of birds.',
    image: {
      filename: 'listingImage',
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/b0/25/96/caption.jpg?w=1200&h=-1&s=1',
    },
    price: 1800,
    location: 'Rishikesh, Uttarakhand',
    country: 'India',
    geometry: {
      type: 'Point',
      coordinates: [78.2676, 30.0869], // Longitude, Latitude for Rishikesh
    },
    category: 'Camping',
  },
  {
    title: 'Secluded Beach Hut',
    description:
      'A minimalist hut steps away from the ocean. Built with reclaimed wood and powered entirely by wind energy.',
    image: {
      filename: 'listingImage',
      url: 'https://gos3.ibcdn.com/c80743b0-f8a3-41d2-ae67-a1e1a8f26331.jpg',
    },
    price: 4500,
    location: 'Gokarna, Karnataka',
    country: 'India',
    geometry: {
      type: 'Point',
      coordinates: [74.3188, 14.5479], // Longitude, Latitude for Gokarna
    },
    category: 'Beach',
  },
  {
    title: 'Mountain Stone Cottage',
    description:
      'Nestled in the misty mountains, this stone cottage offers warmth, peace, and breathtaking views of the valley.',
    image: {
      filename: 'listingImage',
      url: 'https://r1imghtlak.ibcdn.com/a3a93bb4a6a511e88cb00a1a15da5152.jpg?&output-quality=75',
    },
    price: 2500,
    location: 'Darjeeling, West Bengal',
    country: 'India',
    geometry: {
      type: 'Point',
      coordinates: [88.2663, 27.041], // Longitude, Latitude for Darjeeling
    },
    category: 'Mountain',
  },
  {
    title: 'Tropical Garden Villa',
    description:
      'A hidden gem surrounded by lush tropical gardens and exotic flowers. Perfect for nature lovers and botany enthusiasts.',
    image: {
      filename: 'listingImage',
      url: 'https://cdn.sanity.io/images/ocl5w36p/prod5/a198eaa47cc1ccbd33a378b9d0890bb0106730c2-3644x2706.jpg?w=480&auto=format&dpr=2',
    },
    price: 3800,
    location: 'Alleppey, Kerala',
    country: 'India',
    geometry: {
      type: 'Point',
      coordinates: [76.3388, 9.4981], // Longitude, Latitude for Alleppey
    },
    category: 'Farm',
  },
  {
    title: 'Desert Eco-Camp',
    description:
      'Experience the magic of the desert under the stars. Our eco-tents are designed to leave zero carbon footprint.',
    image: {
      filename: 'listingImage',
      url: 'https://media.cntraveler.com/photos/6806b1f35ddb547a1fcf41bf/16:9/w_2560%2Cc_limit/Qasr_Al_Sarab_Desert_Resort_by_Anantara_Guest_Room_Sahra_Exterior_View_Pool.jpg',
    },
    price: 2000,
    location: 'Jaisalmer, Rajasthan',
    country: 'India',
    geometry: {
      type: 'Point',
      coordinates: [70.9083, 26.9157], // Longitude, Latitude for Jaisalmer
    },
    category: 'Desert',
  },
  {
    title: 'Coffee Plantation Stay',
    description:
      'Wake up to the aroma of fresh coffee. Stay in the heart of a coffee estate and enjoy guided plantation tours.',
    image: {
      filename: 'listingImage',
      url: 'https://media4.thrillophilia.com/images/photos/000/101/201/original/1522660582_homepage_image_02.jpg?aio=w-1400;h-320;crop&dpr=2',
    },
    price: 4000,
    location: 'Coorg, Karnataka',
    country: 'India',
    geometry: {
      type: 'Point',
      coordinates: [75.7382, 12.4244], // Longitude, Latitude for Coorg
    },
    category: 'Farm',
  },
  {
    title: 'Himalayan Yurt Experience',
    description:
      'Stay in a traditional Mongolian-style yurt adapted for the Himalayas. Cozy, warm, and offering unmatched views of snow peaks.',
    image: {
      filename: 'listingImage',
      url: 'https://r1imghtlak.mmtcdn.com/e297591efaad11eb94a30a58a9feac02.jpg',
    },
    price: 5000,
    location: 'Leh, Ladakh',
    country: 'India',
    geometry: {
      type: 'Point',
      coordinates: [77.5771, 34.1526], // Longitude, Latitude for Leh
    },
    category: 'Mountain',
  },
];

module.exports = { data: sampleListings };
