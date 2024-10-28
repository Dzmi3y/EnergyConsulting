"use client";
import React from "react";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";
import MenuButton from "../Buttons/MenuButton";

const Menu = ({ isDark = false }: { isDark?: boolean }) => {
  console.log(isDark);

  const linkAnimationProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };
  const contactUsHandler = () => {
    console.log("contactUsHandler");
  };

  return (
    <nav className={styles.container} data-theme={isDark ? "dark" : ""}>
      <div>logo``</div>
      <div className={styles["links-container"]}>
        <motion.a {...linkAnimationProps} href="/about">
          About us
        </motion.a>
        <motion.a {...linkAnimationProps} href="/services">
          Services
        </motion.a>
        <motion.a {...linkAnimationProps} href="/portfolio">
          Portfolio
        </motion.a>
        <MenuButton text="Contact us" onClick={() => contactUsHandler()} />
      </div>
    </nav>
  );
};

export default Menu;
