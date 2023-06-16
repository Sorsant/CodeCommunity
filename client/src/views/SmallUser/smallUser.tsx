import React from "react";
import styles from "./smallUser.module.css";

interface Users {
    nickname: string;
    user_imagen: string;
}

const SmallUser: React.FC <Users> = ({nickname, user_imagen}) : JSX.Element => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={user_imagen} alt="User_image" />
            <h3 className={styles.text}>{nickname}</h3>
        </div>
    )
}

export default SmallUser;