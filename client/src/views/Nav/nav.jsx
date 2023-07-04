import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/searchBar";
import styles from "./nav.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../components/Redux/user";
import imagen from "./default.png";

const Nav = () => {
  const loggin = useSelector((state) => state.home.login);
  const user = useSelector((state) => state.userdb.user);
  const extras = useSelector((state) => state.home.userExtra);
  const extra = extras.find((users) => users.id === (user && user.id));
  const isAuthenticated = useSelector((state) => state.userdb.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className={styles.containerNav}>
      <nav className={`navbar ${styles.navbar}`}>
        <SearchBar />
        <div className={styles.title}>
          {loggin ? (
            <Link to="/home" className={styles.titleNav}>
              <h1>Code</h1>
              <h1>Community</h1>
            </Link>
          ) : (
            <Link to="/home" className={styles.titleNav}>
              <h1>Code</h1>
              <h1>Community</h1>
            </Link>
          )}
        </div>
        <div className="container-fluid">
          <button
            className={`navbar-toggler bg-light ${styles["toggle"]}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`offcanvas offcanvas-end ${styles["menu_toggle"]}`}
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className={`offcanvas-title ${styles["title_toggle"]}`}
                id="offcanvasDarkNavbarLabel"
              >
                Navegation
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className={"offcanvas-body" + styles.buttons}>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <div className={styles.info}>
                  {!isAuthenticated ? (
                    <div>
                      <li className="nav-item">
                        <Link to="/register" className={styles.link}>
                          <h1 className={styles.sign}>Sign in</h1>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/login" className={styles.link}>
                          <h1 className={styles.login}>Login</h1>
                        </Link>
                      </li>
                    </div>
                  ) : (
                    <div className={styles.containerLogOut}>
                      <li className="nav-item">
                        <Link to="/" className={styles.link}>
                          <h1
                            className={styles.logOut}
                            href="#!"
                            onClick={() => dispatch(logout())}
                          >
                            Log out
                          </h1>
                        </Link>
                      </li>
                    </div>
                  )}
                </div>
                {loggin ? (
                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle ${styles["buttonSections"]}`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        backgroundColor: "white",
                        width: "25%",
                        padding: "7px",
                        marginRight: "5px",
                        marginTop: "5px",
                        color: "black",
                        borderRadius: "10px",
                        ":hover": {
                          backgroundColor: "#23E871",
                          color: "white",
                        },
                      }}
                    >
                      SECTIONS
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li className="nav-item">
                        <Link to="/home" className="dropdown-item">
                          <h1>Home</h1>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/news" className="dropdown-item">
                          <h1>Notices</h1>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/communities" className="dropdown-item">
                          <h1>Community</h1>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/Q&A" className="dropdown-item">
                          <h1>Question & Answer</h1>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/instructor" className="dropdown-item">
                          <h1>Instructor</h1>
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <p className={styles.log}>Go to log!</p>
                )}
              </ul>
            </div>
            {user ? (
              <Link to="/profile" className={styles.profileLink}>
                <div className={styles.card}>
                  <div className={styles.profileImage}>
                    {extra && extra.user_image ? (
                      <img src={extra.user_image} alt="" />
                    ) : (
                      <img src={imagen} alt="" />
                    )}
                    <div className={styles.textContainer}>
                      <h2 className={styles.name}>
                        {user && user.first_name ? (
                          user.first_name
                        ) : (
                          <p>loading...</p>
                        )}{" "}
                        {user && user.last_name ? (
                          user.last_name
                        ) : (
                          <p>loading...</p>
                        )}
                      </h2>
                      <ul className={styles.profile}>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>PostgresSQL</li>
                      </ul>
                    </div>
                  </div>
                </div>


              </Link>
            ) : (
              <p>log in to see your profile!</p>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
