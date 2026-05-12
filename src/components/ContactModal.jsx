import "./contactmodal.css";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactModal({
  isOpen,
  onClose,
}) {

  if (!isOpen) return null;

  return (

    <div className="modal-overlay">

      <div className="contact-modal">

        {/* CLOSE */}
        <button
          className="modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="modal-header">

          <h2>
            Contact Us
          </h2>

          <p>
            Connect with Bella! Paprint
            through our social channels.
          </p>

        </div>

        {/* CONTACT ITEMS */}

        <a
          href="https://www.facebook.com/bellapaprint"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >

          <FaFacebookF />

          <div>
            <h4>Facebook</h4>
            <p>@bellapaprint</p>
          </div>

        </a>

        <a
          href="https://www.instagram.com/bella.paprint"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >

          <FaInstagram />

          <div>
            <h4>Instagram</h4>
            <p>@bella.paprint</p>
          </div>

        </a>

        <a
          href="https://wa.me/639000000000"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >

          <FaWhatsapp />

          <div>
            <h4>WhatsApp</h4>
            <p>+63 900 000 0000</p>
          </div>

        </a>

        <div className="contact-item">

          <FaEnvelope />

          <div>
            <h4>Email</h4>
            <p>bellapaprint@gmail.com</p>
          </div>

        </div>

      </div>

    </div>
  );
}