import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const PostCard = ({ id }) => {
  const loggin = useSelector((state) => state.home.login);
  const users = useSelector((state) => state.home.users);
  const post = useSelector((state) =>
    state.home.posts.find((post) => post.id === id)
  );
  const userExtra = useSelector((state) => state.home.userExtra);

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

  return (
    <Link
      to={`/detail/${id}`}
      onClick={handleMoreInfo}
      className={styles.linkDetail}
    >
      <div className={styles.card}>
        <div className={styles.card_image}>
          <img src={post.image} alt={post.title} />
        </div>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.card_body}>
          {post.description}
        </p>
        <p className={styles.footer}>
          Created by
          <span className={styles.by_name}>
            {/* {userE.premium && userE.postulation && (
              <Link to={`/instructor/${userE.id}`} className={styles.linkInstructor}> */}
            {user.first_name} {user.last_name}
            {/* </Link>
            )} */}
            <img src={userE.user_image} alt={userE.name} className={styles.imgUser} />
          </span>
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
