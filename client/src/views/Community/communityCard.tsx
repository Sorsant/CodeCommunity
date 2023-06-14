import React from "react";
import { Link } from "react-router-dom";
import styles from "./communityCard.module.css";

interface Communities {
    name: string;
    description: string;
    language: string;
    image: string;
}

//interface User {}

const CommunityCard: React.FC <Communities> = ({name, description, language, image}) : JSX.Element => {

    return (
        <div className={styles.card}>

            <Link to={`/groups/${name}`}> {/*Revisar el parametro para identificar el grupo*/}

                <div className={styles.container}>

                    <img className={styles.image} src={image} alt="Image Not Found" />

                    <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>

                    <h3>{language}</h3>
                    
                    <div>

                        <p>{description}</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CommunityCard;