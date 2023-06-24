import React from "react";
import { Link } from "react-router-dom";
import styles from "./communityCard.module.css";
import DetailCommunity from "../DetailCommunity/detailCommunity";

const CommunityCard = ({name, description, language, image, created}) => {

    return (
        <div className={styles.card}>

            <Link to={`/groups/${name}`}> {/*Revisar el parametro para identificar el grupo*/}

                <div className={styles.container}>

                    <img className={styles.image} src={image} alt="Image Not Found" />

                    <h2 className={styles.text}>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>

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