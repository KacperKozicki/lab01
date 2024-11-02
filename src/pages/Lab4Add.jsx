import React, { useContext, useState } from 'react';
import AppContext from '../data/AppContext';

function Lab4Add({ onClose = () => {} }) {
  const { dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({
    car: '',
    registration: '',
    year: '',
    color: '',
    engine: '',
    price: '',
    rating: '',
    distance: '',
    seats: '',
    fuel: '',
    transmission: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      payload: {
        ...formData,
        year: Number(formData.year),
        price: Number(formData.price),
        rating: Number(formData.rating),
        distance: Number(formData.distance),
        seats: Number(formData.seats),
      }
    });
    setFormData({
      car: '',
      registration: '',
      year: '',
      color: '',
      engine: '',
      price: '',
      rating: '',
      distance: '',
      seats: '',
      fuel: '',
      transmission: ''
    });
    onClose(); // Close the form
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input name="car" value={formData.car} onChange={handleChange} placeholder="Car" />
      <input name="registration" value={formData.registration} onChange={handleChange} placeholder="Registration" />
      <input name="year" value={formData.year} onChange={handleChange} placeholder="Year" />
      <input name="color" value={formData.color} onChange={handleChange} placeholder="Color" />
      <input name="engine" value={formData.engine} onChange={handleChange} placeholder="Engine" />
      <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
      <input name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" />
      <input name="distance" value={formData.distance} onChange={handleChange} placeholder="Distance" />
      <input name="seats" value={formData.seats} onChange={handleChange} placeholder="Seats" />
      <input name="fuel" value={formData.fuel} onChange={handleChange} placeholder="Fuel" />
      <input name="transmission" value={formData.transmission} onChange={handleChange} placeholder="Transmission" />
      <button type="submit">Add</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}

export default Lab4Add;
