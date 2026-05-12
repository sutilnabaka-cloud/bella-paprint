import { categories } from "../../data/categories";

export default function RelatedProducts({ product, goToProductDetails }) {
  const relatedProducts = categories
    .flatMap((cat) => cat.products)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div style={{ marginTop: "40px" }}>
      <h3>Related Products</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        {relatedProducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              cursor: "pointer",
              width: "150px",
            }}
            onClick={() => goToProductDetails(item)}
          >
            <img
              src={item.images?.[0] || item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}