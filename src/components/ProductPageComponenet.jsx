import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; // adjust path
import Global from './Global';
import Navbar from './Navbar';
import Footer from './Footer';

const ProductPageComponent = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // use context

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchApi();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // ✅ Add to cart
  };

  return (
    <>
      <Global />
      <Navbar />

      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Our Products</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <li key={product.id} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h2>
              <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
              <p className="text-lg font-bold text-blue-600 mt-3">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default ProductPageComponent;
