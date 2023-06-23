import React from "react";
import { Link } from "react-router-dom";
import styles from "./communityCard.module.css";

const CommunityCard = ({ name, description, language, image, created }) => {

    return (
        <div className={styles.card}>

            <Link to={`/communities/${name}`}> {/*Revisar el parametro para identificar el grupo*/}

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
    )
}

export default CommunityCard;