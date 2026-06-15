import { useState } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: "₹69,999",
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    id: 2,
    name: "Gaming Headset",
    price: "₹2,999",
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "₹4,999",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 4,
    name: "Laptop",
    price: "₹54,999",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
{
  id: 5,
  name: "Men T-Shirt",
  price: "₹799",
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
},
{
  id: 6,
  name: "Programming Book",
  price: "₹499",
  category: "Books",
  image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
}
];

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
const [cartItems, setCartItems] = useState([]);
const [showCart, setShowCart] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">NexCart</div>

        <input
          type="text"
          placeholder="Search products..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
  className="cart-btn"
  onClick={() => setShowCart(true)}
>
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
  <div
    className={`category ${selectedCategory === "All" ? "active-category" : ""}`}
    onClick={() => setSelectedCategory("All")}
  >
    🏪 All
  </div>

  <div
    className={`category ${selectedCategory === "Mobiles" ? "active-category" : ""}`}
    onClick={() => setSelectedCategory("Mobiles")}
  >
    📱 Mobiles
  </div>

  <div
    className={`category ${selectedCategory === "Electronics" ? "active-category" : ""}`}
    onClick={() => setSelectedCategory("Electronics")}
  >
    💻 Electronics
  </div>

  <div
    className={`category ${selectedCategory === "Gaming" ? "active-category" : ""}`}
    onClick={() => setSelectedCategory("Gaming")}
  >
    🎮 Gaming
  </div>

  <div
    className={`category ${selectedCategory === "Fashion" ? "active-category" : ""}`}
    onClick={() => setSelectedCategory("Fashion")}
  >
    👕 Fashion
  </div>

  <div
    className={`category ${selectedCategory === "Books" ? "active-category" : ""}`}
    onClick={() => setSelectedCategory("Books")}
  >
    📚 Books
  </div>
</div>

        <div className="products">
          {products
            .filter(
              (product) =>
                product.name
                  .toLowerCase()
                  .includes(search.toLowerCase()) &&
                (
                  selectedCategory === "All" ||
                  product.category === selectedCategory ||
                  (selectedCategory === "Electronics" &&
                    ["Mobiles", "Gaming", "Electronics"].includes(
                      product.category
                    ))
                )
            )
            .map((product) => (
              <div className="product-card" key={product.id}>
                <div className="sale-badge">SALE</div>

                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => setSelectedProduct(product)}
                />

                <h3>{product.name}</h3>

                <p>{product.price}</p>

                <p>⭐⭐⭐⭐⭐</p>

                <button
                  className="wish-btn"
                  onClick={() => setLiked(!liked)}
                >
                  {liked ? "❤️" : "🤍"}
                </button>

                <button
  onClick={() => {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, selectedProduct]);
  }}
>
  Add to Cart
</button>
              </div>
            ))}
        </div>

        {selectedProduct && (
          <div className="popup">
            <div className="popup-content">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />

              <h2>{selectedProduct.name}</h2>

              <p>{selectedProduct.price}</p>

              <button
  onClick={() => {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, product]);
  }}
>
  Add to Cart
</button>

              <br />
              <br />

              <button
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
{showCart && (
  <div className="popup">
    <div className="popup-content">
      <h2>🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cartItems.map((item, index) => (
          <p key={index}>
            {item.name} - {item.price}
          </p>
        ))
      )}

      <button onClick={() => setShowCart(false)}>
        Close Cart
      </button>
    </div>
  </div>
)}
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