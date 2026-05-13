import { useState, useContext, useEffect, useMemo } from "react"; // 🟡 UPDATED
import { CartContext } from "../context/CartContext";
import ProductReviews from "../components/product/ProductReviews";
import { reviewsData } from "../data/reviews";

import ProductImages from "../components/product/ProductImages";
import ProductInfo from "../components/product/ProductInfo";
import RelatedProducts from "../components/product/RelatedProducts";
import Header from "../components/layout/Header"; // 🔴 NEW

export default function ProductDetailsPage({
  product,
  goToCart,
  goToProducts,
  goToProductDetails,
}) {
  const { addToCart, cart } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.image
  );

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] || null
  );

  const [quantity, setQuantity] = useState(1);

  // ✅ Reset state when product changes
  useEffect(() => {
    setSelectedImage(product.images?.[0] || product.image);
    setSelectedVariant(product.variants?.[0] || null);
    setQuantity(1);
  }, [product.id]);

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedVariant);
    }
  };

  // 🔴 NEW: stable random reviews (prevents re-shuffle on re-render)
  const randomReviews = useMemo(() => {
    return [...reviewsData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }, [product.id]);

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}> {/* 🟡 UPDATED */}

      {/* 🔴 NEW HEADER */}
      <Header
        goToCart={goToCart}
        cartCount={cartCount}
        showNav={false}
      />

      <div style={{ padding: "20px" }}>

        {/* 🟡 UPDATED NAV (cleaner spacing) */}
        <div style={{ marginBottom: "20px" }}>
          <button onClick={goToProducts}>⬅ Back</button>
        </div>

        {/* 🟡 UPDATED layout spacing */}
        <div style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
          <ProductImages
            images={product.images || [product.image]}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />

          <ProductInfo
            product={product}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
            quantity={quantity}
            setQuantity={setQuantity}
            handleAddToCart={handleAddToCart}
          />
        </div>

        {/* 🟡 UPDATED spacing wrapper */}
        <div style={{ marginTop: "40px" }}>
          <ProductReviews reviews={randomReviews} />
        </div>

        {/* 🟡 UPDATED spacing */}
        <div style={{ marginTop: "40px" }}>
          <RelatedProducts
            product={product}
            goToProductDetails={goToProductDetails}
          />
        </div>
      </div>
    </div>
  );
}