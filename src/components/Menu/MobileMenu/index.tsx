import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "@/hooks/use-dimensions";
import { Navigation } from "./Navigation";
import MobileMenuButton from "@/components/Buttons/MobileMenuButton";
import styles from "./MobileMenu.module.css";

const sidebar = {
  open: (height = 480) => ({
    clipPath: `circle(${height}px at 20px 20px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 480px  20px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
};

const MobileMenu = ({ contactUsOnClick }: { contactUsOnClick: () => void }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.nav className={styles.nav}>
        <MobileMenuButton toggle={() => toggleOpen()} />
        <motion.div className={styles.background} variants={sidebar} />
        <Navigation contactUsOnClick={contactUsOnClick} />
      </motion.nav>
    </motion.div>
  );
};

export default MobileMenu;
