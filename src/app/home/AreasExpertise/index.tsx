import React from "react";
import styles from "./AreasExpertise.module.css";
import Image from "next/image";

const AreasExpertise = () => {
  return (
    <div>
      <h2 className={`global-margins ${styles.title}`}>Areas of Expertise</h2>
      <p className={`global-margins ${styles.description}`}>
        Whether for small or large-scale projects, we are committed to
        delivering cutting-edge results,contributing to a more sustainable and
        innovative energy future.
      </p>
      <div className={styles["scroll-container"]}>
        <div className={`global-margins flex gap-7 w-[1600]`}>
          <Image
            aria-hidden
            className="flex-none lg:flex-1"
            src="/images/home/expertise_image_1.png"
            alt="expertise_image_1.png"
            width="313"
            height="375"
          />
          <Image
            aria-hidden
            className="flex-none lg:flex-1"
            src="/images/home/expertise_image_2.png"
            alt="expertise_image_2.png"
            width="313"
            height="375"
          />
          <Image
            aria-hidden
            className="flex-none lg:flex-1"
            src="/images/home/expertise_image_3.png"
            alt="expertise_image_3.png"
            width="313"
            height="375"
          />
          <Image
            aria-hidden
            className="flex-none lg:flex-1"
            src="/images/home/expertise_image_4.png"
            alt="expertise_image_4.png"
            width="313"
            height="375"
          />
        </div>
      </div>
      <p className={`global-margins ${styles.description}`}>
        Leading the market for two decades, we have been experts in energy
        efficiency. With an unwavering commitment to innovation, we offer
        tailored solutions for projects of all sizes. From LED lighting to
        photovoltaic energy and electric mobility, our dedicated team works
        tirelessly to deliver cutting-edge results. We are committed to shaping
        a more sustainable and efficient energy future.
      </p>
    </div>
  );
};

export default AreasExpertise;
