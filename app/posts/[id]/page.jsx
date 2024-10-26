import React from 'react';

const PostPage = async ({ params }) => {
    const { id } = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-textForeground">{post.title}</h1>
            <p className="post-body text-textForeground">{post.body}</p> {}
        </div>
    );
};

export default PostPage;