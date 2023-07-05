import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.ConteinerDiv}>
      <div className={styles.ConteinerDiv2}>
        <h1 className={styles.ConteinerTitle}>About the
          <span className={styles.application}>application</span></h1>
        <h1 className={styles.ConteinerTitle}>
          Join the CodeCommunity community and discover a world of opportunities for your growth as a developer.sConnect with experienced programmers, find inspiring mentors, share your projects and challenges, and access valuable educational resources.
          Become part of our ever-evolving community and take your development skills to the next level!
          Sign up now and start building meaningful connections in the exciting world of programming.
        </h1>
      </div>
    </div>
  );
};
export default About;