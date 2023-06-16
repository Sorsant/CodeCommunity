import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

interface posteos {
  id: number;
  user_imagen: string;
  nickname: string;
  description: string;
  titulo: string;
  imagen: string;
  createDate: string;
  gitHub: string;
  likes: number;
}

//interface User {}

const postCard: React.FC <posteos> = ({
  nickname,
  description,
  user_imagen,
  titulo,
  id,
  imagen,
  likes,
  gitHub,
  createDate,
}): JSX.Element => {
  return (
    <div className={styles.container}>
      {/*Revisar el parametro para identificar el grupo*/}
      <div>
        <h3 className={styles.text1}>{nickname}</h3>
        <img src={user_imagen} alt={nickname} className={styles.img1} />
        <Link to={`/detail/${id}`}>
          <h2 className={styles.text3}>{titulo}</h2>
        </Link>
        <img src={imagen} alt={imagen} className={styles.img2} />
        <h5 className={styles.text2}>Github: {gitHub}</h5>
        <div className={styles.container2}>
          <h5 className={styles.text2}>Created at: {createDate}</h5>
          <h5 className={styles.text2}>{likes}⭐</h5>
        </div>
        <div>
          <p className={styles.text2}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default postCard;
