import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "./MobileMenu.module.css";
import { routeNamesArray, RouteNamesEnum, routeTitles } from "@/data/route";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({
  contactUsOnClick,
}: {
  contactUsOnClick: () => void;
}) => {
  const linkAnimationProps = {
    whileTap: { scale: 0.9 },
  };

  return (
    <motion.ul className={styles.ul} variants={variants}>
      {routeNamesArray.map((r) => (
        <MenuItem key={r}>
          {r === RouteNamesEnum.CONTACTS ? (
            <motion.button {...linkAnimationProps} onClick={contactUsOnClick}>
              {routeTitles[r]}
            </motion.button>
          ) : (
            <motion.a {...linkAnimationProps} href={r}>
              {routeTitles[r]}
            </motion.a>
          )}
        </MenuItem>
      ))}
    </motion.ul>
  );
};
