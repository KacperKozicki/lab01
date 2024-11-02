import React, { useReducer } from 'react';
import CarProfile from '../components/CarProfile'; // Import the CarProfile component
import { data } from '../data/module-data'; // Import car data
import AppReducer from '../data/AppReducer'; // Import the Reducer

const App = () => {
  // Initialize the reducer with car data
  const [cars, dispatch] = useReducer(AppReducer, data);

  return (
    <div className="app bg-base-200 min-h-screen p-6">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center text-primary mb-8">Dostępne samochody</h1>
        
        {/* Car Profiles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarProfile key={car.id} car={car} dispatch={dispatch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
