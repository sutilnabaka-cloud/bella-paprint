import { formatCurrency } from "../../utils/formatCurrency";

export default function OrderSummary({ cart }) {
  return (
    <div>
      <h3>Order Summary</h3>

      {cart.map((item, index) => (
        <div key={index}>
          {item.name} ({item.variant}) - {formatCurrency(item.price)}

          {item.design && (
            <p style={{ fontSize: "12px" }}>
              {item.design.type === "file"
                ? `File: ${item.design.value.name}`
                : `Link: ${item.design.value}`}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}