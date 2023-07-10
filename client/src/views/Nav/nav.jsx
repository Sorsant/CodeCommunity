import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/searchBar";
import styles from "./nav.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../components/Redux/user";
import imagen from "./default.png";

const Nav = ({ admin }) => {
  const loggin = useSelector((state) => state.home.login);
  const user = useSelector((state) => state.userdb.user);
  const extras = useSelector((state) => state.home.userExtra);
  const extra = extras.find((users) => users.id === (user && user.id));
  const isAuthenticated = useSelector((state) => state.userdb.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className={styles.containerNav}>
      <nav className={`navbar ${styles.navbar}`}>
        <div className={styles.navbarPrincipal}>
          <div className={styles.title}>
            <Link to="/home" className={styles.titleNav}>
              <h1>Code
                <br />
                <span>Community</span>
              </h1>
            </Link>
          </div>
          <SearchBar />
          <div className={styles.navButtonSidebar}>
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
          </div>
        </div>

        {/* Hasta aca la navbar */}
        <div
          className={`offcanvas offcanvas-end ${styles["menu_toggle"]}`}
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className={`offcanvas-header ${styles["header"]}`}>
            {user ? (
              <Link to="/profile" className={styles.profileLink}>
                <div className={styles.cardSidebar}>
                  <div className={styles.profileImageSidebar}>
                    {extra && extra.user_image ? (
                      <img src={extra.user_image} alt="" />
                    ) : (
                      <img src={imagen} alt="" />
                    )}
                  </div>
                  <div className={styles.textContainerSidebar}>
                    <h2 className={styles.nameSidebar}>
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
              </Link>
            ) : (
              <h3 className={styles.textLoginSidebar}>log in to see your profile!</h3>
            )}
          </div>
          <div className={"offcanvas-body" + styles.buttonsSidebar}>
            <ul className="navbar-nav">
              {!isAuthenticated && (
                <div className={styles.SidebarBtns}>
                  <li className="nav-item">
                    <Link to="/register" className={styles.linkSidebar}>
                      <h1 className={styles.signSidebar}>Sign in</h1>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/login" className={styles.linkSidebar}>
                      <h1 className={styles.loginSidebar}>Login</h1>
                    </Link>
                  </li>
                </div>
              )}
              {loggin ? (
                <div className={styles.SidebarBtns}>
                  <ul className={`list-unstyled ${styles["bodySidebar"]}`}>
                    <div className={styles.Sidebarwithlogout}>
                      <li className="nav-item">
                        <Link to="/home" className={styles.sectionLinkSidebar}>
                          <lord-icon
                            src="https://cdn.lordicon.com/osuxyevn.json"
                            trigger="hover"
                            colors="primary:#FFFFFF"
                            style={{ width: "35px", height: "35px" }}
                          ></lord-icon>
                          <span className={styles.buttonTextSidebar}>Home</span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        {extra && extra.premium !== false ? (
                          <Link
                            to="/communities"
                            className={styles.sectionLinkSidebar}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/bhfjfgqz.json"
                              trigger="hover"
                              colors="primary:#FFFFFF"
                              style={{ width: "35px", height: "35px" }}
                            ></lord-icon>
                            <span className={styles.buttonTextSidebar}>
                              Communities
                            </span>
                          </Link>
                        ) : null}
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/instructor"
                          className={styles.sectionLinkSidebar}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/wluyqhxh.json"
                            trigger="hover"
                            colors="primary:#FFFFFF"
                            style={{ width: "35px", height: "35px" }}
                          ></lord-icon>
                          <span className={styles.buttonTextSidebar}>
                            Instructor
                          </span>
                        </Link>

                        <li className="nav-item">
                          {admin ? (
                            <Link
                              to="/team"
                              className={styles.sectionLinkSidebar}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/icxqolmx.json"
                                trigger="hover"
                                colors="primary:#FFFFFF"
                                style={{ width: "35px", height: "35px" }}
                              ></lord-icon>
                              <span className={styles.buttonTextSidebar}>
                                Admin
                              </span>
                            </Link>
                          ) : null}
                        </li>

                        <li>
                          {extra && extra.premium !== false ? (
                            <Link
                              to="/education"
                              className={styles.sectionLinkSidebar}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/kipaqhoz.json"
                                trigger="hover"
                                colors="primary:#FFFFFF"
                                style={{ width: "35px", height: "35px" }}
                              ></lord-icon>
                              <span className={styles.buttonTextSidebar}>
                                Students
                              </span>
                            </Link>
                          ) : null}
                        </li>
                      </li>
                    </div>
                    <div className={styles.containerLogout}>
                      <li className="nav-item">
                        <Link to="/" className={styles.linkSidebar}>
                          <h1
                            className={styles.logout}
                            href="#!"
                            onClick={() => dispatch(logout())}
                          >
                            Log out
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              style={{ width: "50px", height: "30px" }}
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-9h-2V7h-2v4H9l3 3 3-3z" />
                            </svg>
                          </h1>
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              ) : (
                <p className={styles.log}>Go to log!</p>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
