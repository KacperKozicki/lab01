// import React, { useReducer } from 'react';
// import '../styles/FlexContainer.css'; // Import stylów dla FlexContainer
// import AppReducer from '../data/AppReducer';
// import CarTile from './CarTile'; // Import komponentu CarTile

// function FlexContainer({ data }) {
//     // Używamy useReducer z AppReducer i przekazujemy dane jako stan początkowy
//     const [items, dispatch] = useReducer(AppReducer, data);

//     return (
//         <div className="flex-container">
//             {items.map(item => (
//                 <CarTile
//                     key={item.id}
//                     car={item} // Przekazujemy dane samochodu do CarTile
//                     dispatch={dispatch} // Przekazujemy dispatch
//                 />
//             ))}
//         </div>
//     );
// }

// export default FlexContainer;
import React, { useContext, useState } from 'react';
import '../styles/FlexContainer.css';
import AppContext from '../data/AppContext';
import CarTile from './CarTile';
import Lab4Add from '../pages/Lab4Add';
import Lab4Edit from '../pages/Lab4Edit';

function FlexContainer() {
    const { items } = useContext(AppContext);
    const [showAddForm, setShowAddForm] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(null); // State for the item to edit

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    const handleEditClick = (item) => {
        setItemToEdit(item); // Set the item to be edited
    };

    const closeEditForm = () => {
        setItemToEdit(null); // Reset the item to edit when done
    };

    return (
        <div className="flex-container">
            <button onClick={toggleAddForm} className="add-button">
                {showAddForm ? 'Cancel' : 'Add New Car'}
            </button>
            
            {showAddForm && <Lab4Add onClose={toggleAddForm} />}
            {itemToEdit && <Lab4Edit itemToEdit={itemToEdit} onClose={closeEditForm} />}

            {items.map(item => (
                <CarTile
                    key={item.id}
                    car={item}
                    onEditClick={() => handleEditClick(item)} // Pass edit handler to CarTile
                />
            ))}
        </div>
    );
}

export default FlexContainer;
