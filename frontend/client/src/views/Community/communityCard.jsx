import React from "react";
import { Link } from "react-router-dom";
import styles from "./communityCard.module.css";
import { useSelector } from "react-redux";

const CommunityCard = ({ id, name, description, language, image, created }) => {
  const login = useSelector((state) => state.home.login);
  const handleMoreInfo = () => {
    if (login) {
      // Si el usuario está logueado, redirige a `/detail/${id}`
      window.location.href = `/communities/${id}`;
    } else {
      // Si el usuario no está logueado, muestra el componente de login
      window.location.href = `/login`;
    }
  };
  return (
    <div className={styles.card}>
      <Link to="#" onClick={handleMoreInfo}>
        {" "}
        {/*Revisar el parametro para identificar el grupo*/}
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="Not Found" />

          <h2 className={styles.text}>{name}</h2>

          <h3 className={styles.description}>{language}</h3>

          <div>
            <p className={styles.description}>{description}</p>
            <p className={styles.description}>{created}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CommunityCard;
