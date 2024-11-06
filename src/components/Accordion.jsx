import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-md mb-2">
            <button
                className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title} {isOpen ? "▲" : "▼"}
            </button>
            {isOpen && (
                <div className="p-4 border-t bg-white">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
