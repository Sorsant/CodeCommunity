import React, { useEffect } from "react";
import styles from "./newsCardFake.module.css";
import { useSelector } from "react-redux";

const NewsCardFake = ({ Link, Category, Author, Image, Description, Title }) => {
    const loggin = useSelector((state) => state.loggin);
    const handleMoreInfo = () => {
        if (loggin) {
            // Si el usuario está logueado, redirige a `/detail/${id}`
            window.location.href = Link;
        } else {
            // Si el usuario no está logueado, muestra el componente de login
            window.location.href = `/login`;
        }
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.noticeTitle}>Notices</h1>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <img src={Image} alt={Image} />
                </div>
                <div className={styles.card_body}>
                    <span className={styles.tag}>{Category}</span>
                    <h4>
                        {Title}
                    </h4>
                    <p>
                        {Description}
                    </p>
                    <div className={styles.user}>
                        <div className={styles.user_info}>
                            Author: {Author}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCardFake;
