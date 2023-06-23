import React from "react";
import styles from "./newsCard.module.css";
import { useSelector } from "react-redux";

const NewsCard = ({ Link, Category, Author, Image, Description, Title }) => {
  const loggin = useSelector((state) => state.loggin);
  const handleMoreInfo = () => {
    if (loggin) {
      // Si el usuario está logueado, redirige a `/detail/${id}`
      window.location.href = Link;
    } else {
      // Si el usuario no está logueado, muestra el componente de login
      window.location.href = `/login`;
    }
  };
  return (
    <div className={`card ${styles.newsCard}`} style={{ height: "620px" }}>
      <img src={Image} className="card-img-top" alt="Image Not Found" />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Description}</p>
        <a
          href="#"
          onClick={handleMoreInfo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read more
        </a>
        <p className="card-text">
          <small className="text-muted">Category: {Category}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">Author: {Author}</small>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
