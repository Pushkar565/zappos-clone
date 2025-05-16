import Footer from "../components/Footer";
import Global from "../components/Global";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayNow = () => {
    navigate("/profile");
  };

  return (
    <>
      <Global />
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-4 border rounded shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <p className="mt-2 font-bold">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                    title="Remove from cart"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Total + Pay Now */}
            <div className="mt-8 border-t pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-xl font-bold">
                Total:{" "}
                <span className="text-blue-700 font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handlePayNow}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Pay Now
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
