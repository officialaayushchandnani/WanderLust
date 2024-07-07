const sampleListings = [
  {
      title: "Cozy Beachfront Cottage",
      description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
          url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1500,
      location: "Malibu",
      country: "United States"
  },
  {
      title: "Modern Loft in Downtown",
      description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
          url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1200,
      location: "New York City",
      country: "United States"
  },
  {
      title: "Mountain Retreat",
      description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
          url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1000,
      location: "Aspen",
      country: "United States"
  },
  {
      title: "Historic Villa in Tuscany",
      description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
          url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 2500,
      location: "Florence",
      country: "Italy"
  },
  {
      title: "Secluded Treehouse Getaway",
      description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
          url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 800,
      location: "Portland",
      country: "United States"
  },
  {
      title: "Beachfront Paradise",
      description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
          url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico"
  },
  {
      title: "Rustic Cabin by the Lake",
      description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States"
  },
  {
      title: "Luxury Penthouse with City Views",
      description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
          url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States"
  },
  {
      title: "Ski-In/Ski-Out Chalet",
      description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
          url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland"
  },
  {
      title: "Safari Lodge in the Serengeti",
      description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
          url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania"
  },
  {
      title: "Historic Canal House",
      description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: {
          url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands"
  },
  {
      title: "Private Island Retreat",
      description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: {
          url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji"
  },
  {
      title: "Charming Cottage in the Cotswolds",
      description: "Escape to the picturesque Cotswolds in this quaint and charming cottage. Perfect for a peaceful retreat.",
      image: {
          url: "https://images.unsplash.com/photo-1601073138390-44d8b2fb9c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1400,
      location: "Cotswolds",
      country: "United Kingdom"
  },
  {
      title: "Historic Brownstone in Boston",
      description: "Stay in a classic brownstone in the heart of Boston. Enjoy the city's rich history and modern amenities.",
      image: {
          url: "https://images.unsplash.com/photo-1604503468507-98274ef8c51d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1600,
      location: "Boston",
      country: "United States"
  },
  {
      title: "Beachfront Bungalow in Bali",
      description: "Relax in this beachfront bungalow with stunning views and easy access to Bali's beautiful beaches.",
      image: {
          url: "https://images.unsplash.com/photo-1618278234770-5e49c00f79ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1200,
      location: "Uluwatu",
      country: "Indonesia"
  },
  {
      title: "Mountain View Cabin in Banff",
      description: "Enjoy breathtaking mountain views from this cozy cabin. Perfect for a romantic getaway or family vacation.",
      image: {
          url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1700,
      location: "Banff",
      country: "Canada"
  },
  {
      title: "Art Deco Apartment in Miami",
      description: "Stay in the vibrant Art Deco district of Miami. This stylish apartment offers a blend of modern comfort and classic charm.",
      image: {
          url: "https://images.unsplash.com/photo-1595795099281-fc65aa6dbadd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1300,
      location: "Miami Beach",
      country: "United States"
  },
  {
      title: "Tropical Villa in Phuket",
      description: "Experience the luxury of a tropical villa with a private pool and stunning views in Phuket.",
      image: {
          url: "https://images.unsplash.com/photo-1535083780422-dda202b1602c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 2200,
      location: "Phuket",
      country: "Thailand"
  },
  {
      title: "Historic Castle in Scotland",
      description: "Live like royalty in this historic Scottish castle. Explore the beautiful countryside and nearby lochs.",
      image: {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 3000,
      location: "Edinburgh",
      country: "United Kingdom"
  },
  {
      title: "Desert Oasis in Dubai",
      description: "Experience the luxury of Dubai in this stunning desert oasis. Perfect for a relaxing and exotic getaway.",
      image: {
          url: "https://images.unsplash.com/photo-1596540511173-758f7ec3c924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 4500,
      location: "Dubai",
      country: "United Arab Emirates"
  },
  {
      title: "Rustic Log Cabin in Montana",
      description: "Escape to this rustic log cabin in the heart of Montana. Perfect for nature lovers and outdoor enthusiasts.",
      image: {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1100,
      location: "Big Sky",
      country: "United States"
  },
  {
      title: "Beachfront Villa in Greece",
      description: "Stay in a beautiful beachfront villa on a Greek island. Enjoy stunning views and easy access to the beach.",
      image: {
          url: "https://images.unsplash.com/photo-1565897968460-97a1664168a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 2800,
      location: "Santorini",
      country: "Greece"
  },
  {
      title: "Eco-Friendly Treehouse Retreat",
      description: "Stay in this eco-friendly treehouse and enjoy a unique experience in the heart of nature.",
      image: {
          url: "https://images.unsplash.com/photo-1601073138390-44d8b2fb9c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 900,
      location: "Portland",
      country: "United States"
  },
  {
      title: "Historic Cottage in Charleston",
      description: "Experience Southern charm in this historic cottage in the heart of Charleston.",
      image: {
          url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1600,
      location: "Charleston",
      country: "United States"
  },
  {
      title: "Modern Apartment in Tokyo",
      description: "Experience the hustle and bustle of Tokyo from this modern and comfortable apartment.",
      image: {
          url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1900,
      location: "Tokyo",
      country: "Japan"
  },
  {
      title: "Charming Bungalow in Hawaii",
      description: "Relax in this charming bungalow with easy access to Hawaii's beautiful beaches and stunning landscapes.",
      image: {
          url: "https://images.unsplash.com/photo-1618278234770-5e49c00f79ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 2100,
      location: "Maui",
      country: "United States"
  },
  {
      title: "Historic Barn Conversion",
      description: "Stay in a beautifully converted historic barn. Enjoy modern amenities in a rustic setting.",
      image: {
          url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1300,
      location: "Cornwall",
      country: "United Kingdom"
  },
  {
      title: "Luxury Yacht Stay",
      description: "Experience the ultimate luxury on a private yacht. Cruise around beautiful destinations in style.",
      image: {
          url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 5000,
      location: "Monaco",
      country: "Monaco"
  },
  {
      title: "Boutique Stay in Paris",
      description: "Enjoy a stylish boutique stay in the heart of Paris. Perfect for a romantic getaway.",
      image: {
          url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 2700,
      location: "Paris",
      country: "France"
  },
  {
      title: "Luxury Villa in the Maldives",
      description: "Stay in a luxury villa over the water in the Maldives. Enjoy stunning ocean views and unparalleled luxury.",
      image: {
          url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 7000,
      location: "Malé",
      country: "Maldives"
  },
  {
      title: "Countryside Cottage in Ireland",
      description: "Stay in a charming countryside cottage in Ireland. Enjoy the beautiful landscapes and peaceful surroundings.",
      image: {
          url: "https://images.unsplash.com/photo-1595795099281-fc65aa6dbadd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1200,
      location: "Galway",
      country: "Ireland"
  },
  {
      title: "Urban Apartment in Sydney",
      description: "Stay in the heart of Sydney in this modern urban apartment. Enjoy the city's vibrant culture and attractions.",
      image: {
          url: "https://images.unsplash.com/photo-1535083780422-dda202b1602c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1600,
      location: "Sydney",
      country: "Australia"
  },
  {
      title: "Secluded Beach House",
      description: "Enjoy privacy and tranquility in this secluded beach house. Perfect for a peaceful vacation.",
      image: {
          url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          filename: "Listing image"
      },
      price: 1900,
      location: "Maui",
      country: "United States"
  }
];

  
  module.exports = { data: sampleListings };