import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 px-6 md:px-20">
      {/* Top Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-gray-300">
        {/* About Zappos */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Zappos</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>About</li>
            <li>Zappos for Good</li>
            <li>Zappos at Work</li>
            <li>Get the Zappos</li>
            <li>Mobile App</li>
            <li>Amazon Prime Benefits</li>
            <li>Zappos VIP Benefits</li>
            <li>Coupons & Sales</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>FAQs</li>
            <li>Contact Info</li>
            <li>¿Ayuda en español?</li>
            <li>Shipping And Returns Policy</li>
            <li>About Proposition 65</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Measurement Guide</li>
            <li>Size Conversion Chart</li>
            <li>Measure Your Bra Size</li>
            <li>Affiliate Program</li>
            <li>Site Map</li>
            <li>Press Kit & Brand Inquiries</li>
            <li>Take Survey</li>
          </ul>
        </div>

        {/* Explore Zappos */}
        <div>
          <h3 className="text-lg font-bold mb-4">Explore Zappos</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Brands</li>
            <li>Clothing</li>
            <li>The Style Room</li>
            <li>Eyewear</li>
            <li>New Arrivals</li>
            <li>Running</li>
            <li>Jackets</li>
            <li>Watches</li>
            <li>Zappos Adaptive</li>
            <li>All Departments</li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="mt-6 text-center text-xs text-gray-600 space-y-2 pb-6">
        <p>© 2009–2025 - Zappos.com LLC or its affiliates</p>
        <div className="flex justify-center flex-wrap gap-3">
          <a href="#" className="hover:underline">Terms of Use</a>
          <span>/</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>/</span>
          <a href="#" className="hover:underline">Fur Policy</a>
          <span>/</span>
          <a href="#" className="hover:underline">Interest-Based Ads</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
