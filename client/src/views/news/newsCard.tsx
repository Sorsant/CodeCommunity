import React from "react";
import styles from "./newsCard.module.css"

interface DataInfo {
    Title: string;
    Description: string;
    Image: string;
    Author: string;
    Category: string;
    Date: string;
    Link: string;
}

const NewsCard: React.FC<DataInfo> = ({ Link, Date, Category, Author, Image, Description, Title }) => {
    return (
        <div className={styles.ContainerCardNews}>
            <h1 className={styles.title}>{Title}</h1>
            <h3 className={styles.Date}>{Date}</h3>
            <h2 className={styles.description}>{Description}</h2>
            <img alt="Image Not Found" src={Image}></img>
            <a href={Link} target="_blank" rel="noopener noreferrer"> <span>Read more</span></a>
            <h3 className={styles.Author}>{Author}</h3>
            <h3 className={styles.Category}>{Category}</h3>
        </div>
    )

}
export default NewsCard;