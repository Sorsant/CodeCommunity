import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing.module.css";

const LandingPage: React.FC = () : JSX.Element => {
    return(
        <div className={styles.landing}>

              <div className={styles.contenedorDeBotones}>
            <button className={styles.buttons}>
                <Link className={styles.link} to="/register"><h1>Sign Up</h1></Link>
            </button>
            <button className={styles.buttons}>
                <Link className={styles.link} to="/home"><h1>Browse as a guest!</h1></Link>
            </button>
            <button className={styles.buttons}>
                <Link className={styles.link} to="/login"><h1>Log in !</h1></Link>
            </button>
            </div>

            <div className={styles.contenedor}>
            <h1>¿Problems with your code?</h1>
            <h3>Join the largest community of programmers in Latin America, find mentors, solve doubts, form communities and become an expert by coding. Are you ready?</h3>
            </div>
        </div>
    )
}
export default LandingPage;