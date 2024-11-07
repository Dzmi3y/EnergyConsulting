"use client";

import { motion } from "framer-motion";
import styles from "./ViewPortfolioButton.module.css";
import { useRouter } from "next/navigation";
import { RouteNamesEnum } from "@/data/route";

type Props = {
  text: string;
};

const ViewPortfolioButton = ({ text }: Props) => {
  const animationProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };
  const router = useRouter();

  const clickHandler = () => {
    router.push(RouteNamesEnum.PORTFOLIO);
  };

  return (
    <motion.button
      className={`w-40 h-14 rounded-full ${styles.button}`}
      {...animationProps}
      onClick={clickHandler}
    >
      {text}
    </motion.button>
  );
};

export default ViewPortfolioButton;
