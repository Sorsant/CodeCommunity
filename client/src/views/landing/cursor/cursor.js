import { useEffect, useState } from "react";
import styles from "./cursor.css";
import { motion } from "framer-motion";

const Cursor = ({ scaling }) => {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCircles = () => {
      setlargecircle({ x: mouseX, y: mouseY });
      requestAnimationFrame(updateCircles);
    };
  
    const mousemove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
  
    let mouseX = 0;
    let mouseY = 0;
  
    window.addEventListener("mousemove", mousemove);
    requestAnimationFrame(updateCircles);
  
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div className={styles["landing-bg"]}>
      <motion.div
        animate={{
          x: largecircle.x,
          y: largecircle.y,
          transition: { type: "tween", duration: 0.3 },
        }}
        className="large_circle"
        style={{ scale: scaling ? 0.5 : 1 }}></motion.div>
    </div>
  );
};

export default Cursor;