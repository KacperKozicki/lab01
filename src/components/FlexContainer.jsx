import React, { useState } from 'react';
import { useData, useDispatch } from '../hooks/AppHooks';
import CarProfile from './CarProfile';
import Lab4Add from '../pages/Lab4Add';
import Lab4Edit from '../pages/Lab4Edit';
function FlexContainer() {
    // const { items, dispatch } = useContext(AppContext);
    const items = useData();
    const dispatch = useDispatch();
    const [showAddForm, setShowAddForm] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(null);

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    const handleEditClick = (item) => {
        setItemToEdit(item);
    };

    const closeEditForm = () => {
        setItemToEdit(null);
    };

    return (
        <div className="flex-container relative">
            <button onClick={toggleAddForm} className="btn btn-primary mb-4">Dodaj nowy</button>

            {/* Add Modal */}
            {showAddForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="modal-box custom-modal bg-base-200 rounded-xl shadow-lg p-6 max-w-lg w-full mx-4">
                        <button 
                            className="btn btn-sm btn-circle absolute right-4 top-4" 
                            onClick={toggleAddForm}
                        >
                            ✕
                        </button>
                        <Lab4Add onClose={toggleAddForm} />
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {itemToEdit && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="modal-box custom-modal bg-base-200 rounded-xl shadow-lg p-6 max-w-lg w-full mx-4">
                        <button 
                            className="btn btn-sm btn-circle absolute right-4 top-4" 
                            onClick={closeEditForm}
                        >
                            ✕
                        </button>
                        <Lab4Edit itemToEdit={itemToEdit} onClose={closeEditForm} />
                    </div>
                </div>
            )}

            {/* Car items displayed as CarProfile components */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map(item => (
                    <CarProfile
                        key={item.id}
                        car={item}
                        dispatch={dispatch}
                        onEditClick={() => handleEditClick(item)}
                    />
                ))}
            </div>
        </div>
    );
}

export default FlexContainer;
