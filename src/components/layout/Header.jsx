import "./header.css";

import logo from "../../images/logo.png";

export default function Header({

  goToHome,
  goToAbout,
  goToProducts,
  goToContact,
  goToCart,

  cartCount = 0,

  showNav = true,

}) {

  return (

    <header className="site-header">

      <div className="header-container">

        {/* LOGO */}
        <div
          className="header-logo"
          onClick={goToHome}
          style={{ cursor: "pointer" }}
        >

          <img
            src={logo}
            alt="Bella Paprint Logo"
            className="logo-image"
          />

          <div className="logo-text">

            <h1>
              Bella, Paprint!
            </h1>

            <p>
              “Print na maganda sa presyong pang masa.”
            </p>

          </div>

        </div>

        {/* NAVIGATION */}
        {showNav && (

          <nav className="header-nav">

            <button onClick={goToAbout}>
              ABOUT
            </button>

            <button onClick={goToHome}>
              HOME
            </button>

            <button onClick={goToProducts}>
              PRODUCTS
            </button>

            <button onClick={goToContact}>
              CONTACT
            </button>

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