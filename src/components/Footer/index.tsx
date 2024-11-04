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
        <div className="flex justify-between mb-10">
          <div className="flex justify-between gap-40">
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
          <div>
            <img src="/images/footer.png" alt="" />
          </div>
        </div>
        <div>Oakland -Energy Consulting ©</div>
      </div>
    </footer>
  );
};

export default Footer;
