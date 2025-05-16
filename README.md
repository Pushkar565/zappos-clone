# 🥿 Zappos Clone – E-commerce React App

This is a fully responsive Zappos-inspired e-commerce frontend application built using **React**, **Tailwind CSS**, and **Context API**. It includes features like a product catalog, shopping cart with dynamic updates, authentication mockup, and a simulated Stripe payment flow.

---

## 🚀 Features

- ✅ Home page with banner and promotions
- ✅ Product listing fetched from a real API
- ✅ Add to Cart functionality using Context API
- ✅ Shopping Cart with:
  - Product thumbnails, descriptions, prices
  - Remove item from cart
  - Auto-calculated total price
- ✅ Profile Page with:
  - Login & Signup forms
  - Mock auth handling with redirect
- ✅ Stripe-style Payment Page (simulation only)
  - Shows total cart value
  - "Pay Now" → Payment Success → Redirect to Home
- ✅ Responsive design using Tailwind CSS

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Tailwind CSS**
- **Context API**
- **Lucide React (Icons)**

---

## 📁 Folder Structure

src/
│
├── assets/ # Logos, images
├── components/ # Navbar, Footer, Global Header
├── context/ # CartContext
├── pages/ # Home, Products, Cart, Profile, Payment
├── App.jsx # Routing
└── main.jsx # App Entry Point


---

## 📦 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/zappos-clone.git
   cd zappos-clone

    Install dependencies

npm install

Start the app

    npm run dev

    Visit http://localhost:5173 to view the app.

🧠 Core Implementations
1. Product Fetching

    Products are fetched from https://api.escuelajs.co/api/v1/products using useEffect in ProductPageComponent.jsx.

2. Cart Functionality

    Cart is managed via CartContext.jsx using useContext.

    Cart state is globally accessible.

    Cart icon shows live item count.

    Each item includes:

        Image

        Title, Description

        Price

        Delete button

3. Add to Cart

    Button on each product card dispatches addToCart(product) from context.

4. Payment Simulation

    Clicking "Pay Now" on /cart page routes to /payment.

    Payment page shows total cart value.

    On click, it:

        Shows "Payment Successful" message

        Redirects to homepage in 5 seconds

5. Authentication Flow

    Clicking "Pay Now" redirects to /profile page.

    Users can Login or Sign Up (mock form, no backend).

    On form submission, redirect to /payment.

✨ Screenshots
Page	Description
Home	Banner + Promo
Products	API fetched grid
Cart	Add/Remove/Total
Profile	Sign In / Sign Up
Payment	Total + Success message
📌 Future Improvements

    Integrate real Stripe checkout

    Backend (Node.js/Express + MongoDB)

    User authentication with JWT

    Persistent cart with localStorage

    Orders and payment history

🙌 Credits

    Product data: Fake Store API

    Icons: Lucide

    Inspiration: Zappos.com