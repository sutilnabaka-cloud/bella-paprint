import { formatCurrency } from "../../utils/formatCurrency";

export default function StickyAddToCartBar({
  price,
  quantity,
  onAddToCart,
}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#fff",
        borderTop: "1px solid #ccc",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <strong>{formatCurrency(price)}</strong>

      <button onClick={onAddToCart}>
        Add to Cart ({quantity})
      </button>
    </div>
  );
}