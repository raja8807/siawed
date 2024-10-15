import React from "react";
import styles from "./design.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const DesignSection = () => {
  return (
    <section className={styles.DesignSection}>
      <CustomContainer noSmPadding>
        <div className={`${styles.sectionRow} ${styles.row1}`}>
          <div className={styles.img}>
            <Image
              src="/assets/images/two-smiling-female-colleagues.jpg"
              alt="two-smiling-female-colleagues"
              fluid
            />
          </div>
          <div className={styles.text}>
            <Image
              src="/assets/images/flower-vector.png"
              alt="flower-vector"
              className={styles.flower}
              width={190}
            />
            <div>
              <h2>SIAWED is dedicated</h2>

              <p>
                to enhancing the entrepreneurial skills and training of its
                members by offering a ​range of programs, courses, and
                collaborations with corporations and relevant ​entities. We
                provide hands-on, real-time training and exposure across various
                fields, ​ensuring our members are well-prepared to tackle any
                entrepreneurial challenge ​and achieve success.
              </p>

              <Image
                src="/assets/images/flower-vector.png"
                alt="flower-vector"
                className={`${styles.flower} ${styles.f2}`}
                width={190}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.sectionRow} ${styles.row2}`}>
          <div className={styles.text}>
            <div>
              <h2>Shaping the Future:</h2>
              <h3>
                The Impactful Role of Women in ​Business and Entrepreneurship
              </h3>
              <hr />
              <p>
                Women&apos;s entrepreneurship and leadership have the power to
                drive profound social ​change, empowering more women to become
                confident, financially independent, and ​influential in their
                communities. The era when women were confined to traditional
                roles is long behind us. As we step ​into this promising new
                decade, a bright future lies ahead, particularly for aspiring
                ​women entrepreneurs in India. The momentum for change is
                building steadily and ​unmistakably.
              </p>
              <p>
                Today, women in business are essential and irreplaceable
                contributors to the global ​quest for economic stability. This
                acknowledgment is equally strong in India, where ​women are
                emerging as powerful change-makers, representing the
                transformative ​influence they wield across various sectors.
              </p>
              <p>
                Women are recognized as pivotal forces in entrepreneurship,
                poised to continue ​leading change for years to come. Women
                entrepreneurs bring unique perspectives ​and innovative thought
                processes that significantly enhance the quality of solutions
                ​and outcomes. They come from diverse backgrounds, bringing a
                wealth of experiences ​that enrich decision-making. Through
                their creativity and ingenuity, they drive ​economic growth,
                foster innovation, and boost productivity. Moreover, they
                inspire ​other women and individuals to pursue entrepreneurship
                and establish supportive ​networks. The empowerment and
                development of women are crucial to cultivating a ​diverse and
                inclusive entrepreneurial ecosystem worldwide.
              </p>
            </div>
          </div>
          <div className={styles.img}>
            <Image
              src="/assets/images/women-vector.png"
              alt="two-smiling-female-colleagues"
              fluid
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default DesignSection;
