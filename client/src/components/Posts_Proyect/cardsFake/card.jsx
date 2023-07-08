import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./cardFake.module.css";

const PostCardFake = ({ id }) => {
  const users = useSelector((state) => state.home.users);
  const post = useSelector((state) =>
    state.home.posts.find((post) => post.id === id)
  );
  const userExtra = useSelector((state) => state.home.userExtra);

  if (!post) {
    return null;
  }

  const user = users.find((user) => user.id === post.user);
  const userE = userExtra.find((user) => user.id === post.user);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.containerCardFake}>
      <NavLink to="/login" className={styles.linkDetail}>
        <div className={styles.cardFake}>
          <div className={styles.cardImageFake}>
            <img src={post.image} alt={post?.title} />
          </div>
          <div className={styles.footerFake}>
            <div className={styles.titleLikesFake}>
              <h2 className={styles.titleFake}>{post?.title}</h2>
              <p className={styles.likesFake}>💡: {post?.likes.length}</p>
            </div>
            <div className={styles.infoFake}>
              <img
                src={userE?.user_image}
                alt={userE?.name}
                className={styles.imgUserFake}
              />
              <span className={styles.byNameFake}>
                <p> by {user.first_name} </p>
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default PostCardFake;
