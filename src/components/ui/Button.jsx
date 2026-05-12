import { theme } from "../../theme";

export default function Button({ children, onClick, fullWidth }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: theme.colors.primary,
        color: "#fff",
        border: "none",
        padding: "12px",
        borderRadius: theme.radius,
        cursor: "pointer",
        fontWeight: "bold",
        width: fullWidth ? "100%" : "auto",
      }}
      onMouseOver={(e) =>
        (e.target.style.backgroundColor = theme.colors.primaryHover)
      }
      onMouseOut={(e) =>
        (e.target.style.backgroundColor = theme.colors.primary)
      }
    >
      {children}
    </button>
  );
}