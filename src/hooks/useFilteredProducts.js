import { categories } from "../data/categories";

export function useFilteredProducts(category, priceRange) {
  // 1. Get category products
  const selectedCategory = categories.find(
    (cat) => cat.id === category
  );

  let products = selectedCategory
    ? selectedCategory.products
    : categories.flatMap((cat) => cat.products);

  // 2. Apply price filter
  if (priceRange) {
    products = products.filter((product) => {
      const minPrice = Math.min(
        ...product.variants.map((v) => v.price)
      );

      if (priceRange === "low") return minPrice <= 99;
      if (priceRange === "mid") return minPrice > 100 && minPrice <= 140;
      if (priceRange === "high") return minPrice > 150;

      return true;
    });
  }

  return products;
}