import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.css";
import { addlikePost, unlikePost } from "../../Redux/Actions/User/actionUser";
import { getHomePosts } from "../../Redux/Actions/ActionHome";

const PostCard = ({ id }) => {
  const loggin = useSelector((state) => state.home.login);
  const users = useSelector((state) => state.home.users);
  const post = useSelector((state) =>
    state.home.posts.find((post) => post.id === id)
  );
  const userInfo = useSelector((state) => state.userdb.user);
  const userExtra = useSelector((state) => state.home.userExtra);
  const dispatch = useDispatch();

  const [likedByCurrentUser, setLikedByCurrentUser] = useState(false);
  const [posts, setPosts] = useState();
  useEffect(() => {
    dispatch(getHomePosts());
  }, [dispatch]);

  useEffect(() => {
    const loggedInUserId = userInfo?.id;
    localStorage.setItem("loggedInUserId", JSON.stringify(loggedInUserId));
  }, [userInfo?.id]);

  useEffect(() => {
    // Verificar si el usuario actual ha dado like en el post
    setLikedByCurrentUser(post.likes.includes(userInfo?.id));
  }, [post.likes, userInfo?.id]);

  if (!post) {
    // No se encontró la publicación correspondiente al ID proporcionado
    return null;
  }

  const user = users.find((user) => user.id === post.user);
  const userE = userExtra?.find((user) => user.id === post.user);

  if (!user) {
    // No se encontró el usuario correspondiente a la publicación
    return null;
  }

  const handleLike = async () => {
    const loggedInUserId = JSON.parse(localStorage.getItem("loggedInUserId"));
    if (loggedInUserId) {
      if (likedByCurrentUser) {
        const updatedLikes = post?.likes.filter(
          (user) => user !== loggedInUserId
        );
        await dispatch(unlikePost(id, updatedLikes));
      } else {
        const updatedLikes = [...post.likes, loggedInUserId];
        await dispatch(addlikePost(id, updatedLikes));
      }

      await dispatch(getHomePosts()); // Despachar la acción getHomePosts después de actualizar los likes
    }
  };

  return (
    <div className={styles.containerCard}>
      <div className={styles.cardPost}>
        <Link to={`/detail/${id}`} className={styles.linkDetail}>
          <div className={styles.cardImagePost}>
            <img src={post.image} alt={post?.title} />
          </div>
        </Link>
        <div className={styles.footerPost}>
          <div className={styles.titleLikes}>
            <h2 className={styles.title}>{post?.title}</h2>
            <div className={styles.containerLikes}>
              <button className={styles.botonPost} onClick={handleLike}>
                {likedByCurrentUser ? (
                  <div className={styles.imgpositive}>
                    <img
                      src="https://cdn.discordapp.com/attachments/881403103054811170/1126347450739867658/foco-removebg-preview.png"
                      alt={post.title}
                    />
                  </div>
                ) : (
                  <div className={styles.imgNeg}>
                    <img
                      src="https://cdn.discordapp.com/attachments/881403103054811170/1126347450739867658/foco-removebg-preview.png"
                      alt={post.title}
                    />
                  </div>
                )}
              </button>
              <h5 className={styles.likes}>{post?.likes.length}</h5>
            </div>
          </div>
          <div className={styles.info}>
            <img
              src={userE?.user_image}
              alt={userE?.name}
              className={styles.imgUser}
            />
            <span className={styles.byName}>
              <p> by {user.first_name} </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
