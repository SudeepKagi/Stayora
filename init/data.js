const sampleListings = [
  {
    title: "Eco-Friendly Forest Cabin",
    description:
      "Escape to the serene woods in this solar-powered cabin. Surrounded by tall pines and ferns, it's the perfect digital detox spot.",
    image:
      "https://assets.cntraveller.in/photos/665848f271536eff9b76f15d/master/w_1600%2Cc_limit/_DSC8388.jpg",
    price: 1500,
    location: "Manali, Himachal Pradesh",
    country: "India",
  },
  {
    title: "Bamboo Treehouse Retreat",
    description:
      "Live among the birds in this handcrafted bamboo treehouse. Features sustainable architecture and panoramic views of the canopy.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b2/fa/58/caption.jpg?w=1200&h=-1&s=1",
    price: 3200,
    location: "Wayanad, Kerala",
    country: "India",
  },
  {
    title: "Rustic Mud Villa",
    description:
      "Experience traditional living with modern comforts. This mud villa stays naturally cool and offers an organic farm-to-table dining experience.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/a2/4e/56/getlstd-property-photo.jpg?w=900&h=500&s=1",
    price: 2100,
    location: "Udaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Glamping by the River",
    description:
      "Luxury camping right beside a flowing river. Fall asleep to the sound of water and wake up to the chirping of birds.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/b0/25/96/caption.jpg?w=1200&h=-1&s=1",
    price: 1800,
    location: "Rishikesh, Uttarakhand",
    country: "India",
  },
  {
    title: "Secluded Beach Hut",
    description:
      "A minimalist hut steps away from the ocean. Built with reclaimed wood and powered entirely by wind energy.",
    image:
      "https://gos3.ibcdn.com/c80743b0-f8a3-41d2-ae67-a1e1a8f26331.jpg",
    price: 4500,
    location: "Gokarna, Karnataka",
    country: "India",
  },
  {
    title: "Mountain Stone Cottage",
    description:
      "Nestled in the misty mountains, this stone cottage offers warmth, peace, and breathtaking views of the valley.",
    image:
      "https://r1imghtlak.ibcdn.com/a3a93bb4a6a511e88cb00a1a15da5152.jpg?&output-quality=75",
    price: 2500,
    location: "Darjeeling, West Bengal",
    country: "India",
  },
  {
    title: "Tropical Garden Villa",
    description:
      "A hidden gem surrounded by lush tropical gardens and exotic flowers. Perfect for nature lovers and botany enthusiasts.",
    image:
      "https://cdn.sanity.io/images/ocl5w36p/prod5/a198eaa47cc1ccbd33a378b9d0890bb0106730c2-3644x2706.jpg?w=480&auto=format&dpr=2",
    price: 3800,
    location: "Alleppey, Kerala",
    country: "India",
  },
  {
    title: "Desert Eco-Camp",
    description:
      "Experience the magic of the desert under the stars. Our eco-tents are designed to leave zero carbon footprint.",
    image:"https://media.cntraveler.com/photos/6806b1f35ddb547a1fcf41bf/16:9/w_2560%2Cc_limit/Qasr_Al_Sarab_Desert_Resort_by_Anantara_Guest_Room_Sahra_Exterior_View_Pool.jpg",
    price: 2000,
    location: "Jaisalmer, Rajasthan",
    country: "India",
  },
  {
    title: "Coffee Plantation Stay",
    description:
      "Wake up to the aroma of fresh coffee. Stay in the heart of a coffee estate and enjoy guided plantation tours.",
    image:"https://media4.thrillophilia.com/images/photos/000/101/201/original/1522660582_homepage_image_02.jpg?aio=w-1400;h-320;crop&dpr=2",
    price: 4000,
    location: "Coorg, Karnataka",
    country: "India",
  },
  {
    title: "Himalayan Yurt Experience",
    description:
      "Stay in a traditional Mongolian-style yurt adapted for the Himalayas. Cozy, warm, and offering unmatched views of snow peaks.",
    image:"https://r1imghtlak.mmtcdn.com/e297591efaad11eb94a30a58a9feac02.jpg",
    price: 5000,
    location: "Leh, Ladakh",
    country: "India",
  },
  {
    title: "Heritage Haveli",
    description:
      "Step back in time in this restored heritage haveli. Features ancient architecture, open courtyards, and sustainable cooling.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-_qnqaRSLj0Y_tTdtVU2KdJgT2jSvpPpKA&s",
    price: 6000,
    location: "Jaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Floating Houseboat",
    description:
      "Drift along the backwaters in a traditional eco-friendly houseboat. Enjoy fresh local cuisine prepared on board.",
    image:"https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2Fpoovar_island_resort_sushinair_3112023_1200.jpg",
    price: 7000,
    location: "Kumarakom, Kerala",
    country: "India",
  },
  {
    title: "Snowy Mountain Chalet",
    description:
      "A perfect winter getaway. This wooden chalet offers ski-in/ski-out access and a roaring fireplace.",
    image:
      "https://www.bontravelindia.com/wp-content/uploads/2022/10/Skiing-in-Uttarakhand.jpg",
    price: 5500,
    location: "Auli, Uttarakhand",
    country: "India",
  },
  {
    title: "Organic Farm Stay",
    description:
      "Reconnect with the earth. Participate in organic farming, milk cows, and enjoy meals made from produce grown right outside your door.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaytZA7Nu4E_MxBaJYzLP_wL5LcgBsSyIy6A&s",
    price: 1200,
    location: "Pune, Maharashtra",
    country: "India",
  },
  {
    title: "Jungle Safari Lodge",
    description:
      "Located in the buffer zone of a national park, this lodge offers thrilling safari experiences and wildlife spotting.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvuDIBgwsNP1L-lKvJFSty3H6DU15yiJ_JA&s",
    price: 4200,
    location: "Bandhavgarh, Madhya Pradesh",
    country: "India",
  },
  {
    title: "Cliffside Bungalow",
    description:
      "Perched on a cliff overlooking the Arabian Sea, this bungalow offers privacy, sea breeze, and spectacular sunsets.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscy4ZiXyeYtu9FNpnv6oNyFGBKpEmEnV0jQ&s",
    price: 6500,
    location: "Varkala, Kerala",
    country: "India",
  },
  {
    title: "Vineyard Cottage",
    description:
      "Stay in the middle of a lush vineyard. Enjoy wine tasting sessions and cycling tours through the grapevines.",
    image:"https://content.jdmagicbox.com/v2/comp/nashik/i7/0253px253.x253.220302225029.h5i7/catalogue/little-cove-yoga-ayurveda-resort-girnara-nashik-resorts-xa5b4j49w3.jpg",
    price: 3500,
    location: "Nashik, Maharashtra",
    country: "India",
  },
  {
    title: "Solar Dome Stay",
    description:
      "A futuristic glamping experience in a geodesic dome. Fully solar-powered and offers unobstructed views of the night sky.",
    image:"https://etimg.etb2bimg.com/photo/81242280.cms",
    price: 2800,
    location: "Kutch, Gujarat",
    country: "India",
  },
  {
    title: "Rainforest Canopy Walk",
    description:
      "A unique stay with private access to a canopy walk. Explore the biodiversity of the rainforest from 50 feet above ground.",
    image:
      "https://etimg.etb2bimg.com/photo/81242280.cms",
    price: 4800,
    location: "Andaman & Nicobar Islands",
    country: "India",
  },
  {
    title: "Historic Fort Room",
    description:
      "Live like royalty in a room inside a 500-year-old fort. Thick stone walls ensure natural cooling and deep silence.",
    image:"https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fd1zvcmhypeawxj.cloudfront.net%2Fblogs%2Fcover_web%2Fplaces-to-visit-in-neemrana-webp-563e7ae2db-1763639151564.webp&w=3840&q=75",
    price: 5200,
    location: "Neemrana, Rajasthan",
    country: "India",
  },
];

module.exports = { data: sampleListings };