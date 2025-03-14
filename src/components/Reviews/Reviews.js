import React from "react";
import { reviewsData } from "../../data/reviewsData";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews" id="reviews">
      <div className="reviews-content">
        <h2 className="reviews__title">Customer Reviews</h2>
        <div className="reviews__container">
          {reviewsData.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card__header">
                <div className="review-card__name">{review.name}</div>
                <div className="review-card__rating">
                  {[...Array(review.rating)].map((_, index) => (
                    <span key={index} className="star">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="review-card__text">{review.text}</p>
              <div className="review-card__date">{review.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
