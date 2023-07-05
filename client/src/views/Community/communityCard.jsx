import React from "react";
import { Link } from "react-router-dom";
import styles from "./communityCard.module.css";
import { useSelector } from "react-redux";

const CommunityCard = ({ id, name, description, language, image }) => {
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
    <div className={styles.container}>
      <h2 className={styles.titleCom}>{name}</h2>
      <h3 className={styles.language}>Languages: <span >{language}</span></h3>
      <Link to={`/communities/${id}`} onClick={handleMoreInfo}>
        <button className={styles.buttonModal}>
          <div className={styles.subContainer}>
            <div className={styles.containerImg}>
              <img src={image} alt={image} />
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default CommunityCard;
