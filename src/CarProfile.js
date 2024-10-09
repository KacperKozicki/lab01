import React from 'react';
import './CarProfile.css';

const CarProfile = ({ car }) => {
  const { id, car: carBrand, registration, year, color, engine } = car;

  return (
    <div className="car-profile">
      <h2>Samochód: {id}</h2>
      <ul>
        <li><strong>Marka:</strong> {carBrand}</li>
        <li><strong>Rejestracja:</strong> {registration}</li>
        <li><strong>Rok produkcji:</strong> {year}</li>
        <li><strong>Kolor:</strong> {color}</li>
        <li><strong>Pojemność silnika:</strong> {engine}</li>
      </ul>
    </div>
  );
};

export default CarProfile;
