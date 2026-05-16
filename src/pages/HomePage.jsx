import "./homepage.css";

import ProductSlider
  from "../components/ProductSlider";

import HomepageReviews
  from "../components/HomepageReviews";

import Header
  from "../components/layout/Header";

import { reviewsData }
  from "../data/reviews";

import {

  FaFacebookF,
  FaInstagram,
  FaWhatsapp,

  FaPrint,
  FaTshirt,
  FaRegEnvelope,

} from "react-icons/fa";

export default function HomePage({

  goToProducts,
  goToContact,
  goToAbout,
  goToCart,

  cartCount = 0,

}) {

  return (

    <div className="homepage">

      {/* HEADER */}
      <Header
        goToCart={goToCart}
        cartCount={cartCount}
        goToAbout={goToAbout}
        goToProducts={goToProducts}
        goToContact={goToContact}
      />

      {/* HERO */}
      <section className="hero-section">

        {/* LEFT */}
        <div className="hero-content">

          <span className="hero-badge">
            Fast • Affordable • Quality Prints
          </span>

          <h1>
            Professional Online Printing Services
          </h1>

          <p>
            We create invitations,
            stickers, custom souvenirs,
            and high-quality prints
            for every occasion.
          </p>

          <div className="hero-buttons">

            <button
              className="shop-btn"
              onClick={goToProducts}
            >
              🛍 Shop Now!
            </button>

          </div>

          <div className="hero-features">

            <span>
              ✔ Same Day Printing
            </span>

            <span>
              ✔ Affordable Prices
            </span>

            <span>
              ✔ Custom Designs
            </span>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-image">

          <div className="hero-glow"></div>

          <img
            src="/logo.png"
            alt="Bella Paprint"
          />

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="products-section">

        <div className="section-container">

          <div className="section-title">
            Featured Products
          </div>

          <div className="homepage-slider">

            <ProductSlider />

          </div>

        </div>

      </section>

      {/* REVIEWS */}
      <section className="reviews-section">

        <div className="section-container">

          <HomepageReviews
            reviews={reviewsData}
          />

        </div>

      </section>

      {/* SERVICES */}
      <section className="services-section">

        <div className="section-container">

          <div className="section-title">
            Our Services
          </div>

          <div className="services-grid">

            {/* DOCUMENT PRINTING */}
            <div className="service-card">

              <div className="service-icon">
                <FaPrint />
              </div>

              <h3>
                Document Printing
              </h3>

              <p>
                Fast black & white
                and colored printing.
              </p>

            </div>

            {/* CUSTOMIZED PRINTING */}
            <div className="service-card">

              <div className="service-icon">
                <FaTshirt />
              </div>

              <h3>
                Customize Printing
              </h3>

              <p>
                Shirts, bags,
                mugs, and more.
              </p>

            </div>

            {/* WEDDING INVITATION */}
            <div className="service-card">

              <div className="service-icon">
                <FaRegEnvelope />
              </div>

              <h3>
                Wedding Invitation
              </h3>

              <p>
                Elegant and high-quality
                invitation printing.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="cta-section">

        <div className="cta-box">

          <h2>
            Ready To Print Something Beautiful?
          </h2>

          <p>
            From school requirements
            to personalized souvenirs,
            Bella, Paprint! is ready
            to bring your ideas to life.
          </p>

          <button
            className="shop-btn"
            onClick={goToProducts}
          >
            Start Ordering
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-content">

          {/* BRAND */}
          <div className="footer-brand">

            <h2>
              Bella, Paprint!
            </h2>

            <p>
              Print na maganda sa presyong pang masa.
            </p>

          </div>

          {/* SOCIALS */}
          <div className="footer-socials">

            <a
              href="https://www.facebook.com/bellapaprint"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/bella.paprint"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/639000000000"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()}
            {" "}
            Bella, Paprint!
            All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}