export default function ProductImages({
  images,
  selectedImage,
  setSelectedImage,
}) {
  return (
    <div>
      <img
        src={selectedImage}
        alt=""
        style={{ width: "300px" }}
      />

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            style={{
              width: "60px",
              cursor: "pointer",
              border:
                selectedImage === img
                  ? "2px solid black"
                  : "1px solid #ccc",
            }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}