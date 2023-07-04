import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.css";
import { addlikePost, unlikePost } from "../../Redux/Actions/User/actionUser";
import { useState } from "react";

const PostCard = ({ id }) => {
  const loggin = useSelector((state) => state.home.login);
  const users = useSelector((state) => state.home.users);
  const post = useSelector((state) => state.home.posts.find((post) => post.id === id));
  const userInfo = useSelector((state) => state.userdb.user);
  const userExtra = useSelector((state) => state.home.userExtra);
  const posts = useSelector((state) => state.home.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUserId = userInfo?.id;
    localStorage.setItem("loggedInUserId", JSON.stringify(loggedInUserId));
  }, [userInfo?.id]);

  if (!post) {
    // No se encontró la publicación correspondiente al ID proporcionado
    return null;
  }

  const user = users.find((user) => user.id === post.user);
  const userE = userExtra.find((user) => user.id === post.user);

  if (!user) {
    // No se encontró el usuario correspondiente a la publicación
    return null;
  }

  const handleMoreInfo = () => {
    if (loggin) {
      // Si el usuario está logueado, redirige a `/detail/${id}`
      window.location.href = `/detail/${id}`;
    } else {
      // Si el usuario no está logueado, muestra el componente de login
      window.location.href = `/login`;
    }
  };
  const likedByCurrentUser = post.likes.includes(userInfo?.id);

  const handleLike = () => {
    const loggedInUserId = JSON.parse(localStorage.getItem("loggedInUserId"));
    if (loggedInUserId) {
      if (likedByCurrentUser) {
        dispatch(unlikePost(id));
      } else {
        dispatch(addlikePost(id, loggedInUserId, posts));
      }
    }
  };
  return (
    <div className={styles.card}>
      {console.log()}
        <>
          <Link
            to={`/detail/${id}`}
            onClick={handleMoreInfo}
            className={styles.linkDetail}
          >
            <div className={styles.card_image}>
              <img src={post.image} alt={post.title} />
            </div>
            <h2 className={styles.title}>{post.title}</h2>
          </Link>
          <p className={styles.card_body}>{post.description}</p>
          <p className={styles.likes}>Likes: {post.likes.length}</p>

          {loggin && (
            <button className={styles.boton} onClick={handleLike}>
              {likedByCurrentUser ? "Unlike" : "Like"}
            </button>
          )}
          <p className={styles.footer}>
            Created by
            <span className={styles.by_name}>
              <img
                src={userE.user_image}
                alt={userE.name}
                className={styles.imgUser}
              />
            </span>
          </p>
        </>
    </div>
  );
};

export default PostCard;
