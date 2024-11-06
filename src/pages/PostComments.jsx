// src/pages/PostComments.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/AppHooks';

const PostComments = () => {
    const { id } = useParams();
    const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    if (!post) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Post Details</h2>
            <div className="card bg-base-100 shadow-md p-4 mb-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p>{post.body}</p>
            </div>

            <h3 className="text-lg font-semibold mt-6">Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className="mb-4 card bg-base-200 p-4">
                        <p><strong>{comment.name}</strong> ({comment.email})</p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostComments;
