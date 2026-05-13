import "./checkoutpopup.css";

export default function CheckoutPopup({
  message,
  onClose,
}) {
  return (
    <div className="checkout-popup-overlay">

      <div className="checkout-popup">

        <h3>
          Bella Paprint!
        </h3>

        <p>
          {message}
        </p>

        <button onClick={onClose}>
          OK
        </button>

      </div>

    </div>
  );
}