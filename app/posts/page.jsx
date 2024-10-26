"use client";

import React, { useEffect, useState } from 'react';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Lista de Posts</h1>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className="border p-4 rounded shadow-md hover:bg-gray-100 transition duration-200">
                        <a href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                            {post.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;