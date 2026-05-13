import { useState } from "react";

import HomePage
  from "./pages/HomePage";

import ProductsPage
  from "./pages/ProductsPage";

import CartPage
  from "./pages/CartPage";

import CheckoutPage
  from "./pages/CheckoutPage";

import OrderSuccessPage
  from "./pages/OrderSuccessPage";

import ProductDetailsPage
  from "./pages/ProductDetailsPage";

import ContactPage
  from "./pages/ContactPage";

function App() {

  /* PAGE STATE */
  const [page, setPage] =
    useState("home");

  /* ORDER STATE */
  const [order, setOrder] =
    useState(null);

  /* PRODUCT STATE */
  const [selectedProduct,
    setSelectedProduct] =
    useState(null);

  /* NAVIGATION FUNCTIONS */

  const goToHome = () =>
    setPage("home");

  const goToProducts = () =>
    setPage("products");

  const goToCart = () =>
    setPage("cart");

  const goToCheckout = () =>
    setPage("checkout");

  const goToContact = () =>
    setPage("contact");

  return (

    <>

      {/* HOME PAGE */}
      {page === "home" && (

        <HomePage

          goToProducts={
            goToProducts
          }

          goToContact={
            goToContact
          }

          goToCart={
            goToCart
          }

        />

      )}

      {/* PRODUCTS PAGE */}
      {page === "products" && (

        <ProductsPage

          goToHome={
            goToHome
          }

          goToCart={
            goToCart
          }

          goToProductDetails={(product) => {

            setSelectedProduct(product);

            setPage("product");

          }}

        />

      )}

      {/* PRODUCT DETAILS PAGE */}
      {page === "product"
        && selectedProduct && (

          <ProductDetailsPage

            product={selectedProduct}

            goToProducts={
              goToProducts
            }

            goToCart={
              goToCart
            }

            goToProductDetails={(product) => {

              setSelectedProduct(product);

              setPage("product");

            }}

          />

        )}

      {/* CART PAGE */}
      {page === "cart" && (

        <CartPage

          goToProducts={
            goToProducts
          }

          goToCheckout={
            goToCheckout
          }

        />

      )}

      {/* CHECKOUT PAGE */}
      {page === "checkout" && (

        <CheckoutPage
          goToHome={() => setPage("home")}
          goToCart={() => setPage("cart")}
          goToSuccess={(orderData) => {
            setOrder(orderData);
            setPage("success");
          }}
        />

      )}

      {/* SUCCESS PAGE */}
      {page === "success" && (

        <OrderSuccessPage

          order={order}

          goToHome={
            goToHome
          }

        />

      )}

      {/* CONTACT PAGE */}
      {page === "contact" && (

        <ContactPage

          goToHome={
            goToHome
          }

        />

      )}

    </>

  );
}

export default App;