import React, { Component } from "react";
import { truncateString } from "../utilities";
import "../css/SingleReview.css";

class SingleReview extends Component {
  render() {
    const { review } = this.props;
    return (
      <div className="SingleReview">
        <p className="SingleReview-author">
          {review.author
            ? review.author
            : "Sorry, this review doesn't seem to have an Author."}
        </p>
        <p className="SingleReview-content">
          {review.content
            ? `${truncateString(review.content, 100)}`
            : "Sorry, we can't seem to find this review."}
        </p>
        <a href={review.url} className="SingleReview-link">
          Full review
        </a>
      </div>
    );
  }
}

export default SingleReview;
