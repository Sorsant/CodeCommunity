import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.css";
import { addlikePost, unlikePost } from "../../Redux/Actions/User/actionUser";

const PostCard = ({ id }) => {
  const loggin = useSelector((state) => state.home.login);
  const users = useSelector((state) => state.home.users);
  const post = useSelector((state) =>
    state.home.posts.find((post) => post.id === id)
  );
  const userInfo = useSelector((state) => state.userdb.user);
  const userExtra = useSelector((state) => state.home.userExtra);
  const dispatch = useDispatch();

  const [posteo, setPosteo] = useState({  likes: [userInfo?.id]});

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

  const likedByCurrentUser = post.likes.includes(userInfo?.id);

  const handleLike = async () => {
    const loggedInUserId = JSON.parse(localStorage.getItem("loggedInUserId"));
    if (loggedInUserId) {
      if (likedByCurrentUser) {
        dispatch(unlikePost(id));
      } else {
        const response = await dispatch(addlikePost(id, posteo.likes));
        const updatedLikes = response.data.likes; // Obtener el nuevo array de likes desde la respuesta de la API
        setPosteo({ likes: updatedLikes }); // Actualizar el estado local con el nuevo array de likes
      }
    }
  };
  
console.log(posteo, "w")
  return (
    <div className={styles.card}>
      <>
        <Link to={`/detail/${id}`} className={styles.linkDetail}>
          <div className={styles.card_image}>
            <img src={post.image} alt={post.title} />
          </div>
          <h2 className={styles.title}>{post.title}</h2>
        </Link>
        <p className={styles.card_body}>{post.description}</p>
        <p className={styles.likes}>Likes: {post.likes.length}</p>

      <button className={styles.boton} onClick={() => handleLike(id)}>
  {likedByCurrentUser ? "Unlike" : "Like"}
</button>

        <p className={styles.footer}>
          Created by
          <span className={styles.by_name}>
            <img
              src={userE?.user_image}
              alt={userE?.name}
              className={styles.imgUser}
            />
          </span>
        </p>
      </>
    </div>
  );
};

export default PostCard;
