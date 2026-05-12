import "./header.css";

export default function Header({

  goToCart,
  cartCount,

  goToHome,
  goToProducts,
  onContactClick,

}) {

  return (

    <header className="site-header">

      <div className="header-container">

        {/* LOGO */}
        <div
          className="header-logo"
          onClick={goToHome}
        >

          <span className="logo-icon">
            🖨️
          </span>

          <div>

            <h2>
              Bella Paprint!
            </h2>

            <p>
              Premium Printing Services
            </p>

          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="header-nav">

          <button
            className="nav-btn"
            onClick={goToHome}
          >
            Home
          </button>

          <button
            className="nav-btn"
            onClick={goToProducts}
          >
            Products
          </button>

          <button
            className="nav-btn"
            onClick={onContactClick}
          >
            Contact
          </button>

        </nav>

        {/* CART */}
        <button
          className="cart-button"
          onClick={goToCart}
        >

          🛒

          <span>
            Cart ({cartCount})
          </span>

        </button>

      </div>

    </header>
  );
}