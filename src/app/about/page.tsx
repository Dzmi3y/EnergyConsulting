import Menu from "@/components/Menu";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <Menu isDark />
      <div className={styles.test}>
        <main className="global-margins"></main>
        <div>About us</div>
      </div>
    </>
  );
};

export default About;
