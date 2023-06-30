import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const PostCard = ({ id }) => {
    const users = useSelector((state) => state.home.users);
    const post = useSelector((state) => state.home.posts.find((post) => post.id === id));
    const userExtra = useSelector((state) => state.home.userExtra.find((user) => user.id === post.user));
    const user = users.find((user) => user.id === post.user);

    return (
        <div className={styles.containerForm}>
            <div className={styles.cardContainer} key={post.id}>
                <div className={styles.userContainer}>
                    {userExtra && (
                        <img src={userExtra.user_image} alt={userExtra.name} />
                    )}
                    {user && (
                        <h2>{user.first_name} {user.last_name}</h2>
                    )}
                    {userExtra && userExtra.premium && userExtra.postulation && (
                        <p>
                            <Link to={`/login`}>
                                <button> Puedes pagarle a este instructor</button>
                            </Link>
                        </p>
                    )}
                </div>

                <div className={styles.postContainer}>
                    <h2>{post.title}</h2>
                    <h2>{post.description}</h2>
                    <img src={post.image} alt={post.title} />

                    <Link to={`/login`} className={styles.linkDetail}>
                        <h2 className={styles.text4}>More Info</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
