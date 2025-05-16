import { Link } from "react-router-dom";
import logo from "/src/assets/Homepage/zappos-logo-2025-header.svg";
import { ShoppingCart, User } from "lucide-react"; 

const Global = () => {
  return (
    <div className="w-full">
      {/* Promo Banner */}
      <div className="bg-[#E7F4FF] py-3 px-4 text-center font-bold text-sm text-gray-800">
        The Sandal Edit: Indulge in sunny-day favorites.{" "}
        <Link to="/products">
          <span className="text-blue-800 underline hover:text-blue-900 transition-colors duration-200 cursor-pointer">
            Shop Now
          </span>
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between bg-white py-4 px-6 shadow-md">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Zappos logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Search Box */}
        <div className="flex flex-1 max-w-2xl mx-4">
          <input
            type="text"
            placeholder="Search for shoes, clothes, etc."
            className="w-full border border-gray-300 rounded-l px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r text-sm hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        {/* Profile + Cart */}
        <div className="flex items-center space-x-6 text-sm text-gray-700">
          <Link
            to="/profile"
            className="flex flex-col items-center hover:text-blue-600"
          >
            <User className="h-5 w-5" />
            <span>Profile</span>
          </Link>

          <Link
            to="/cart"
            className="flex flex-col items-center hover:text-blue-600"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Global;
