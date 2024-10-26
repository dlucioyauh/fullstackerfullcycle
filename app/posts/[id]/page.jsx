import React from 'react';

const PostPage = async ({ params }) => {
    // Aguarde para acessar params
    const { id } = await params; // Aqui está a mudança

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg">{post.body}</p>
        </div>
    );
};

export default PostPage;