import Menu from "@/components/Menu";
import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Menu />
      <main>
        <div className={styles["header-container"]}>
          <div className={`global-margins ${styles["width-restrictions"]}`}>
            <h1 className={`mb-[40] ${styles.title}`}>About us</h1>
            <p className="mb-[40]">
              Learn more about Oakland C.E. and our commitment to excellence,
              innovation, and sustainability.
            </p>
          </div>
        </div>
        <div className="global-margins mt-[40]">
          <h2>Innovation.</h2>
          <h2>Guiding our journey from the start.</h2>
          <div className={styles["image-container"]}>
            <div className={styles["image-description-container"]}>
              <div>Executive Board members</div>
              <div>Oakland. 2023</div>
            </div>
            <Image
              aria-hidden
              className={styles["meeting-image"]}
              src="/images/about/meeting.png"
              alt="Meeting"
              width="778"
              height="573"
            />
          </div>
          <p className={`mt-[20] mb-[40] ${styles["width-restrictions"]}`}>
            Innovation has been at the heart of our journey right from the
            beginning. At Oakland C.E., we believe that staying at the forefront
            of technology and sustainable practices is essential. We've
            consistently sought innovative solutions in energy efficiency, LED
            lighting, photovoltaic energy, and electric mobility to shape a
            brighter and greener future.
          </p>
          <p className={`mt-[40] mb-[40] ${styles["width-restrictions"]}`}>
            Our commitment to innovation drives us to continually explore new
            avenues, refine our processes, and deliver pioneering results for
            our clients. Join us in embracing innovation as we chart a course
            towards a more sustainable and efficient energy landscape.
          </p>
          <Image
            aria-hidden
            className="w-screen mt-[40] "
            src="/images/about/banner.png"
            alt="Banner"
            width="1312"
            height="528"
          />
          <div className={styles["text-container"]}>
            <div>
              <p className={`mt-[40] mb-[40] ${styles["width-restrictions"]}`}>
                From our company's inception, innovation has been ingrained in
                our DNA. It's not just a buzzword; it's the driving force behind
                everything we do. Our founders were visionaries who understood
                that to make a real impact in the energy sector, we needed to
                lead with innovation.
              </p>
              <p className={`mt-[40] mb-[40]  ${styles["width-restrictions"]}`}>
                This commitment to cutting-edge solutions has allowed us to
                consistently push the boundaries of what's possible in energy
                efficiency, LED lighting, photovoltaic energy, and electric
                mobility. We've fostered a culture that encourages creativity,
                embraces change, and thrives on challenges. As we continue to
                grow, our dedication to innovation remains unwavering, ensuring
                that we remain a trailblazer in the industry.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
