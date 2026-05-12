import { useState } from "react";
import Card from "../ui/Card"; // 🔴 NEW
import Button from "../ui/Button"; // 🔴 NEW

export default function ProductReviews({ reviews = [] }) {
  const [showAll, setShowAll] = useState(false);

  if (!reviews.length) return <p>No reviews yet.</p>;

  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) /
    reviews.length;

  return (
    <div style={{ marginTop: "40px" }}>
      
      <Card> {/* 🔴 NEW wrapper */}
        
        <h3 style={{ marginBottom: "10px" }}>Customer Reviews</h3>

        {/* ⭐ Average Rating */}
        <p style={{ marginBottom: "15px" }}>
          {"⭐".repeat(Math.round(avgRating))} ({avgRating.toFixed(1)}) •{" "}
          {reviews.length} reviews
        </p>

        {/* 🧾 Reviews */}
        <div>
          {visibleReviews.map((r, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid #eee",
                padding: "12px 0",
              }}
            >
              <strong>{r.name}</strong>

              <p style={{ margin: "5px 0" }}>
                {"⭐".repeat(r.rating)}
              </p>

              <p style={{ margin: "5px 0", maxWidth: "600px" }}>
                {r.comment}
              </p>

              <small style={{ color: "#777" }}>{r.date}</small>
            </div>
          ))}
        </div>

        {/* 🔽 Show More / Less */}
        {reviews.length > 3 && (
          <div style={{ marginTop: "15px" }}>
            <Button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}

      </Card>
    </div>
  );
}