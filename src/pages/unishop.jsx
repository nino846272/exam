import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  { id: 1, name: "Shirt", price: 25 },
  { id: 2, name: "T-shirt", price: 16 },
  { id: 3, name: "Dress", price: 20 },
  { id: 4, name: "Bag", price: 20 },
  { id: 5, name: "Dress", price: 20 },
  { id: 6, name: "Dress", price: 20 },
  { id: 7, name: "Costume", price: 20 },
  { id: 8, name: "Jacket", price: 20 },
  { id: 9, name: "Shirt", price: 25 },
  { id: 10, name: "Jeans", price: 15 },
];

export default function Unishop() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "bg-dark text-white" : "bg-light text-dark";
  }, [darkMode]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="mb-4">CLOTHES SHOP</h1>
      <button
        className="btn btn-secondary mb-2"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button
        className="btn btn-secondary mb-4 ms-2"
        onClick={() => setShowCart(!showCart)}
      >
        {showCart ? "Hide Cart" : `View Cart (${cart.length})`}
      </button>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className={`card ${darkMode ? "bg-secondary text-white" : "bg-white text-dark"}`}>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}$</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Cart Section */}
      {showCart && (
        <div className={`mt-4 p-3 border rounded ${darkMode ? "bg-secondary text-white" : "bg-light text-dark"}`}>
          <h5>Shopping Cart</h5>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul className="list-group">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name} - ${item.price}
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
