import React, { useContext, useState } from 'react';
import AppContext from '../data/AppContext';

function Lab4Add({ onClose = () => {}, isModal = false }) {
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
    onClose(); // Close the form after submission
  };

  return (
    <div className={`p-6 max-w-2xl mx-auto ${isModal ? 'bg-base-200' : ''} rounded-lg shadow-lg`}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-500">
            {formData.car ? formData.car[0] : 'C'}
          </span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Add New Car</h2>
        </div>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Car</label>
            <input
              name="car"
              value={formData.car}
              onChange={handleChange}
              placeholder="Car"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Registration</label>
            <input
              name="registration"
              value={formData.registration}
              onChange={handleChange}
              placeholder="Registration"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <input
              name="year"
              type="number"
              value={formData.year}
              onChange={handleChange}
              placeholder="Year"
              className="input input-bordered w-full"
              min="1900"
              max={new Date().getFullYear()}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Color</label>
            <select
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            >
              <option value="">Select Color</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Black">Black</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Engine</label>
            <input
              name="engine"
              value={formData.engine}
              onChange={handleChange}
              placeholder="Engine"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="input input-bordered w-full"
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              name="rating"
              type="number"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Rating"
              className="input input-bordered w-full"
              min="1"
              max="10"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Distance</label>
            <input
              name="distance"
              type="number"
              value={formData.distance}
              onChange={handleChange}
              placeholder="Distance"
              className="input input-bordered w-full"
              min="0"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Seats</label>
            <input
              name="seats"
              type="number"
              value={formData.seats}
              onChange={handleChange}
              placeholder="Seats"
              className="input input-bordered w-full"
              min="1"
              max="7"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fuel</label>
            <select
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            >
              <option value="">Select Fuel</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Transmission</label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="transmission"
                value="Manual"
                checked={formData.transmission === "Manual"}
                onChange={handleChange}
                className="radio radio-primary"
              />
              Manual
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="transmission"
                value="Automatic"
                checked={formData.transmission === "Automatic"}
                onChange={handleChange}
                className="radio radio-primary"
              />
              Automatic
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4 border-t border-gray-200 mt-4">
          <button type="button" onClick={onClose} className="btn btn-outline btn-error">Cancel</button>
          <button type="submit" className="btn btn-primary">Add Car</button>
        </div>
      </form>
    </div>
  );
}

export default Lab4Add;
