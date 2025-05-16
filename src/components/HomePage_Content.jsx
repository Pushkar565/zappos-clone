import { useRef } from "react";
import { Link } from "react-router-dom";
import HERO from "/src/assets/Homepage/HERO1.jpg";
import Trend1 from "/src/assets/Homepage/trending1.jpg";
import Trend2 from "/src/assets/Homepage/trending2.jpg";
import Trend3 from "/src/assets/Homepage/trending3.jpg";
import Trend4 from "/src/assets/Homepage/trending4.jpg";
import Trend5 from "/src/assets/Homepage/trending5.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FBrand1 from "/src/assets/Homepage/featuredBrand1 (1).jpg";
import FBrand2 from "/src/assets/Homepage/featuredBrand1 (2).jpg";
import FBrand3 from "/src/assets/Homepage/featuredBrand1 (3).jpg";
import tile1 from "/src/assets/Homepage/tile (1).png";
import tile2 from "/src/assets/Homepage/tile (2).png";
import tile3 from "/src/assets/Homepage/tile (3).png";

const HomePage_Content = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const images = [Trend1, Trend2, Trend3, Trend4, Trend5];
  const labels = ["Women's", "Men’s", "Kids’", "Outdoor", "Platforms"];
  const featuredBrands = [FBrand1, FBrand2, FBrand3];
  const labels2 = ["Shop On", "Shop adidas", "Shop ASICS"];

  return (
    <div className="ParentDiv p-4">
      {/* Banner */}
      <div className="banner mb-8">
        <Link to={"/products"}>
          {" "}
          <picture>
            <img src={HERO} alt="bannerImg" className="w-full rounded-xl" />
          </picture>
        </Link>
      </div>

      {/* Trending Categories Scroll */}
      <div className="relative mb-12">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <ChevronLeft />
        </button>

        <ul
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-10"
        >
          {images.map((img, index) => (
            <Link to="/products" key={index}>
              <li className="min-w-[120px] flex-shrink-0 flex flex-col items-center cursor-pointer">
                <img
                  src={img}
                  alt={`Trending ${index + 1}`}
                  className="rounded-lg w-[60%] h-auto"
                />
                <p className="mt-2 text-center font-extrabold text-gray-800 text-sm">
                  {labels[index]}
                </p>
              </li>
            </Link>
          ))}
        </ul>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Featured Brands */}
      <div className="bg-[#FFF2D4] py-45 px-4 rounded-xl">
        <h1 className="text-2xl font-extrabold text-left mb-6 text-gray-800">
          Featured Brands
        </h1>
        <ul className="flex justify-center gap-6 flex-wrap">
          {featuredBrands.map((img, index) => (
            <Link to="/products" key={index}>
              <li className="w-[350px] cursor-pointer">
                <img
                  src={img}
                  alt={`Featured Brand ${index + 1}`}
                  className="rounded-lg w-full h-auto shadow-md"
                />
                <p className="mt-2 text-left font-extrabold text-gray-800 text-large underline hover:text-red-800">
                  {labels2[index]}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Ways to Shop & Save */}
      <div className="mt-8">
        <h1 className="text-left font-extrabold text-gray-800 text-large underline hover:text-red-800 mb-4">
          Ways to Shop & Save!
        </h1>
        <ul className="flex gap-4 justify-center items-center">
          {[tile1, tile2, tile3].map((tile, idx) => (
            <Link to="/products" key={idx}>
              <li className="cursor-pointer">
                <img
                  src={tile}
                  alt={`Tile ${idx + 1}`}
                  className="w-[520px] h-auto rounded"
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage_Content;
