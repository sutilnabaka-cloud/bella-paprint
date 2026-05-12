// 👉 import your QR image
import gcashQR from "../../images/gcash-qr.png";

export default function PaymentMethod({ form, setForm }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Payment Method</h3>

      <select
        value={form.payment}
        onChange={(e) => setForm({ ...form, payment: e.target.value })}
      >
        <option value="COD">Cash on Delivery (COD)</option>
        <option value="pickup">Payment Upon Pickup</option>
        <option value="gcash">G-Cash</option>
        <option value="free">Free basta Uno sa eMabini 😎</option>
      </select>

      {/* CONDITIONAL UI */}
      <div style={{ marginTop: "10px" }}>
        {form.payment === "gcash" && (
          <div>
            <p>Scan this QR code:</p>
            <img src={gcashQR} alt="GCash QR" width="200" />
          </div>
        )}

        {form.payment === "pickup" && (
          <p>Please proceed to our store for payment.</p>
        )}

        {form.payment === "free" && (
          <p>Thank you Prof. Juna ❤️❤️❤️</p>
        )}
      </div>
    </div>
  );
}