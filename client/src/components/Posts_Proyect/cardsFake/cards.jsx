import React from "react";
import PostCardFake from "./card";
import { useSelector } from "react-redux";
import styles from './cardsFake.module.css'

const PosteoCardsFake = () => {
    const posteos = useSelector((state) => state.home.posts);

    // Verificar si posteos es un array
    if (!Array.isArray(posteos)) {
        return <div>There are no posts available.</div>;
    }


    return (
        <div>
            <div className={styles.titlePostFake}>
                <h1>Posts</h1>
            </div>
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
        </div>
       
    );
};

export default PosteoCardsFake;
