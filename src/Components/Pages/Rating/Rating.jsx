import React from 'react';
import './Rating.css';

const Rating = ({ rating, ratingNum, reviews }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="rating">
      {Array(fullStars).fill().map((_, i) => (
        <span key={`full-${i}`} className="star full"><i class="bi bi-star-fill"></i></span>
      ))}
      {hasHalfStar && <span className="star half"><i class="bi bi-star-half"></i></span>}
      {Array(emptyStars).fill().map((_, i) => (
        <span key={`empty-${i}`} className="star empty"><i class="bi bi-star"></i></span>
      ))}
      &nbsp;
      <span>({ratingNum})</span>&nbsp;
      <span>{reviews} reviews</span>
    </div>
  );
};

export default Rating;
