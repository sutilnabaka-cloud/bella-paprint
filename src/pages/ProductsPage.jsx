import { useState, useContext } from "react";

import CategoryFilter
  from "../components/filters/CategoryFilter";

import PriceFilter
  from "../components/filters/PriceFilter";

import ProductCard
  from "../components/ProductCard";

import PromoPopup
  from "../components/PromoPopup";

import { CartContext }
  from "../context/CartContext";

import { validateCartAccess }
  from "../utils/cartValidation";

import { useFilteredProducts }
  from "../hooks/useFilteredProducts";

import Button
  from "../components/ui/Button";

import "./productspage.css";

export default function ProductsPage({
  goToHome,
  goToCart,
  goToProductDetails,
}) {

  
  const { addToCart, cart }
    = useContext(CartContext);

  /* FILTER STATES */
  const [category, setCategory]
    = useState("");

  const [priceRange, setPriceRange]
    = useState("");

  /* POPUP STATE */
  const [showPopup, setShowPopup]
    = useState(false);

  /* FILTERED PRODUCTS */
  const productsToShow =
    useFilteredProducts(
      category,
      priceRange
    );

  return (

    <div className="products-page">

      {/* PROMO POPUP */}
      <PromoPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

      {/* HERO */}
      <section className="products-hero">

        <div className="products-hero-content">

          <span className="products-badge">
            Bella Paprint! Collection
          </span>

          <h1>
            Explore Our Products
          </h1>

          <p>
            Discover high-quality printing
            services, customized products,
            souvenirs, stickers,
            invitations, and more.
          </p>

          <div className="products-buttons">

            {/* HOME BUTTON */}
            <Button onClick={goToHome}>
              🏠 Home
            </Button>

            {/* CART BUTTON */}
            <Button
              onClick={() => {

                const result =
                  validateCartAccess(cart);

                /* REPLACED ALERT */
                if (!result.isValid) {

                  setShowPopup(true);

                  return;
                }

                goToCart();

              }}
            >
              🛒 Cart ({cart.length})
            </Button>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="products-content">

        {/* FILTER BAR */}
        <div className="filters-bar">

          <div className="filters-left">

            <CategoryFilter
              category={category}
              setCategory={setCategory}
            />

            <PriceFilter
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />

          </div>

          <div className="products-count">

            {productsToShow.length}
            {" "}
            Products Found

          </div>

        </div>

        {/* PRODUCTS GRID */}
        <div className="products-grid">

          {productsToShow.map((product) => (

            <ProductCard
              key={product.id}

              product={product}

              addToCart={addToCart}

              onView={(product) => {

                goToProductDetails(product);

              }}
            />

          ))}

        </div>

      </section>

    </div>
  );
}