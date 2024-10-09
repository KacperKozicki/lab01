import React from 'react';
import { data } from './module-data'; // Import tablicy danych
import CarProfile from './CarProfile'; // Import komponentu CarProfile

function App() {
  return (
    <div className="App">
      <h1>Spis samochodów</h1>
      {/* wyświetl dla każdego: */}
      {data.map(car => (
        <CarProfile key={car.id} car={car} />
      ))}
    </div>
  );
}

export default App;
