import { createContext, useState } from "react";

// ✅ Safe default structure (prevents runtime crashes)
export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  updateDesign: () => {},
  resetCart: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, selectedVariant) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.variant === selectedVariant.label
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.variant === selectedVariant.label
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          variant: selectedVariant.label,
          price: selectedVariant.price,
          quantity: 1,
          design: null, // ✅ consistent empty state
        },
      ];
    });
  };

  const updateDesign = (id, variant, designData) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, design: designData }
          : item
      )
    );
  };

  const resetCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateDesign, // ✅ FIXED: now exposed
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}