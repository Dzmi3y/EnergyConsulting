import styles from "./about.module.css";
import Menu from "@/components/Menu";

const About = () => {
  return (
    <div className={styles.test}>
      <Menu isDark />
      <div>About us</div>
    </div>
  );
};

export default About;
