import "./promopopup.css";

export default function PromoPopup({
  isOpen,
  onClose,
}) {

  if (!isOpen) return null;

  return (

    <div className="popup-overlay">

      <div className="popup-box">

        <div className="popup-icon">
          🎉
        </div>

        <h2>
          Bella Paprint!
        </h2>

        <p>
          Please support our small business 💖
          <br />
          Your order helps us a lot.
        </p>

        <button
          className="popup-btn"
          onClick={onClose}
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}