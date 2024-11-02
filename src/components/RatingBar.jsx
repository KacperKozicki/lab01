import React from 'react';
import '../styles/RatingBar.css';

const RatingBar = ({ rate }) => {
  const totalStars = 10;

  // Generowanie tablicy gwiazdek z użyciem SVG
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <svg
      key={index}
      className={index < rate ? 'filled-star' : 'empty-star'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={index < rate ? 'gold' : 'lightgray'} // Kolor wypełnienia na podstawie ratingu
    >
      <path d="M12 .587l3.668 7.431L24 9.751l-6 5.841 1.417 8.262L12 18.896l-7.417 4.958L6 15.592l-6-5.841 8.332-1.733z" />
    </svg>
  ));

  return <div className="rating-bar">{stars}</div>;
};

export default RatingBar;
