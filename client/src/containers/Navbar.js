import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../components/Redux/user";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.userdb.isAuthenticated);

  const authLinks = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Fakehome">
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <button className="btn nav-link" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          <h4>Login</h4>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          <h4>Register</h4>
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-dark bg-black shadow navbar-expand-lg px-4">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/" style={{fontFamily: "Orbitron, sans-serif"}}>
          <h1>Code</h1>
          <h1>Community</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Fakehome">
                <h4>Home</h4>
              </NavLink>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
