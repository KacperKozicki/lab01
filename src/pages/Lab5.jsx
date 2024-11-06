// src/pages/Lab5Page.jsx
import React, { useReducer, useMemo, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFetch } from '../hooks/AppHooks';
import TableHeader from '../components/TableHeader';
import TableDataReducer from '../data/TableDataReducer';
import Accordion from '../components/Accordion';

const Lab5Page = () => {
    const navigate = useNavigate();
    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

    const tableData = useMemo(() => posts && users && comments ? posts.map((p) => ({
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
    })) : [], [posts, users, comments]);

    const initialState = {
        initialData: [],
        sortedData: [],
    };

    const [state, dispatch] = useReducer(TableDataReducer, initialState);

    useEffect(() => {
        if (tableData.length > 0) {
            dispatch({ type: "SET_DATA", data: tableData });
        }
    }, [tableData]);

    const handleSort = (key, direction) => {
        const actionType = direction === "asc" ? "SORT_ASC" : direction === "desc" ? "SORT_DESC" : "RESET";
        dispatch({ type: actionType, key });
    };

    return (
        <div className="p-6 overflow-hidden">
            <h1 className="text-2xl font-bold mb-4">Lab5 Page - Data from JSONPlaceholder</h1>
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <TableHeader
                                label="User"
                                sortOrder={state.sortConfig?.key === "user" ? state.sortConfig.direction : "natural"}
                                onSort={(direction) => handleSort("user", direction)}
                            />
                            <TableHeader
                                label="Post title"
                                sortOrder={state.sortConfig?.key === "post" ? state.sortConfig.direction : "natural"}
                                onSort={(direction) => handleSort("post", direction)}
                            />
                            <TableHeader
                                label="Comments count"
                                sortOrder={state.sortConfig?.key === "comments" ? state.sortConfig.direction : "natural"}
                                onSort={(direction) => handleSort("comments", direction)}
                            />
                        </tr>
                    </thead>
                    <tbody>
                        {state.sortedData.map((data, index) => (
                            <tr key={index}>
                                <td>
                                    {data.user ? (
                                        <Link to={`/lab5/users/${data.user.id}`} className="text-blue-500 underline">
                                            {data.user.name}
                                        </Link>
                                    ) : (
                                        "Loading..."
                                    )}
                                </td>
                                <td>
                                    <Accordion title={data.post.title}>
                                        <p>{data.post.body}</p>
                                    </Accordion>
                                </td>
                                <td>
                                    <button
                                        className="text-blue-500 underline"
                                        onClick={() => navigate(`/lab5/posts/${data.post.id}/comments`)}
                                    >
                                        {data.comments.length}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Lab5Page;
