import { useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { theme } from "../theme";

export default function ProductCard({
  product,
  addToCart,
  onView,
}) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]
  );

  return (
    <Card>
      {/* IMAGE CONTAINER */}
      {(product.images?.length || product.image) && (
        <div
          style={{
            width: "100%",
            height: "150px",
            overflow: "hidden",
            borderRadius: theme.radius,
            marginBottom: "12px",
          }}
        >
          <img
            src={product.images?.[0] || product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* PRODUCT NAME */}
      <h4
        style={{
          margin: "0 0 4px",
          fontSize: "15px",
          color: theme.colors.text,
        }}
      >
        {product.name}
      </h4>

      {/* RATING */}
      <p
        style={{
          fontSize: "13px",
          color: "#777",
          margin: "0 0 10px",
        }}
      >
        ⭐ 4.8 • 120 sold
      </p>

      {/* VARIANT */}
      <select
        value={selectedVariant.label}
        onChange={(e) => {
          const variant = product.variants.find(
            (v) => v.label === e.target.value
          );
          setSelectedVariant(variant);
        }}
        style={{
          width: "100%",
          marginBottom: "10px",
          padding: "8px",
          borderRadius: theme.radius,
          border: `1px solid ${theme.colors.border}`,
          background: theme.colors.white,
        }}
      >
        {product.variants.map((variant) => (
          <option key={variant.label} value={variant.label}>
            {variant.label} - {formatCurrency(variant.price)}
          </option>
        ))}
      </select>

      {/* PRICE */}
      <div
        style={{
          fontWeight: "bold",
          marginBottom: "12px",
          fontSize: "16px",
          color: theme.colors.primary,
        }}
      >
        {formatCurrency(selectedVariant.price)}
      </div>

      {/* ACTIONS */}
      <div style={{ display: "flex", gap: "8px" }}>
        <Button
          onClick={() => onView(product)}
          style={{ flex: 1 }}
        >
          View
        </Button>

        <Button
          onClick={() => addToCart(product, selectedVariant)}
          style={{
            width: "42px",
            padding: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.light,
            color: theme.colors.primary,
          }}
        >
          🛒
        </Button>
      </div>
    </Card>
  );
}