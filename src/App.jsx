const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: "₹69,999",
  },
  {
    id: 2,
    name: "Gaming Headset",
    price: "₹2,999",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "₹4,999",
  },
  {
    id: 4,
    name: "Laptop",
    price: "₹54,999",
  },
];
function App() {
  return (
    <>
      <header className="header">
        <div className="logo">NexCart</div>

        <input
          type="text"
          placeholder="Search products..."
          className="search"
        />

        <button className="cart-btn">🛒</button>
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
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  ))}
</div>
      </main>
    </>
  );
}

export default App;