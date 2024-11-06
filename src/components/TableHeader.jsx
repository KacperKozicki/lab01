// src/components/TableHeader.jsx
import React from 'react';

const TableHeader = ({ label, sortOrder, onSort }) => {
    // Conditional class for dropdown alignment
    const dropdownAlignment = label === "User" ? "dropdown-right" : "dropdown-start";

    return (
        <th className="p-4 text-left">
            <div className="flex items-center gap-2">
                <span>{label}</span>
                <div className={`dropdown ${dropdownAlignment}`}>
                    <button
                        tabIndex={0}
                        className="btn btn-sm btn-outline"
                    >
                        {sortOrder === "asc" ? "▲" : sortOrder === "desc" ? "▼" : "↔"}
                    </button>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
                        <li><button onClick={() => onSort("asc")}>Ascending order</button></li>
                        <li><button onClick={() => onSort("desc")}>Descending order</button></li>
                        <li><button onClick={() => onSort("natural")}>Natural order</button></li>
                    </ul>
                </div>
            </div>
        </th>
    );
};

export default TableHeader;
