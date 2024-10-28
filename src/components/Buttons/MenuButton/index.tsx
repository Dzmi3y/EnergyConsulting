"use client";

import { color, motion } from "framer-motion";

type Props = {
  text: string;
  onClick?: () => void;
};

const MenuButton = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  const animationProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  return (
    <motion.button
      className="w-40 h-14 rounded-full "
      style={{ backgroundColor: "var(--accent100)", color: "var(--white)" }}
      {...animationProps}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default MenuButton;
