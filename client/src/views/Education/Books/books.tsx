import React from "react";
import Book1 from "./BooksImages/Book1Etudes.png";
import Book2 from "./BooksImages/Book2Op15.png";
import Book3 from "./BooksImages/Book3ClairDeLune.png";
import Book4 from "./BooksImages/Book4Rhapsodie.png";
import styles from "./books.module.css";

const Books: React.FC = () : JSX.Element => {
    return (
        <div className={styles.container}>
            <h3 className={styles.text}>Here you have a little selection of books for your learning, we hope you enjoy it!</h3>
                <div className={styles.book}>
                <a href="https://drive.google.com/file/d/18HAhPmvkhvzaWR6TfbsadUOWokXb5ZCu/view?usp=sharing"><h4 className={styles.text}>The power of JavaScript</h4></a>
                    <img className={styles.image} src={Book1} alt="Front Page"/>
                    <h5 className={styles.text}>Language: JavaScript</h5>
                </div>
                <div className={styles.book}>
                    <a href="https://drive.google.com/file/d/1sfwuwIvQSCPNtflfl_rUEFk0hPm8Oj3N/view?usp=sharing"><h4 className={styles.text}>Python for beginners</h4></a>
                    <img className={styles.image} src={Book2} alt="Front Page" />
                    <h5 className={styles.text}>Language: Python</h5>
                </div>
                <div className={styles.book}>
                    <a href="https://drive.google.com/file/d/1vrtsfVhlMUdsd57Xyu1Vc2px6wQppuZF/view?usp=sharing"><h4 className={styles.text}>The problem with Tipescript</h4></a>
                    <img className={styles.image} src={Book3} alt="Front Page" />
                    <h5 className={styles.text}>Language: Typescript</h5>
                </div>
                <div className={styles.book}>
                    <a href="https://drive.google.com/file/d/14d9XeN1eG7enrHGy9AuoJKnWZ_QCix0e/view?usp=sharing"><h4 className={styles.text}>Learn Go</h4></a>
                    <img className={styles.image} src={Book4} alt="Front Page" />
                    <h5 className={styles.text}>Language: Go</h5>
                </div>
        </div>
    )
}

export default Books;