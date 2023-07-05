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
      <button
        className={styles.buttonModal}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
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
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {name}
              </h1>
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
              <Link to="#" onClick={handleMoreInfo}>
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

{
  /* <button>
  <a href="#">
    <svg viewBox="0 0 16 16" fill="currentColor" id="facebook">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
    </svg>
  </a>
</button> */
}
