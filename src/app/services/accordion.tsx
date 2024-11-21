import React from "react";
import styles from "./services.module.css";
import Image from "next/image";

type Props = {
  summary: string;
  name: string;
  children: React.ReactNode;
};

const Accordion = ({ summary, name, children }: Props) => {
  return (
    <div className={styles.accordion}>
      <details className={styles["accordion-details"]} name={name}>
        <summary className={styles["accordion-summary"]}>
          <h2>{summary}</h2>
          <Image
            className={styles.arrowImage}
            src="/images/services/arrow.png"
            alt="arrow"
            width="30"
            height="30"
          />
        </summary>
      </details>
      <div className={styles["accordion-content"]}>
        <div className={styles["accordion-content-body"]}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
