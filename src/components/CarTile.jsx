// import React, { useContext } from 'react';
// import AppContext from '../data/AppContext';
// import RatingBar from './RatingBar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';

// const CarTile = ({ car }) => {
//   const { dispatch } = useContext(AppContext); // Get dispatch from context

//   const { id, car: carBrand, registration, year, color, engine, price, rating } = car;

//   const handleRate = () => {
//     const newRating = rating === 10 ? 0 : rating + 1;
//     dispatch({
//       type: "rate",
//       id,
//       rating: newRating
//     });
//   };

//   const handleDelete = () => {
//     dispatch({
//       type: "delete",
//       id
//     });
//   };

//   const handleEdit = () => {
//     // Custom edit functionality (e.g., open an edit form, or redirect to edit page)
//     dispatch({
//       type: "edit",
//       payload: { id, /* Include other properties if needed */ }
//     });
//   };

//   return (
//     <div className="car-tile">
//       <h3>{carBrand}</h3>
//       <p>Registration: {registration}</p>
//       <p>Year: {year}</p>
//       <p>Color: {color}</p>
//       <p>Engine: {engine}</p>
//       <p>Price: ${price} / hour</p>
//       <RatingBar rate={rating} />
      
//       <div className="car-tile-actions">
//         <button onClick={handleEdit} className="action-button">
//           <FontAwesomeIcon icon={faEdit} /> Edit
//         </button>
//         <button onClick={handleDelete} className="action-button">
//           <FontAwesomeIcon icon={faTrash} /> Delete
//         </button>
//         <button onClick={handleRate} className="action-button">
//           <FontAwesomeIcon icon={faStar} /> Rate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarTile;
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
      rating: newRating
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "delete",
      id
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
      <RatingBar rate={rating} />
      
      <div className="car-tile-actions">
        <button onClick={onEditClick} className="action-button">
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
