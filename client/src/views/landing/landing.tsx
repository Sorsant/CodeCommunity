import React from "react";
import { Link } from "react-router-dom";
import Login from "../login/login";

const LandingPage: React.FC = () : JSX.Element => {
    return(
        <div>
            <h1>¿Atascado con tu código?</h1>
            <h3>Únete a la comunidad de programadores más grande de América Latina, encuentra mentores, resuelve dudas, forma comunidades y conviértete en un experto codeando. ¿Estás listo?</h3>
            <div>
            <button>
                <Link to="/register"><h1>Registrate</h1></Link>
            </button>
            <button>
                <Link to="/home"><h1>Navega como invitado</h1></Link>
            </button>
            <div>
                <Login />
            </div>
            </div>
        </div>
    )
}
export default LandingPage;