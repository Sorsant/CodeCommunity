import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";



//interface User {}

const postCard = ({
  id,
  title,
  description,
  image,
  created,
}) => {
  return (
    <div className={styles.container}>
      {/*Revisar el parametro para identificar el grupo*/}
      <div>
        <div className={styles.headerCard}>
          <h3 className={styles.text1}>{title}</h3>
          {/* <img src={user_imagen} alt={nickname} className={styles.img1} /> */}
        </div>
        {/* <h2 className={styles.text3}>{titulo}</h2> */}
        <img src={image} alt={image} className={styles.img2} />
        {/* <h5 className={styles.text2}>Github: {gitHub}</h5> */}
        <div className={styles.container2}>
          <h5 className={styles.text2}>Created at: {created}</h5>
          {/* <h5 className={styles.text2}>{likes}⭐</h5> */}
        </div>
        <div>
          <p className={styles.text2}>{description}</p>
        </div>
        <Link to={`/post/${id}`} className={styles.linkDetail}>
          <h2 className={styles.text4}>More Info</h2>
        </Link>
      </div>
    </div>
  );
};

export default postCard;
