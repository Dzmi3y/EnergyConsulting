import React from "react";
import Image from "next/image";
import styles from "./MainInfo.module.css";
import ViewPortfolioButton from "@/components/Buttons/ViewPortfolioButton";

const MainInfo = () => {
  return (
    <div className={`flex justify-between ${styles.container}`}>
      <div className="flex flex-col gap-10 mb-16 justify-end global-left-margins">
        <h1 className="text-6xl">
          Redefining <br /> Energy
        </h1>
        <div className="text-2xl max-w-screen-md">
          As market leaders for 20 years, we are experts in energy efficiency,
          providing tailored, concrete solutions to meet your needs.
        </div>
        <ViewPortfolioButton text="View our Portfolio" />
      </div>
      <Image
        aria-hidden
        className="h-screen"
        src="/images/home/flashlight.png"
        alt="Flashlight image"
        width="756"
        height="982"
      />
    </div>
  );
};

export default MainInfo;
