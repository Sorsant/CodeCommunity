import React from "react";
import PosteoCard from "../Card/Card";
import { useSelector } from "react-redux";

const PosteoCards = () => {
    const posteos = useSelector((state) => state.posts);

    // Verificar si posteos es un array
    if (!Array.isArray(posteos)) {
        return <div>No hay posteos disponibles.</div>;
    }

    return (
        <div>
            {posteos.map((post) => (
                <div key={post.id}>
                    <PosteoCard
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        created={post.created}
                    />
                </div>
            ))}
        </div>
    );
};

export default PosteoCards;
