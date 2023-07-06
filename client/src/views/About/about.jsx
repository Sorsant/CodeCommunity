import React, { useState, useEffect } from 'react';
import styles from "./About.module.css";

const About = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const textToType = "Join the CodeCommunity community and discover a world of opportunities for your growth as a developer. Connect with experienced programmers, find inspiring mentors, share your projects and challenges, and access valuable educational resources. Become part of our ever-evolving community and take your development skills to the next level! Sign up now and start building meaningful connections in the exciting world of programming.";

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + textToType[currentIndex]);
      currentIndex++;

      if (currentIndex === textToType.length) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.ConteinerDiv}>
      <div className={styles.ConteinerDiv2}>
        <h1 className={styles.ConteinerTitle}>
          About the <span className={styles.application}> Application</span>
        </h1>
        <h1 className={styles.ConteinerTitle}>{text}</h1>
      </div>
    </div>
  );
};

export default About;