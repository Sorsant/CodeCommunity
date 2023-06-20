import React from "react";
import styles from "./smallUser.module.css";

const SmallUser = ({nickname, user_imagen}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={user_imagen} alt="User_image" />
            <h3 className={styles.text}>{nickname}</h3>
        </div>
    )
}

export default SmallUser;