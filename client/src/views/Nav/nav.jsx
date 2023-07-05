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
  const languages = useSelector((state) => state.community.languages.data);

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
            <div className={`offcanvas-header ${styles["header"]}`}>
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
                      </div>
                    </div>
                    {/* {extra && extra.premium !== undefined ? (
                      <div className={styles.premiumLabel}>
                        <p>PREMIUM</p>
                      </div>
                    ) : null} */}
                  </div>
                </Link>
              ) : (
                <p>log in to see your profile!</p>
              )}
              <button
                type="button"
                className="btn-close btn-close-dark bg-dark mb-5"
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                              style={{ width: "50px", height: "30px" }}>
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-9h-2V7h-2v4H9l3 3 3-3z" />
                            </svg>

                          </h1>
                        </Link>
                      </li>
                    </div>
                  )}
                </div>
                {loggin ? (
                  <ul className="list-unstyled mt-5">
                    <li className="nav-item">
                      <Link
                        to="/home"
                        className={styles.sectionLink}
                      >

                        <lord-icon
                          src="https://cdn.lordicon.com/osuxyevn.json"
                          trigger="hover"
                          colors="primary:#FFFFFF"
                          style={{ width: "35px", height: "35px" }}>
                        </lord-icon>
                        <span className={styles.button_text}>Home</span>

                      </Link>
                    </li>


                    <li className="nav-item">
                      {extra && extra.premium !== undefined ? (
                        <Link
                          to="/communities"
                          className={styles.sectionLink}
                        >

                          <lord-icon
                            src="https://cdn.lordicon.com/bhfjfgqz.json"
                            trigger="hover"
                            colors="primary:#FFFFFF"
                            style={{ width: "35px", height: "35px" }}>
                          </lord-icon>
                          <span className={styles.button_text}>Communities</span>

                        </Link>
                      ) : null}
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/Q&A"
                        className={styles.sectionLink}
                      >

                        <lord-icon
                          src="https://cdn.lordicon.com/amascaoj.json"
                          trigger="hover"
                          colors="primary:#FFFFFF"
                          style={{ width: "35px", height: "35px" }}>
                        </lord-icon>
                        <span className={styles.button_text}>Question & Answer</span>

                      </Link>
                    </li>

                    <li className="nav-item">

                      <Link
                        to="/instructor"
                        className={styles.sectionLink}
                      >

                        <lord-icon
                          src="https://cdn.lordicon.com/wluyqhxh.json"
                          trigger="hover"
                          colors="primary:#FFFFFF"
                          style={{ width: "35px", height: "35px" }}>
                        </lord-icon>
                        <span className={styles.button_text}>Instructor</span>

                      </Link>

                      <li className="nav-item">
                        {localStorage.getItem("admin") !== undefined ?

                          (<Link
                            to="/admin"
                            className={styles.sectionLink}
                          >

                            <lord-icon
                              src="https://cdn.lordicon.com/icxqolmx.json"
                              trigger="hover"
                              colors="primary:#FFFFFF"
                              style={{ width: "35px", height: "35px" }}>
                            </lord-icon>
                            <span className={styles.button_text}>Admin</span>

                          </Link>) : null

                        }

                      </li>
                      <li>
                        {extra && extra.premium !== undefined ? (
                          <Link
                            to="/education"
                            className={styles.sectionLink}
                          >

                            <lord-icon
                              src="https://cdn.lordicon.com/kipaqhoz.json"
                              trigger="hover"
                              colors="primary:#FFFFFF"
                              style={{ width: "35px", height: "35px" }}>
                            </lord-icon>
                            <span className={styles.button_text}>Students</span>

                          </Link>

                        ) : null}
                      </li>
                    </li>


                  </ul>
                ) : (
                  <p className={styles.log}>Go to log!</p>
                )}
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
