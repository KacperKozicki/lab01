import React, { useReducer } from 'react';
import '../styles/FlexContainer.css'; // Import stylów dla FlexContainer
import AppReducer from '../data/AppReducer';
import CarTile from './CarTile'; // Import komponentu CarTile

function FlexContainer({ data }) {
    // Używamy useReducer z AppReducer i przekazujemy dane jako stan początkowy
    const [items, dispatch] = useReducer(AppReducer, data);

    return (
        <div className="flex-container">
            {items.map(item => (
                <CarTile
                    key={item.id}
                    car={item} // Przekazujemy dane samochodu do CarTile
                    dispatch={dispatch} // Przekazujemy dispatch
                />
            ))}
        </div>
    );
}

export default FlexContainer;
