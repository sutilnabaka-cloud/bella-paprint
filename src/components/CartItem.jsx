import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { updateDesign } = useContext(CartContext);
  const [designType, setDesignType] = useState("");

  return (
    <div style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
      <p>
        {item.name} ({item.variant}) - Qty: {item.quantity}
      </p>

      {/* INLINE CONTROLS */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px" }}>

        {/* Dropdown */}
        <select
          value={designType}
          onChange={(e) => {
            const value = e.target.value;
            setDesignType(value);

            // reset design when option changes
            updateDesign(item.id, item.variant, null);
          }}
        >
          <option value="">Select Design Option</option>
          <option value="file">Upload File</option>
          <option value="link">Paste Link</option>
        </select>

        {/* File Input */}
        {designType === "file" && (
          <input
            type="file"
            onChange={(e) =>
              updateDesign(item.id, item.variant, {
                type: "file",
                value: e.target.files[0] || null,
              })
            }
          />
        )}

        {/* Link Input */}
        {designType === "link" && (
          <input
            type="text"
            placeholder="Paste Google Drive / Canva link"
            style={{ flex: 1 }}
            onBlur={(e) =>
              updateDesign(item.id, item.variant, {
                type: "link",
                value: e.target.value.trim(),
              })
            }
          />
        )}
      </div>

      {/* DISPLAY DESIGN INFO */}
      {item.design?.type && item.design?.value && (
        <p style={{ fontSize: "12px", marginTop: "6px" }}>
          {item.design.type === "file"
            ? `File: ${item.design.value.name}`
            : `Link: ${item.design.value}`}
        </p>
      )}
    </div>
  );
}