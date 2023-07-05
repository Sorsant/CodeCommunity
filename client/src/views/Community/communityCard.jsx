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
      <button className={styles.buttonModal}>
        <div className={styles.subContainer}>
          <div className={styles.containerImg}>
            <img src={image} alt={image} />
          </div>
        </div>
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h1 class="modal-title fs-5" id="exampleModalLabel">{name}</h1> */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h3 className={styles.language}>
                Languages: <span>{language}</span>
              </h3>
              <p className={styles.description}>{description}</p>
              <Link to={`/communities/${id}`} onClick={handleMoreInfo}>
                Enter
              </Link>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
