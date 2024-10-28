"use client";

import { motion } from "framer-motion";
import styles from "./MenuButton.module.css";

type Props = {
  isDark?: boolean;
  text: string;
  onClick?: () => void;
};

const MenuButton = ({ onClick, text, isDark = false }: Props) => {
  const animationProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };
  const buttonClass = `w-40 h-14 rounded-full ${
    isDark ? styles.dark : styles.light
  }`;

  return (
    <motion.button
      className={buttonClass}
      {...animationProps}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default MenuButton;
