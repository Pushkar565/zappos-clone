import Footer from "./Footer";
import Navbar from "./Navbar";

const Global = () => {
  return (
    <>
      <div className="w-full">
        {/* Promo Banner */}
        <div className="bg-[#E7F4FF] py-3 px-4 text-center font-bold text-sm text-gray-800">
          The Sandal Edit: Indulge in sunny-day favorites.{" "}
          <span className="text-blue-800 underline hover:text-blue-900 transition-colors duration-200 cursor-pointer">
            Shop Now
          </span>
        </div>

        {/* Header Section */}
        <div className="flex items-center justify-between bg-white py-4 px-6 shadow-md">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-32 h-8 bg-gray-200 rounded animate-pulse">
              <img
                src="/src/assets/Shoes- Sneakers- Boots- - Clothing - FREE SHIPPING - Zappos-com - 5_15_2025 11-26-57 AM\zappos-logo-2025-header.svg"
                alt=""
              />
            </div>
          </div>

          {/* Search Box */}
          <div className="flex flex-1 max-w-2xl mx-4">
            <input
              type="text"
              placeholder="Search for shoes, clothes, etc."
              className="w-full border border-gray-300 rounded-l px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white-600 text-black px-4 py-2 rounded-r hover:text-blue-900 text-sm">
              Search
            </button>
          </div>

          {/* Profile + Cart */}
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-center text-sm text-gray-700 cursor-pointer hover:text-blue-600">
              <span className="material-icons">person</span>
              <span>Profile</span>
            </div>
            <div className="flex flex-col items-center text-sm text-gray-700 cursor-pointer hover:text-blue-600">
              <span className="material-icons">shopping_cart</span>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Global;
