"use client";
import React from "react";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";
import MenuButton from "../Buttons/MenuButton";
import MobileMenu from "./MobileMenu";

const Menu = ({ isDark = false }: { isDark?: boolean }) => {
  const DARK_LOGO = "/images/logo_dark.png";
  const LIGHT_LOGO = "/images/logo_light.png";

  const linkAnimationProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };
  const contactUsHandler = () => {
    console.log("contactUsHandler");
  };

  return (
    <nav className={styles.container} data-theme={isDark ? "dark" : ""}>
      <div>
        <a href="/">
          <motion.img
            {...linkAnimationProps}
            src={isDark ? DARK_LOGO : LIGHT_LOGO}
            className="w-56 h-12 min-w-56 min-h-12"
            alt="logo"
          />
        </a>
      </div>
      <div className={`hidden md:flex   ${styles["links-container"]}`}>
        <motion.a {...linkAnimationProps} href="/about">
          About us
        </motion.a>
        <motion.a {...linkAnimationProps} href="/services">
          Services
        </motion.a>
        <motion.a {...linkAnimationProps} href="/portfolio">
          Portfolio
        </motion.a>
        <MenuButton
          isDark={isDark}
          text="Contact us"
          onClick={() => contactUsHandler()}
        />
      </div>
      <div className={`flex md:hidden`}>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Menu;
