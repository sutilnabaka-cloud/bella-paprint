import { formatCurrency } from "../../utils/formatCurrency";
import Card from "../ui/Card"; // 🔴 NEW
import Button from "../ui/Button"; // 🔴 NEW

export default function ProductInfo({
  product,
  selectedVariant,
  setSelectedVariant,
  quantity,
  setQuantity,
  handleAddToCart,
}) {
  const rating = 4.5;

  const price =
    selectedVariant?.price || product.variants?.[0]?.price || 0;

  const total = price * quantity;

  return (
    <Card> {/* 🔴 NEW wrapper */}

      <h2 style={{ marginBottom: "5px" }}>{product.name}</h2> {/* 🟡 UPDATED */}

      {/* ⭐ Rating */}
      <p style={{ marginBottom: "15px" }}> {/* 🟡 UPDATED */}
        {"⭐".repeat(Math.floor(rating))} ({rating})
      </p>

      {/* Variant */}
      {product.variants && (
        <select
          onChange={(e) =>
            setSelectedVariant(
              product.variants[e.target.selectedIndex]
            )
          }
          style={{ padding: "8px", width: "100%", marginBottom: "15px" }} // 🔴 NEW
        >
          {product.variants.map((v, i) => (
            <option key={i}>
              {v.label} - {formatCurrency(v.price)}
            </option>
          ))}
        </select>
      )}

      {/* Price */}
      <h3 style={{ marginBottom: "15px" }}>
        {formatCurrency(price)}
      </h3>

      {/* Quantity */}
      <div style={{ marginBottom: "20px" }}> {/* 🟡 UPDATED */}
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
          -
        </button>

        <span style={{ margin: "0 10px" }}>{quantity}</span>

        <button onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
      </div>

      {/* Description */}
      <div
        style={{
          marginTop: "15px",
          color: "#555",
          lineHeight: "1.8",
          whiteSpace: "pre-line",
        }}
      >
        {product.description}
      </div>

      {/* Total */}
      <p style={{ fontWeight: "bold", marginTop: "15px" }}>
        Total: {formatCurrency(total)}
      </p>

      {/* 🔴 UPDATED Button */}
      <Button fullWidth onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </Card>
  );
}