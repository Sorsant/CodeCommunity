import React from "react";
import PostCardFake from "./card";
import { useSelector } from "react-redux";
import styles from './cardsFake.module.css'

const PosteoCardsFake = () => {
    const posteos = useSelector((state) => state.home.posts);

    // Verificar si posteos es un array
    if (!Array.isArray(posteos)) {
        return <div>No hay posteos disponibles.</div>;
    }


    return (
        <div className={styles.containerCards}>
            {posteos.map((post) => (
                <div key={post.id}>

                    <PostCardFake
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

export default PosteoCardsFake;
