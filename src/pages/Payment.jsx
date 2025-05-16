import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Global from "../components/Global";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const PaymentPage = () => {
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    setPaid(true);
  };

  // Redirect to home after 5 seconds of successful payment
  useEffect(() => {
    if (paid) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 5000);

      return () => clearTimeout(timer); // Clean up timer
    }
  }, [paid, navigate]);

  return (
    <>
      <Global />
      <Navbar />
      <div className="max-w-xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-2xl text-center">
        {!paid ? (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Complete Your Payment
            </h1>
            <p className="text-gray-600 mb-4">
              You're about to pay:{" "}
              <span className="text-blue-700 font-semibold text-xl">
                ${totalPrice.toFixed(2)}
              </span>
            </p>
            <button
              onClick={handlePayment}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Pay Now
            </button>
          </>
        ) : (
          <div className="text-green-600">
            <h2 className="text-3xl font-bold mb-2">Payment Successful 🎉</h2>
            <p className="text-gray-700">Thank you for shopping with Zappos!</p>
            <p className="mt-2 text-sm text-gray-500">Redirecting to home page...</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
