import MenuButton from "@/components/Buttons/MenuButton";
import { routeNamesArray, RouteNamesEnum, routeTitles } from "@/data/route";
import { motion } from "framer-motion";
import styles from "./DesktopMenu.module.css";

const DesktopMenu = ({
  isDark,
  contactUsOnClick,
}: {
  isDark: boolean;
  contactUsOnClick: () => void;
}) => {
  const linkAnimationProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  return (
    <div className={styles["links-container"]}>
      {routeNamesArray.map((r) =>
        r === RouteNamesEnum.CONTACTS ? (
          <MenuButton
            key={r}
            isDark={isDark}
            text={routeTitles[r]}
            onClick={contactUsOnClick}
          />
        ) : (
          <motion.a key={r} {...linkAnimationProps} href={r}>
            {routeTitles[r]}
          </motion.a>
        )
      )}
    </div>
  );
};

export default DesktopMenu;
