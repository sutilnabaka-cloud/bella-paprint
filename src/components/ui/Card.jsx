import { theme } from "../../theme";

export default function Card({
  children,
  style = {},
  padding = "16px",       // 🔴 customizable
  hoverable = false,      // 🔴 NEW
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: theme.colors.white,
        borderRadius: theme.radius,
        padding,
        boxShadow: theme.shadow,
        border: `1px solid ${theme.colors.border}`,
        transition: "all 0.2s ease",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (hoverable) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (hoverable) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = theme.shadow;
        }
      }}
    >
      {children}
    </div>
  );
}