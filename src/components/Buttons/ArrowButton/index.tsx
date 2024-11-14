"use client";

import { motion } from "framer-motion";
import styles from "./ArrowButton.module.css";
import { useRouter } from "next/navigation";
import { RouteNamesEnum } from "@/data/route";

type Props = {
  text: string;
  clickHandler: () => void;
};

const ArrowButton = ({ text, clickHandler }: Props) => {
  const animationProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };
  return (
    <motion.button
      className={`${styles.button}`}
      {...animationProps}
      onClick={clickHandler}
    >
      <div className="flex flex-row gap-1 justify-center items-center">
        {text}
        <img
          className="w-[14] h-[12]"
          src="/images/home/arrow.png"
          alt="arrow"
        ></img>
      </div>
    </motion.button>
  );
};

export default ArrowButton;
