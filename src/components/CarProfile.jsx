import React, { useState } from 'react';
import RatingBar from './RatingBar';
import '../styles/CarProfile.css';

const CarProfile = ({ car, dispatch }) => {
  const { id, car: carBrand, registration, year, color, engine, price, distance, seats, fuel, transmission, image, rating } = car;

  const [localRating, setLocalRating] = useState(rating || 0);  // Ustawienie lokalnego ratingu

  // Funkcja obsługi dla Rate
  const handleRate = () => {
    const newRating = localRating === 10 ? 0 : localRating + 1;
    setLocalRating(newRating);  // Zaktualizuj lokalny stan
    dispatch({
      type: "rate",
      id: id,
      rating: newRating  // Przekazujemy nową wartość rating do Reducera
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "delete",
      id: id
    });
  };

  const handleEdit = () => {
    dispatch({
      type: "edit",
      id: id
    });
  };

  return (
    <div className="car-profile">
      <div className="car-profile-header">
        <div className="car-rating">
          <span className="star">⭐</span>
          <span>{localRating}</span>  {/* Wyświetlamy lokalny rating */}
        </div>
        <span className="availability">Available now</span>
        <span className="distance">{distance}m</span>
      </div>

      <div className="car-profile-content">
        <img className="car-image" src={image} alt={`${carBrand}`} />
        <div className="car-details">
          <h3>{carBrand}</h3>
          <h4>{registration}</h4>
          <p>{`${engine}, ${year}, ${color}`}</p>
          <p className="price">${price} / hour</p>

          <div className="car-icons">
            <span title="Manual" className="icon">⚙️{transmission}</span>
            <span title="Diesel" className="icon">⛽{fuel}</span>
            <span title="Seats" className="icon">👤 {seats}</span>
          </div>

          {/* Przycisk obsługujący Rate */}
          <div className="car-actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleRate}>Rate</button>
          </div>

          {/* Pasek gwiazdek */}
          <RatingBar rate={localRating} />
        </div>
      </div>
    </div>
  );
};

export default CarProfile;
