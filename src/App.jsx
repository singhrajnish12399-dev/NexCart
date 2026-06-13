import { useState } from "react";
const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: "₹69,999",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
  },
  {
    id: 2,
    name: "Gaming Headset",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    id: 4,
    name: "Laptop",
    price: "₹54,999",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
  }
];

function App() {
const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <header className="header">
        <div className="logo">NexCart</div>

        <input
          type="text"
          placeholder="Search products..."
          className="search"
        />

        <button className="cart-btn">
  🛒 {cartCount}
</button>
      </header>

      <main className="home">
        <h2>Welcome to NexCart</h2>
        <p>India's Next Shopping Destination 🚀</p>

        <div className="banner">
          <h2>Big Sale is Live 🎉</h2>
          <p>Up to 70% OFF on Mobiles, Fashion & Electronics</p>
        </div>

        <div className="categories">
          <div className="category">📱 Mobiles</div>
          <div className="category">👕 Fashion</div>
          <div className="category">💻 Electronics</div>
          <div className="category">📚 Books</div>
          <div className="category">🎮 Gaming</div>
        </div>

        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p>{product.price}</p>

<button className="wish-btn">❤️</button>

<button onClick={() => setCartCount(cartCount + 1)}>
  Add to Cart
</button>
            </div>
          ))}
        </div>
      </main>
<nav className="bottom-nav">
  <button>🏠 Home</button>
  <button>📂 Categories</button>
  <button>❤️ Wishlist</button>
  <button>👤 Profile</button>
</nav>
    </>
  );
}

export default App;