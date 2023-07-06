import React from "react";
import styles from "./smallUser.module.css";

const SmallUser = () => {

    return (
        <div className={styles.container}>
            <img className={styles.image} src="hola" alt="User_image" />
            <h3 className={styles.text}>User name</h3>
        </div>
    )
}

export default SmallUser;