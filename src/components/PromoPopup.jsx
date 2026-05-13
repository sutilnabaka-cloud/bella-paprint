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
          Bili na po kayu para sa grade namin. 💖
          <br />
          Your order, our diploma.
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