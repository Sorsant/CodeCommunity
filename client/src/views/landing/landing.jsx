import { useState } from "react";
import Cursor from "./cursor/cursor";
import styles from "./landing.module.css";
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const [scaling, setscaling] = useState(false);

  return (
    <div className={styles["landing"]}>
      <Cursor scaling={scaling} />
      <section className={styles["section-land"]}>
        <Link to='/login'>
          <button
            className={styles["btn-landing"]}
            onMouseEnter={() => setscaling(true)}
            onMouseLeave={() => setscaling(false)}
          >
            CODECOMMUNITY
          </button>
        </Link>
      </section>
    </div>
  );
};
export default LandingPage;
