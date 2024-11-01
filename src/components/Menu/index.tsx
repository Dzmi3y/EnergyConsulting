"use client";
import React from "react";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

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
      <div className={`hidden md:flex`}>
        <DesktopMenu isDark={isDark} contactUsOnClick={contactUsHandler} />
      </div>
      <div className={`flex md:hidden`}>
        <MobileMenu contactUsOnClick={contactUsHandler} />
      </div>
    </nav>
  );
};

export default Menu;
