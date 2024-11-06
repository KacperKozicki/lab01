// src/pages/UserDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/AppHooks';

const UserDetails = () => {
    const { id } = useParams();
    const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    // Display loading text until user data is available
    if (!user) return <p>Loading...</p>;

    // Add a guard check to ensure that 'user' has loaded and all properties are accessible
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            <div className="card bg-base-100 shadow-md p-4">
                <p><strong>Name:</strong> {user.name ?? "N/A"}</p>
                <p><strong>Email:</strong> {user.email ?? "N/A"}</p>
                <p><strong>Phone:</strong> {user.phone ?? "N/A"}</p>
                <p><strong>Website:</strong> {user.website ?? "N/A"}</p>
                <p><strong>Company:</strong> {user.company?.name ?? "N/A"}</p>
                <p><strong>Address:</strong> {`${user.address?.street ?? "N/A"}, ${user.address?.city ?? "N/A"}`}</p>
            </div>
        </div>
    );
};

export default UserDetails;
