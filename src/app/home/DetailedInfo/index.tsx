import styles from "./DetailedInfo.module.css";
import Image from "next/image";
import LearnMoreButton from "./LearnMoreButton";

const DetailedInfo = () => {
  return (
    <div className="relative pt-[40] min-h-[600] flex flex-col">
      <div className={styles.container}>
        <div className="global-margins">
          <Image
            aria-hidden
            className={`global-left-margins ${styles.image}`}
            src="/images/home/detail_info.png"
            alt="detail_info.png"
            width="380"
            height="573"
          />
          <div className="flex justify-start lg:justify-end">
            <div className={styles["info-container"]}>
              <h2 className={styles.title}>Deep knowledge in the field</h2>
              <p className={styles.description}>
                Our extensive experience and deep expertise in the energy sector
                have positioned us as leaders in the industry. With two decades
                of market leadership, we have honed our knowledge in energy
                efficiency, LED lighting, photovoltaic energy, and electric
                mobility to a level that sets us apart. Our team's profound
                understanding of these domains enables us to provide innovative,
                tailored solutions that not only meet but exceed the
                expectations of our clients.
              </p>
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedInfo;
