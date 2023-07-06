import React from "react";
import styles from "./newsCardFake.module.css";


const NewsCardFake = ({ category, author, image, description, title }) => {
    
    return (
        <div className={styles.container}>
            <h1 className={styles.noticeTitle}>Notices</h1>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <img src={image} alt={image} />
                </div>
                <div className={styles.card_body}>
                    <span className={styles.tag}>{category}</span>
                    <h4>
                        {title}
                    </h4>
                    <p>
                        {description}
                    </p>
                    <div className={styles.user}>
                        <div className={styles.user_info}>
                            Author: {author}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCardFake;
