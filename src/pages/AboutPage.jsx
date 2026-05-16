import Header from "../components/layout/Header";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import "./aboutpage.css";

export default function AboutPage({

  goToHome,
  goToAbout,
  goToProducts,
  goToContact,
  goToCart,

  cartCount = 0,

}) {

  return (

    <div className="about-page">

      {/* HEADER */}
      <Header

        goToHome={goToHome}
        goToAbout={goToAbout}
        goToProducts={goToProducts}
        goToContact={goToContact}
        goToCart={goToCart}

        cartCount={cartCount}

      />

      {/* HERO */}
      <section className="about-hero">

        <div className="about-overlay">

          <div className="about-hero-content">

            <span className="about-badge">
              About Bella, Paprint!
            </span>

            <h1>
              Every Print Tells A Story
            </h1>

            <p>
              Fast, affordable, and stress-free
              printing services made with care,
              creativity, and community.
            </p>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="about-content">

        <div className="about-card">

          <h2>
            About Us
          </h2>

          <p>
            At Bella, Paprint!, we believe every
            print tells a story — and we're here
            to make yours beautiful.
          </p>

          <p>
            Born from a simple love of quality
            and community, Bella, Paprint!
            started as a neighborhood printing
            shop with one clear goal:
            to make printing fast,
            affordable, and stress-free
            for everyone.
          </p>

          <p>
            Whether you're a student racing
            a deadline, a professional needing
            clean documents, or a couple
            planning the wedding of your dreams,
            we've got you covered.
          </p>

          <p>
            Our name says it all.
            “Paprint” is how Filipinos ask
            for a favor — casually, warmly,
            the way you would ask a trusted
            friend. And Bella?
            That means beautiful.
          </p>

          <p>
            Because every “paprint”
            that comes through our door
            leaves as something you're
            proud of.
          </p>

          <p>
            From everyday documents
            to custom gifts and elegant
            wedding invitations,
            we combine digital convenience
            with personal care —
            so you can send us your files,
            confirm your order online,
            and receive high-quality prints
            right at your doorstep
            or ready for pick-up.
          </p>

          <div className="about-highlight">

            Gawing Maganda Ang Bawat Paprint!

          </div>

        </div>

        {/* QUICK INFO */}
        <div className="about-grid">

          <div className="about-box">

            <h3>
              📄 Quality Printing
            </h3>

            <p>
              Crisp, professional-quality
              printing for documents,
              invitations, souvenirs,
              and personalized products.
            </p>

          </div>

          <div className="about-box">

            <h3>
              ⚡ Fast Service
            </h3>

            <p>
              Quick turnaround times
              perfect for urgent deadlines,
              rush projects,
              and special occasions.
            </p>

          </div>

          <div className="about-box">

            <h3>
              🎨 Personalized Products
            </h3>

            <p>
              Make every gift memorable
              with custom mugs,
              tote bags, shirts,
              magnets, and more.
            </p>

          </div>

          <div className="about-box">

            <h3>
              💖 Customer First
            </h3>

            <p>
              Friendly service,
              easy communication,
              and stress-free ordering
              from start to finish.
            </p>

          </div>

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