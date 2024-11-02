import React, { useReducer } from 'react';
import CarProfile from '../components/CarProfile'; // Import komponentu CarProfile
import { data } from '../data/module-data'; // Import danych
import AppReducer from '../data/AppReducer'; // Import Reducera

const App = () => {
  // Inicjalizujemy reducer z danymi o samochodach
  const [cars, dispatch] = useReducer(AppReducer, data);

  return (
    <div className="app">
      <h1>Dostępne samochody</h1>
      {cars.map(car => (
        <CarProfile key={car.id} car={car} dispatch={dispatch} /> 
      ))}
    </div>
  );
};

export default App;
