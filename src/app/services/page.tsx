import Menu from "@/components/Menu";
import React from "react";
import styles from "./services.module.css";
import Accordion from "./accordion";
import Image from "next/image";
import ViewPortfolioButton from "./ViewPortfolioButton";

const Services = () => {
  return (
    <>
      <Menu isDark />
      <main>
        <div className={styles["header-container"]}>
          <div className={`global-margins ${styles["width-restrictions"]}`}>
            <h1 className={`mb-[40] ${styles.title}`}>Services</h1>
            <p className="mb-[40]">
              Discover our comprehensive range of services tailored to meet your
              energy efficiency, LED lighting, photovoltaic energy, and much
              more.
            </p>
          </div>
        </div>
        <div className="global-margins mt-[100]">
          <Accordion name="accordion" summary="Illumination">
            <p>Lorem ipsum dolor sit amet.</p>
          </Accordion>

          <Accordion name="accordion" summary="Sustainable Energy">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              nihil.
            </p>
          </Accordion>

          <Accordion name="accordion" summary="Electric Mobility">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit
              adipisci labore quidem ullam repellendus vero veritatis porro
              optio explicabo.
            </p>
          </Accordion>

          <Accordion name="accordion" summary="Consulting">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Accordion>
          <div className={styles["image-container"]}>
            <div className={styles["image-description-container"]}>
              <div>Sustainable energy consulting</div>
              <div>Portugal. 2023</div>
            </div>
            <Image
              aria-hidden
              className={styles["energy-image"]}
              src="/images/services/energy_image.png"
              alt="Energy image"
              width="778"
              height="573"
            />
          </div>
          <div className={`global-margins ${styles["info-container"]}`}>
            <h2 className={styles.subtitle}>Proudly helping businesses</h2>
            <p className={styles.description}>
              Explore our portfolio of remarkable projects where innovation and
              sustainability converge. Discover how we've transformed energy
              landscapes and elevated standards in the industry.
            </p>
            <ViewPortfolioButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
