"use client";
import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { RouteNamesEnum } from "@/data/route";

const Menu = () => {
  const DARK_LOGO = "/images/logo_dark.png";
  const LIGHT_LOGO = "/images/logo_light.png";
  const darkMenu: RouteNamesEnum[] = [RouteNamesEnum.ABOUT];
  const [isDark, setIsDark] = useState<boolean>(false);

  const linkAnimationProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };
  const contactUsHandler = () => {
    console.log("contactUsHandler");
  };
  useEffect(() => {
    const currentUrl = window.location.pathname;
    let pageUrl: RouteNamesEnum | undefined = darkMenu.find(
      (r) => r == currentUrl
    );
    console.log(pageUrl);
    setIsDark(!!pageUrl);
  }, []);

  return (
    <div className="mx-5 sm:mx-10 lg:mx-32">
      <nav className={`${styles.container}`} data-theme={isDark ? "dark" : ""}>
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
    </div>
  );
};

export default Menu;
