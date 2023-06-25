import React from "react";
import styles from "./newsCard.module.css";

const NewsCard = ({ Link, Category, Author, Image, Description, Title }) => {
    return (
        <div className={`card ${styles.newsCard}`} style={{ height: "750px" }}>
            <img src={Image} className="card-img-top" alt="Image Not Found" />
            <div className="card-body">
                <h5 className={`card-title ${styles.title}`}>{Title}</h5>
                <p className={`card-text ${styles.description}`}>{Description}</p>
                <a href={Link} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.ReadMore}`} style={{ fontSize: "17px" }}>
                    Read more
                </a>
                <p className={`card-text ${styles.Category}`}>
                    <small className="text-muted">Category: {Category}</small>
                </p>
                <p className={`card-text ${styles.Author}`}>
                    <small className="text-muted">Author: {Author}</small>
                </p>
            </div>
        </div>
    );
};

export default NewsCard;
