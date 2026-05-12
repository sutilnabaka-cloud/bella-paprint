import { theme } from "../../theme";

export default function PriceFilter({ priceRange, setPriceRange }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: "6px",
          fontSize: "14px",
          color: theme.colors.text,
          fontWeight: "500",
        }}
      >
        Price Range
      </label>

      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: theme.radius,
          border: `1px solid ${theme.colors.border}`,
          backgroundColor: theme.colors.white,
          color: theme.colors.text,
          fontSize: "14px",
          outline: "none",
        }}
      >
        <option value="">All Prices</option>
        <option value="low">Below ₱100</option>
        <option value="mid">₱100 - ₱500</option>
        <option value="high">Above ₱500</option>
      </select>
    </div>
  );
}