import React, { useContext } from 'react';
import AppContext from '../data/AppContext';
import RatingBar from './RatingBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';

const CarTile = ({ car, onEditClick }) => {
  const { dispatch } = useContext(AppContext);
  const { id, car: carBrand, registration, year, color, engine, price, rating } = car;

  const handleRate = () => {
    const newRating = rating === 10 ? 0 : rating + 1;
    dispatch({
      type: "rate",
      id,
      rating: newRating,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "delete",
      id,
    });
  };

  return (
    <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden">
      <div className="card-body p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{carBrand}</h3>
        
        {/* Car Details */}
        <p className="text-sm text-gray-500">Registration: {registration}</p>
        <p className="text-sm text-gray-500">Year: {year}</p>
        <p className="text-sm text-gray-500">Color: {color}</p>
        <p className="text-sm text-gray-500">Engine: {engine}</p>
        <p className="text-lg font-semibold text-secondary mt-2">Price: ${price} / hour</p>

        {/* Rating Bar */}
        <RatingBar rate={rating} />

        {/* Actions */}
        <div className="flex items-center justify-between mt-4 space-x-2">
          <button
            onClick={onEditClick}
            className="btn btn-sm btn-outline btn-primary flex items-center space-x-1"
          >
            <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span>
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-sm btn-outline btn-error flex items-center space-x-1"
          >
            <FontAwesomeIcon icon={faTrash} />
            <span>Delete</span>
          </button>
          <button
            onClick={handleRate}
            className="btn btn-sm btn-secondary flex items-center space-x-1"
          >
            <FontAwesomeIcon icon={faStar} />
            <span>Rate</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarTile;
