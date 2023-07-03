import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.css";
import { addlikePost, unlikePost } from "../../Redux/Actions/User/actionUser";
import EditPost from "../../../views/EditPost/EditPost";
import { useState } from "react";

const PostCard = ({ id }) => {
  const loggin = useSelector((state) => state.home.login);
  const users = useSelector((state) => state.home.users);
  const post = useSelector((state) =>
    state.home.posts.find((post) => post.id === id)
  );
  const userInfo = useSelector((state) => state.userdb.user);
  const [showEditForm, setShowEditForm] = useState(false);
  const userExtra = useSelector((state) => state.home.userExtra);
  const posts = useSelector((state) => state.home.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUserId = userInfo?.id;
    localStorage.setItem("loggedInUserId", JSON.stringify(loggedInUserId));
  }, [userInfo?.id]);

  useEffect(() => {
    const likesData = JSON.parse(localStorage.getItem("likesData"));
  }, []);
 

  const handleEditClick = () => {
    setShowEditForm(true);
  };
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

  const likedByCurrentUser = post.likes.includes(userInfo?.id); // Verifica si el usuario actual ha dado like en el post

  const handleLike = () => {
    const loggedInUserId = JSON.parse(localStorage.getItem("loggedInUserId")); // Obtener loggedInUserId del localStorage
    if (loggedInUserId) {
      if (likedByCurrentUser) {
        dispatch(unlikePost(id)); // Llama a la acción para quitar el like
      } else {
        dispatch(addlikePost(id, loggedInUserId, posts)); // Llama a la acción para dar like
      }
    }
  };

  return (
    <div className={styles.card}>
      {showEditForm ? (
        <EditPost onCancel={() => setShowEditForm(false)} />
      ) : (
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
          <p>Likes: {post.likes.length}</p>
          {/* Mostrar el botón de like/deslike según el estado actual */}
          {loggin && (
            <button className={styles.boton} onClick={handleLike}>
              {likedByCurrentUser ? "Unlike" : "Like"}
            </button>
          )}
          <p className={styles.footer}>
            Created by
            <span className={styles.by_name}>
              {userE.premium && userE.postulation && (
                <Link
                  to={`/instructor/${userE.id}`}
                  className={styles.linkInstructor}
                >
                  {user.first_name} {user.last_name}
                </Link>
              )}
              <img
                src={userE.user_image}
                alt={userE.name}
                className={styles.imgUser}
              />
            </span>
          </p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
              }

export default PostCard;
