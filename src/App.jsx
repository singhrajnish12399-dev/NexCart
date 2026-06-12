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
      </main>
    </>
  );
}

export default App;