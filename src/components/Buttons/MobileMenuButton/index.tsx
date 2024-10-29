import { motion, SVGMotionProps } from "framer-motion";
import styles from "./MobileMenuButton.module.css";

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
const MobileMenuButton = ({ toggle }: { toggle: () => void }) => {
  return (
    <button className={styles["menu-button"]} onClick={toggle}>
      <svg width="48" height="48" viewBox="0 0 48 48">
        <Path
          variants={{
            closed: { d: "M 15 16 L 33 16" },
            open: { d: "M 17 30.4 L 31.5 16" },
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
          variants={{
            closed: { d: "M 15 30.4 L 33 30.4" },
            open: { d: "M 17 16 L 31.5 30.4" },
          }}
        />
      </svg>
    </button>
  );
};

export default MobileMenuButton;
