import { theme } from "../../theme";

import "./header.css";

export default function Header({

  goToCart,
  cartCount,

  showNav = true, // ✅ NEW

}) {

  return (

    <header className="site-header">

      <div className="header-container">

        {/* LOGO */}
        <div className="header-logo">

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

        {/* ✅ ONLY SHOW NAV WHEN ENABLED */}
        {showNav && (
          <nav className="header-nav">

            <a href="#home">
              Home
            </a>

            <a href="#products">
              Products
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>
        )}

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