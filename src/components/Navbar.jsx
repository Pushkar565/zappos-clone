import React from "react";

const Navbar = () => {
  const navItems = {
    New: [
      // Featured
      "New Arrivals",
      "Trending",
      "Just Launched",

      // Categories
      "Shoes",
      "Clothing",
      "Bags",
      "Accessories",
      "Shop All New",
      "The Style Room",

      // Collections
      "The Vacation Edit",
      "Birkenstock",
      "Desert Pastels",
      "Elevated Everyday",
      "Spring Break Mode",

      // New Brands
      "Allbirds",
      "Birdies",
      "Converse",
      "Free Fly",
      "Journee Collection",
      "KIZIK",
      "Nike",

      // New & Now
      "Women's Sandals",
      "Womens Vacation Styles",
      "Shop The Sandal Edit",
    ],

    Women: [
      "Shoes",
      "Clothing",
      "Accessories",
      "Shoes",
      "Clothing",
      "Bags",
      "Accessories",
      "Shop All New",
      "The Style Room",

      // Collections
      "The Vacation Edit",
      "Birkenstock",
      "Desert Pastels",
      "Elevated Everyday",
      "Spring Break Mode",

      // New Brands
      "Allbirds",
      "Birdies",
      "Converse",
      "Free Fly",
      "Journee Collection",
      "KIZIK",
      "Nike",

      // New & Now
      "Women's Sandals",
      "Womens Vacation Styles",
      "Shop The Sandal Edit",
    ],

    Men: [
      "Footwear",
      "Shirts",
      "Activewear",
      "Shoes",
      "Clothing",
      "Bags",
      "Accessories",
      "Shop All New",
      "The Style Room",

      // Collections
      "The Vacation Edit",
      "Birkenstock",
      "Desert Pastels",
      "Elevated Everyday",
      "Spring Break Mode",

      // New Brands
      "Allbirds",
      "Birdies",
      "Converse",
      "Free Fly",
      "Journee Collection",
      "KIZIK",
      "Nike",

      // New & Now
      "Women's Sandals",
      "Women’s Vacation Styles",
      "Shop The Sandal Edit",
    ],

    Kids: [
      "Girls",
      "Boys",
      "Baby",
      "Shoes",
      "Clothing",
      "Bags",
      "Accessories",
      "Shop All New",
      "The Style Room",

      // Collections
      "The Vacation Edit",
      "Birkenstock",
      "Desert Pastels",
      "Elevated Everyday",
      "Spring Break Mode",

      // New Brands
      "Allbirds",
      "Birdies",
      "Converse",
      "Free Fly",
      "Journee Collection",
      "KIZIK",
      "Nike",

      // New & Now
      "Women's Sandals",
      "Women’s Vacation Styles",
      "Shop The Sandal Edit",
    ],
    Brands: [
      "Nike",
      "Adidas",
      "Puma",
      "Shoes",
      "Clothing",
      "Bags",
      "Accessories",
      "Shop All New",
      "The Style Room",

      // Collections
      "The Vacation Edit",
      "Birkenstock",
      "Desert Pastels",
      "Elevated Everyday",
      "Spring Break Mode",

      // New Brands
      "Allbirds",
      "Birdies",
      "Converse",
      "Free Fly",
      "Journee Collection",
      "KIZIK",
      "Nike",

      // New & Now
      "Women's Sandals",
      "Women’s Vacation Styles",
      "Shop The Sandal Edit",
    ],
    Sports: [
      "Running",
      "Training",
      "Yoga",
      "Shoes",
      "Clothing",
      "Bags",
      "Accessories",
      "Shop All New",
      "The Style Room",

      // Collections
      "The Vacation Edit",
      "Birkenstock",
      "Desert Pastels",
      "Elevated Everyday",
      "Spring Break Mode",

      // New Brands
      "Allbirds",
      "Birdies",
      "Converse",
      "Free Fly",
      "Journee Collection",
      "KIZIK",
      "Nike",

      // New & Now
      "Women's Sandals",
      "Women’s Vacation Styles",
      "Shop The Sandal Edit",
    ],
    Collections: [
      "Sustainable",
      "Luxury",
      "Best Sellers",
      "Shoes",
      "Clothing",
      "Bags",
      "Accessories",
      "Shop All New",
      "The Style Room",

      // Collections
      "The Vacation Edit",
      "Birkenstock",
      "Desert Pastels",
      "Elevated Everyday",
      "Spring Break Mode",

      // New Brands
      "Allbirds",
      "Birdies",
      "Converse",
      "Free Fly",
      "Journee Collection",
      "KIZIK",
      "Nike",

      // New & Now
      "Women's Sandals",
      "Women’s Vacation Styles",
      "Shop The Sandal Edit",
    ],
    Sale: [
      "50% Off",
      "Clearance",
      "Last Chance",
      "Shoes",
      "Clothing",
      "Bags",
      "Accessories",
      "Shop All New",
      "The Style Room",

      // Collections
      "The Vacation Edit",
      "Birkenstock",
      "Desert Pastels",
      "Elevated Everyday",
      "Spring Break Mode",

      // New Brands
      "Allbirds",
      "Birdies",
      "Converse",
      "Free Fly",
      "Journee Collection",
      "KIZIK",
      "Nike",

      // New & Now
      "Women's Sandals",
      "Women’s Vacation Styles",
      "Shop The Sandal Edit",
    ],
  };

 return (
    <div  className="w-full shadow">
      {/* Navigation Links */}
      <div className="bg-gray-100 px-6 py-2">
        <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
          {Object.keys(navItems).map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer hover:text-blue-600"
            >
              {/* Make 'Sale' red and use span */}
              {item === "Sale" ? (
                <span className="text-red-600">{item}</span>
              ) : (
                item
              )}

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 hidden w-48 bg-white shadow-lg rounded group-hover:block z-50">
                <ul className="p-2 space-y-2 text-gray-800 text-sm">
                  {navItems[item].map((option, index) => (
                    <li
                      key={index}
                      className="hover:bg-gray-100 px-3 py-1 rounded"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
