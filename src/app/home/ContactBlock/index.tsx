import React from "react";
import ContactUsButton from "./ContactUsButton";
import styles from "./ContactBlock.module.css";

const ContactBlock = () => {
  return (
    <div className={`global-margins ${styles["info-container"]}`}>
      <h2 className={styles.title}>Get in touch with us</h2>
      <p className={styles.description}>
        If you're ready to explore how our expertise in energy efficiency, LED
        lighting, photovoltaic energy, and electric mobility can benefit your
        projects, don't hesitate to reach out. We're here to listen,
        collaborate, and provide you with tailored solutions that align with
        your specific needs and goals.
      </p>
      <ContactUsButton />
    </div>
  );
};

export default ContactBlock;
