import { theme } from "../../theme";

export default function CategoryFilter({
  category,
  setCategory,
}) {

  return (

    <div style={{ marginBottom: "10px" }}>

      <label
        style={{
          display: "block",
          marginBottom: "6px",
          fontSize: "14px",
          color: theme.colors.text,
          fontWeight: "500",
        }}
      >
        Category
      </label>

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }

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

        <option value="">
          All Categories
        </option>

        <option value="custom">
          Custom Printing
        </option>

        <option value="document">
          Document Printing
        </option>

        <option value="wedding">
          Wedding Invitation
        </option>

      </select>

    </div>

  );

}