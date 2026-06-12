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
      </main>
    </>
  );
}

export default App;