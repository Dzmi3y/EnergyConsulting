"use client";
import { routeNamesArray, routeTitles } from "@/data/route";
import { motion } from "framer-motion";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const linkAnimationProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };
  return (
    <footer className={styles.container}>
      <div className="mx-5 sm:mx-10 lg:mx-32">
        <div className="flex justify-between mb-10  flex-col gap-12 sm:gap-0 sm:flex-row">
          <div className="flex justify-between flex-col items-start sm:flex-row gap-12  sm:gap-10 md:gap-14 lg:gap-24">
            <div className={styles.columnContainer}>
              <div className={styles.title}>Pages</div>
              {routeNamesArray.map((r) => (
                <motion.a key={r} {...linkAnimationProps} href={r}>
                  {routeTitles[r]}
                </motion.a>
              ))}
            </div>
            <div className={styles.columnContainer}>
              <div className={styles.title}>Social Media</div>
              <motion.a {...linkAnimationProps} href="">
                Facebook
              </motion.a>
              <motion.a {...linkAnimationProps} href="">
                Linkedin
              </motion.a>
            </div>
            <div className={styles.columnContainer}>
              <div className={styles.title}>Legal</div>
              <motion.a {...linkAnimationProps} href="">
                Privacy and Cookies Policy
              </motion.a>
              <motion.a {...linkAnimationProps} href="">
                Termos e Condições
              </motion.a>
            </div>
          </div>
          <div className="flex justify-center sm:block">
            <img src="/images/footer.png" alt="" />
          </div>
        </div>
        <div className="text-center sm:text-left ">
          Oakland -Energy Consulting ©
        </div>
      </div>
    </footer>
  );
};

export default Footer;
