import React, { useEffect } from "react";
import styles from "./newsCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Getcategory, getNews } from "../../components/Redux/Actions/Get/action-get";

const NewsCard = ({ Link, Category, Author, Image, Description, Title }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getcategory());
  }, [dispatch]);

  const categories = useSelector((state) => state.category);
const news = useSelector(state => state.news)
  // Buscar la categoría correspondiente al ID de la categoría
  const category = news.find((noticia) => noticia.category === categories.name);

  return (
    <div className={`card ${styles.newsCard}`} style={{ height: "620px" }}>
      <img src={Image} className="card-img-top" alt="Image Not Found" />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Description}</p>
        <a href={Link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read more
        </a>
        {category && (
          <p className="card-text">
            <small className="text-muted">Category: {category.name}</small>
          </p>
        )}
        <p className="card-text">
          <small className="text-muted">Author: {Author}</small>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
