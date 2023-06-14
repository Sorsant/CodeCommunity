import React from "react";
import { Link } from "react-router-dom";
import styles from "./communityCard.module.css";

interface posteos {
    id: number;
    user_imagen: string;
    nickname: string;
    description: string;
    titulo: string;
    imagen: string;
    createDate: string;
    gitHub: string;
    likes: number;

}

//interface User {}

const postCard: React.FC<posteos> = ({ nickname, description, user_imagen, titulo, id, imagen, likes, gitHub, createDate }): JSX.Element => {

    return (
        <div>

            {/*Revisar el parametro para identificar el grupo*/}

            <div>
                <h3>{nickname}</h3>
                <img src={user_imagen} alt={nickname} />
                <Link to={`/${id}`}><h2>{titulo}</h2></Link>
                <h4>{description}</h4>
                <img src={imagen} alt={imagen} />
                <h5>{gitHub}</h5>
                <div>
                    <h5>{createDate}</h5>
                    <h5>{likes}</h5>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    )
}

export default postCard;