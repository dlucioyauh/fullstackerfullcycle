import React from 'react';

const PostDetailPage = ({ params }) => {
    const { id } = params;
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            setPost(data);
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetailPage;
