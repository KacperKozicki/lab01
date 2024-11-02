import React from 'react';
import RatingBar from './RatingBar';  // Import komponentu RatingBar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';

const CarTile = ({ car, dispatch }) => {
  const { id, car: carBrand, registration, year, color, engine, price, rating } = car;

  // Funkcja obsługi dla Rate
  const handleRate = () => {
    const newRating = rating === 10 ? 0 : rating + 1;
    dispatch({
      type: "rate",
      id: id,
      rating: newRating
    });
  };

  // Funkcja obsługi dla Delete
  const handleDelete = () => {
    dispatch({
      type: "delete",
      id: id
    });
  };

  // Funkcja obsługi dla Edit
  const handleEdit = () => {
    dispatch({
      type: "edit",
      id: id
    });
  };

  return (
    <div className="car-tile">
      <h3>{carBrand}</h3>
      <p>Registration: {registration}</p>
      <p>Year: {year}</p>
      <p>Color: {color}</p>
      <p>Engine: {engine}</p>
      <p>Price: ${price} / hour</p>
      {/* Pasek gwiazdek z ratingiem */}
      <RatingBar rate={rating} />
      
      <div className="car-tile-actions">
      <button onClick={handleEdit} className="action-button">
        <FontAwesomeIcon icon={faEdit} /> Edit
      </button>
      <button onClick={handleDelete} className="action-button">
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>
      <button onClick={handleRate} className="action-button">
        <FontAwesomeIcon icon={faStar} /> Rate
      </button>
    </div>

    </div>
  );
};

export default CarTile;
