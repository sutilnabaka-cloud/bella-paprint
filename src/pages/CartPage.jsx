import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import { formatCurrency } from "../utils/formatCurrency";

import CartItem from "../components/CartItem";

import { validateCartAccess } from "../utils/cartValidation";

import Button from "../components/ui/Button";

import "./cartpage.css";

export default function CartPage({
  goToProducts,
  goToCheckout,
}) {

  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (

    <div className="cart-page">

      {/* HERO */}
      <section className="cart-hero">

        <div className="cart-hero-content">

          <span className="cart-badge">
            Bella Paprint! Cart
          </span>

          <h1>
            Your Shopping Cart
          </h1>

          <p>
            Review your selected products before
            proceeding to checkout.
          </p>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="cart-content">

        {/* LEFT SIDE */}
        <div className="cart-items-section">

          <div className="cart-topbar">

            <h2>
              Cart Items ({cart.length})
            </h2>

            <Button onClick={goToProducts}>
              ← Add More Items
            </Button>

          </div>

          {/* EMPTY CART */}
          {cart.length === 0 && (

            <div className="empty-cart">

              <h3>Your cart is empty.</h3>

              <p>
                Add products to continue shopping.
              </p>

            </div>

          )}

          {/* CART ITEMS */}
          <div className="cart-items-list">

            {cart.map((item, index) => (

              <CartItem
                key={index}
                item={item}
              />

            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="summary-card">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>
              {formatCurrency(total)}
            </span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>
              {formatCurrency(total)}
            </span>
          </div>

          <Button
            onClick={() => {

              const result =
                validateCartAccess(cart);

              if (!result.isValid) {
                alert(result.message);
                return;
              }

              goToCheckout();

            }}
          >
            Proceed to Checkout
          </Button>

        </div>

      </section>

    </div>
  );
}