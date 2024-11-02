import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';

const Lab2 = () => {
  const { id } = useParams();
  const carId = parseInt(id, 10);

  // Validate the carId and find the car
  if (isNaN(carId)) {
    return (
      <div className="flex items-center justify-center my-10">
        <div className="alert alert-error shadow-lg max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">Brak poprawnego identyfikatora samochodu.</h2>
          <p>Proszę podać poprawny identyfikator, aby zobaczyć szczegóły pojazdu.</p>
        </div>
      </div>
    );
  }

  const car = data.find((c) => c.id === carId);

  if (!car) {
    return (
      <div className="flex items-center justify-center my-10">
        <div className="alert alert-warning shadow-lg max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">Nie znaleziono samochodu o tym identyfikatorze.</h2>
          <p>Samochód, którego szukasz, nie istnieje w bazie danych. Sprawdź identyfikator i spróbuj ponownie.</p>
        </div>
      </div>
    );
  }

  // Display car details if a car is found
  return (
    <div className="container mx-auto my-10 p-4">
      <h2 className="text-center text-3xl font-bold mb-8">Szczegóły samochodu: {car.car}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Car Image */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={car.image} alt={car.car} className="w-full h-full object-cover" />
          </figure>
        </div>

        {/* Car Details */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body space-y-4">
            <h3 className="card-title text-primary text-2xl">{car.car}</h3>

            <p><strong>Rejestracja:</strong> {car.registration}</p>
            <p><strong>Rok produkcji:</strong> {car.year}</p>
            <p><strong>Kolor:</strong> {car.color}</p>
            <p><strong>Silnik:</strong> {car.engine}</p>
            <p><strong>Cena za godzinę:</strong> ${car.price}</p>
            <p><strong>Ocena:</strong> {car.rating} ⭐</p>
            <p><strong>Dystans:</strong> {car.distance}m</p>
            <p><strong>Liczba miejsc:</strong> {car.seats}</p>
            <p><strong>Paliwo:</strong> {car.fuel}</p>
            <p><strong>Skrzynia biegów:</strong> {car.transmission}</p>

            <div className="badge badge-success text-white py-2 px-4 mt-4">
              Dostępny
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab2;
