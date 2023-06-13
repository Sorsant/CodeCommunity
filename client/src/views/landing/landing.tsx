import React from "react";
import { Link } from "react-router-dom";
import Login from "../login/login";
import styles from "./landing.module.css";

const LandingPage: React.FC = () : JSX.Element => {
    return(
        <div className={styles.landing}>
            <h1>¿Atascado con tu código?</h1>
            <h3>Únete a la comunidad de programadores más grande de América Latina, encuentra mentores, resuelve dudas, forma comunidades y conviértete en un experto codeando. ¿Estás listo?</h3>
            <button className={styles.buttons}>
                <Link to="/register"><h1>Registrate</h1></Link>
            </button>
            <button className={styles.buttons}>
                <Link to="/home"><h1>Navega como invitado</h1></Link>
            </button>
            <div className={styles.container}>
            <div>
                <Login /> 
            </div>
            </div>
        </div>
    )
}
export default LandingPage;