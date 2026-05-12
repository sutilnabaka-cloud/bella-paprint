import { formatCurrency } from "../utils/formatCurrency";

import Button from "../components/ui/Button";

import "./ordersuccesspage.css";

export default function OrderSuccessPage({
  order,
  goToHome,
}) {

  if (
    !order ||
    !order.form ||
    !order.form.name ||
    !order.form.email ||
    !order.cart ||
    order.cart.some(item => !item.design)
  ) {

    return (

      <div className="success-page">

        <div className="invalid-order">

          <h2>
            Invalid order.
          </h2>

          <p>
            Please complete checkout properly.
          </p>

          <Button onClick={goToHome}>
            Back to Home
          </Button>

        </div>

      </div>

    );
  }

  const total = order.cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (

    <div className="success-page">

      {/* HERO */}
      <section className="success-hero">

        <div className="success-icon">
          ✅
        </div>

        <span className="success-badge">
          Order Confirmed
        </span>

        <h1>
          Thank You For Your Order!
        </h1>

        <p>
          Hi <strong>{order.form.name}</strong>,
          your order has been successfully placed.
          We’ll send your design preview to
          <strong> {order.form.email}</strong>
          shortly.
        </p>

      </section>

      {/* MAIN CONTENT */}
      <section className="success-content">

        {/* CUSTOMER INFO */}
        <div className="success-card">

          <h2>
            Customer Details
          </h2>

          <div className="info-grid">

            <div>
              <span>Name</span>
              <strong>
                {order.form.name}
              </strong>
            </div>

            <div>
              <span>Email</span>
              <strong>
                {order.form.email}
              </strong>
            </div>

            <div>
              <span>Address</span>
              <strong>
                {order.form.address}
              </strong>
            </div>

            <div>
              <span>Payment</span>
              <strong>
                {order.form.payment}
              </strong>
            </div>

          </div>

        </div>

        {/* ORDER ITEMS */}
        <div className="success-card">

          <h2>
            Order Items
          </h2>

          <div className="order-items">

            {order.cart.map((item, index) => (

              <div
                key={index}
                className="order-item"
              >

                <div>

                  <strong>
                    {item.name}
                  </strong>

                  <p>
                    Variant: {item.variant}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  {item.design && (

                    <small>

                      {item.design.type === "file"
                        ? `File: ${item.design.value.name}`
                        : `Link: ${item.design.value}`}

                    </small>

                  )}

                </div>

                <div className="item-price">

                  {formatCurrency(
                    item.price * item.quantity
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* TOTAL */}
        <div className="success-summary">

          <div className="summary-total">

            <span>Total Paid</span>

            <strong>
              {formatCurrency(total)}
            </strong>

          </div>

          <Button onClick={goToHome}>
            Back to Home
          </Button>

        </div>

      </section>

    </div>
  );
}