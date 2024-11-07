import React from "react";
import Image from "next/image";
import styles from "./MainInfo.module.css";
import ViewPortfolioButton from "@/components/Buttons/ViewPortfolioButton";

const MainInfo = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles["info-container"]} global-left-margins`}>
        <h1 className={styles.title}>
          Redefining <br /> Energy
        </h1>
        <div className={styles.description}>
          As market leaders for 20 years, we are experts in energy efficiency,
          providing tailored, concrete solutions to meet your needs.
        </div>
        <ViewPortfolioButton text="View our Portfolio" />
      </div>
      <div className="max-h-[507px] overflow-hidden lg:max-h-none">
        <Image
          aria-hidden
          className="w-screen  object-cover h-[507px] lg:h-auto lg:max-w-xl xl:max-w-xl 2xl:max-w-2xl hidden md:block"
          src="/images/home/flashlight.png"
          alt="Flashlight image"
          width="756"
          height="982"
        />
        <Image
          aria-hidden
          className="w-screen object-cover h-[507px] display md:hidden"
          src="/images/home/flashlight_mobile.png"
          alt="Flashlight image"
          width="390"
          height="507"
        />
      </div>
    </div>
  );
};

export default MainInfo;
