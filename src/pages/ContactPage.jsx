import "./contactpage.css";

export default function ContactPage({ goToHome }) {

  return (

    <div className="contact-page">

      {/* HEADER */}
      <div className="contact-header">

        <h1>
          Contact Bella Paprint!
        </h1>

        <p>
          We'd love to hear from you.
        </p>

      </div>

      {/* CONTACT CARD */}
      <div className="contact-card">

        <h2>
          Get in Touch
        </h2>

        <p>
          📍 M.L.Q. Street, Taguig, Philippines, 1630
        </p>

        <p>
          📞 0900-000-0000
        </p>

        <p>
          📧 bellapaprint@gmail.com
        </p>

        <p>
          ⏰ Open Daily • 8AM - 7PM
        </p>

        <button
          className="contact-home-btn"
          onClick={goToHome}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}