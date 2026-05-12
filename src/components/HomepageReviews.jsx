import { useEffect, useState } from "react";
import "./productreviews.css";

export default function HomepageReviews({ reviews = [] }) {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);

  }, [reviews.length]);

  if (!reviews.length) {
    return <p>No reviews yet.</p>;
  }

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) /
    reviews.length;

  return (

    <div className="reviews-wrapper">

      <div className="reviews-header">

        <h2>Customer Reviews</h2>

        <p>
          {"⭐".repeat(Math.round(avgRating))}
          {" "}
          ({avgRating.toFixed(1)}) • {reviews.length} reviews
        </p>

      </div>

      <div className="reviews-grid">

        <div className="review-card">

          <div className="review-top">

            <div className="review-avatar">
              {reviews[current].name.charAt(0)}
            </div>

            <div>
              <h4>{reviews[current].name}</h4>

              <small>{reviews[current].date}</small>
            </div>

          </div>

          <div className="review-stars">
            {"⭐".repeat(reviews[current].rating)}
          </div>

          <p className="review-comment">
            {reviews[current].comment}
          </p>

        </div>

      </div>

      <div className="review-dots">

        {reviews.map((_, i) => (
          <span
            key={i}
            className={
              i === current
                ? "dot active-dot"
                : "dot"
            }
          />
        ))}

      </div>

    </div>
  );
}