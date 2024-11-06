import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RatingBar from './RatingBar';

const CarProfile = ({ car, dispatch, onEditClick }) => {
  const navigate = useNavigate();
  const { id, car: carBrand, registration, year, color, engine, price, distance, seats, fuel, transmission, image, rating } = car;

  const [localRating, setLocalRating] = useState(rating || 0);

  const handleRate = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking "Rate"
    const newRating = localRating === 10 ? 0 : localRating + 1;
    setLocalRating(newRating);
    dispatch({
      type: "rate",
      id,
      rating: newRating,
    });
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking "Delete"
    dispatch({
      type: "delete",
      id,
    });
  };

  const handleCardClick = () => {
    navigate(`/lab2/${id}`);
  };

  return (
    <div
      //onClick={handleCardClick}
      className="card bg-base-200 shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto transform transition duration-200 hover:scale-105 cursor-pointer"
    >
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400 text-xl">⭐</span>
          <span className="font-semibold text-lg">{localRating}</span>
        </div>
        <span className="badge badge-success">Available now</span>
        <span className="text-sm text-gray-400">{distance}m</span>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <img className="w-full h-48 object-cover rounded-md mb-4" src={image} alt={carBrand} />
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-primary">{carBrand}</h3>
          <h4 className="text-md font-medium text-gray-300">{registration}</h4>
          <p className="text-sm text-gray-400">{`${engine}, ${year}, ${color}`}</p>
          <p className="text-lg font-bold text-secondary">${price} / hour</p>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4 mt-4">
          <span title="Transmission" className="flex items-center space-x-1">
            <span className="text-lg">⚙️</span>
            <span>{transmission}</span>
          </span>
          <span title="Fuel" className="flex items-center space-x-1">
            <span className="text-lg">⛽</span>
            <span>{fuel}</span>
          </span>
          <span title="Seats" className="flex items-center space-x-1">
            <span className="text-lg">👤</span>
            <span>{seats}</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mt-6">
          <button onClick={(e) => { e.stopPropagation(); onEditClick(); }} className="btn btn-sm btn-outline btn-primary">Edytuj</button>
          <button onClick={handleDelete} className="btn btn-sm btn-outline btn-error">Usuń</button>
          <button onClick={handleRate} className="btn btn-sm btn-secondary">Oceń</button>
        </div>

        {/* Rating Bar */}
        <div className="mt-4">
          <RatingBar rate={localRating} />
        </div>
      </div>
    </div>
  );
};

export default CarProfile;
