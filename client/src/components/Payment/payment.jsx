import React from "react";
import { FRONT_URL } from "../../config/index";
import styles from "./payment.module.css";
// import { GET_USER_EXTRA } from "../Redux/action-types";

const ProductDisplay = () => (
  <section className={styles.container}>
    <div className={styles.product}>
      <div className={styles.description}>
        <h5>$5.00</h5>
      </div>
    </div>
    <form action={`${FRONT_URL}/stripe/create-checkout-session`} method="POST">
      <button type="submit" className={styles.button}>
        PREMIUM
      </button>
    </form>
  </section>
);

export { ProductDisplay };
