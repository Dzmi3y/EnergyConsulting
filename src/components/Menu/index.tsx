"use client";
import React from "react";
import styles from "./Menu.module.css";
import { motion, SVGMotionProps } from "framer-motion";
import MenuButton from "../Buttons/MenuButton";

const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--white)"
    strokeLinecap="round"
    {...props}
  />
);

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
        <button className={styles["menu-button"]}>
          <svg width="48" height="48" viewBox="0 0 48 48">
            <Path
              d="M 15 16 L 33 16"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />

            <Path
              d="M 15 23.2 L 33 23.2"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              d="M 15 30.4 L 33 30.4"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Menu;
