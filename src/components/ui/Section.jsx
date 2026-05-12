import { theme } from "../../theme";

export default function Section({
  children,
  style = {},
  padding = "20px",
}) {
  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        padding,
        borderBottom: `1px solid ${theme.colors.border}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}