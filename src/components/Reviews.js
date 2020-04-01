import React, { Component } from "react";
import SingleReview from "./SingleReview";
import "../css/Reviews.css";
import { v4 as uuidv4 } from "uuid";

class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <div className="Reviews">
        <h2 className="Reviews-title">Reviews</h2>
        {Array.isArray(reviews) && reviews.length > 0 ? (
          <div className="Reviews-grid">
            {reviews.map(r => (
              <SingleReview key={uuidv4()} review={r} />
            ))}
          </div>
        ) : (
          <div className="Reviews-error">
            Sorry, there are currently no reviews.
          </div>
        )}
      </div>
    );
  }
}

export default Reviews;
