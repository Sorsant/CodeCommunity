import React from "react";
import PosteoCard from "../Card/Card";
import { useSelector } from "react-redux";
import styles from './cards.module.css'

const PosteoCards = () => {
    const posteos = useSelector((state) => state.home.posts);
    const login = useSelector((state) => state.home.login);

    const handleMoreInfo = (id) => {
        if (login) {
            window.location.href = `/comments/${id}`;
        } else {
            window.location.href = '/login';
        }
    };

    // Verificar si posteos es un array
    if (!Array.isArray(posteos)) {
        return <div>No hay posteos disponibles.</div>;
    }

    return (
        <div className={styles.containerCards}>
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
