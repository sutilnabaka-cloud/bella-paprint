import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

import { formatCurrency } from "../utils/formatCurrency";

import CustomerInfo from "../components/checkout/CustomerInfo";
import PaymentMethod from "../components/checkout/PaymentMethod";
import OrderSummary from "../components/checkout/OrderSummary";

import { validateCheckout } from "../utils/checkoutValidation";

import Button from "../components/ui/Button";

import "./checkoutpage.css";

export default function CheckoutPage({
  goToHome,
  goToCart,
  goToSuccess,
}) {

  const { cart, resetCart } =
    useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "COD",
  });

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  /* CART VALIDATION */

  const cartValidation =
    validateCheckout(cart);

  if (!cartValidation.isValid) {

    return (

      <div className="checkout-page">

        <div className="checkout-empty">

          <h2>
            {cartValidation.message}
          </h2>

          <Button onClick={goToCart}>
            Upload Your Design
          </Button>

        </div>

      </div>
    );
  }

  /* FORM VALIDATION */

  const isFormValid =
    form.name &&
    form.email &&
    form.address &&
    form.payment &&
    !cart.some(item => !item.design);

  /* PLACE ORDER */

  const handleOrder = () => {

    if (!cart.length) {
      alert("Your cart is empty.");
      return;
    }

    const missingDesign =
      cart.some(item => !item.design);

    if (missingDesign) {
      alert(
        "Please upload or paste a design for all items."
      );
      return;
    }

    if (
      !form.name ||
      !form.email ||
      !form.address ||
      !form.payment
    ) {
      alert(
        "Please fill in all required fields."
      );
      return;
    }

    if (!form.email.includes("@")) {
      alert(
        "Please enter a valid email."
      );
      return;
    }

    const orderData = {
      cart,
      form,
    };

    console.log(orderData);

    goToSuccess(orderData);

    resetCart();
  };

  return (

    <div className="checkout-page">

      {/* HERO */}
      <section className="checkout-hero">

        <div className="checkout-hero-content">

          <span className="checkout-badge">
            Secure Checkout
          </span>

          <h1>
            Complete Your Order
          </h1>

          <p>
            Please review your order and
            fill in your information before
            placing your order.
          </p>

        </div>

      </section>

      {/* MAIN */}
      <section className="checkout-content">

        {/* LEFT */}
        <div className="checkout-form-section">

          <div className="checkout-card">

            <h2>
              Customer Information
            </h2>

            <CustomerInfo
              form={form}
              setForm={setForm}
            />

          </div>

          <div className="checkout-card">

            <h2>
              Payment Method
            </h2>

            <PaymentMethod
              form={form}
              setForm={setForm}
            />

          </div>

          {/* WARNINGS */}

          {cart.some(item => !item.design) && (

            <div className="checkout-warning">

              All items must have a design
              before placing an order.

            </div>

          )}

          {(!form.name ||
            !form.email ||
            !form.address) && (

              <div className="checkout-warning">

                To give you the best shopping experience, please complete all required
                information before checkout.

              </div>

            )}

        </div>

        {/* RIGHT */}
        <div className="checkout-summary">

          <div className="summary-card">

            <h2>
              Order Summary
            </h2>

            <OrderSummary cart={cart} />

            <div className="summary-total">

              <span>Total</span>

              <span>
                {formatCurrency(total)}
              </span>

            </div>

            <Button
              onClick={handleOrder}
              disabled={!isFormValid}
            >
              Place Order
            </Button>

          </div>

        </div>

      </section>

    </div>
  );
}