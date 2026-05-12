import { useEffect, useState } from "react";

export default function ProductSlider() {
    const products = [
        { name: "Invitation", image: "/image/wed-invi.png" },
        { name: "Document Printing", image: "/image/doc-printing1.png" },
        { name: "ID Personalized Shirt", image: "/image/multiple-shirts2.png" },
        { name: "Ref Magnet", image: "/image/ref-magnet2.png" },
        { name: "Tote Bag", image: "/image/tote-bags2.png" },
    ];

      const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "350px",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          width: `${products.length * 100}%`,
          transform: `translateX(-${current * (100 / products.length)}%)`,
          transition: "transform 0.6s ease",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              width: `${100 / products.length}%`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "auto",   // 🔥 important
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}