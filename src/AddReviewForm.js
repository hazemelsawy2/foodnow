import React, { useState, useEffect } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

function AddReviewForm({ addNewReview, restaurant }) {
  const [rating, setRating] = useState(0);
  useEffect(() => {});

  const handleSubmit = e => {
    e.preventDefault();
    if (rating) {
      const reviewText = document.getElementById("textArea").value;
      const reviewStars = rating;
      const rJSON = {
        author_name: "anonymous",
        profile_photo_url:
          "http://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png",
        rating: reviewStars,
        text: reviewText
      };
      addNewReview(rJSON);
      document.getElementById("ratingRequired").innerHTML = "";
    } else {
      document.getElementById("ratingRequired").innerHTML =
        "Please choose star rating";
    }
  };
  return (
    <div className="addReviewForm">
      <form className="form">
        <label htmlFor="Rating">How well did they do</label>
        <Rater
          total={5}
          rating={0}
          onRate={({ rating }) => {
            setRating(rating);
          }}
        />
        <p id="ratingRequired"></p>
        <label htmlFor="textArea">Comments ( Optional )</label>
        <textarea id="textArea"></textarea>
        <button className="review-button" onClick={handleSubmit}>
          Add Review
        </button>
      </form>
    </div>
  );
}

export default AddReviewForm;
