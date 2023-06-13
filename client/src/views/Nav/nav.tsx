import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Nav: React.FC = (): JSX.Element => {
  return (
    <div className={styles.containerNav}>
      <h1>Logo</h1>
      <div className={styles.divRegister}>
        <Link to="/Contact" className={styles.Contact}>
          <h1>Contact</h1>
        </Link>
        <button className={styles.SignIn}>
          <Link to="/register">
            <h1>Sign in</h1>
          </Link>
        </button>
        <button className={styles.LogIn}>
          <Link to="/Log in">
            <h1>Log in</h1>
          </Link>
        </button>
      </div>
      <button className={styles.home}>
        <Link to="/home">
          <h1>Home</h1>
        </Link>
      </button>
      <div className={styles.divNQP}>
        <Link to="/notices" className={styles.notices}>
          <h1>Notices</h1>
        </Link>

        <Link to="/Q&A" className={styles.QandA}>
          <h1>Q&A</h1>
        </Link>
        <Link to="/profile" className={styles.Profile}>
          <h1>Profile</h1>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
