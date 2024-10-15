import React from "react";
import styles from "./cstomer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const CustomerSection = () => {
  return (
    <section className={styles.CustomerSection}>
      <CustomContainer>
        <div>
          <h2>&quot;Your Next Big Customer</h2>
        </div>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <h2>
              Could Be <br />
              Waiting at <br />
              SIAWED!&quot;
            </h2>

            <Image src="/assets/images/vector.png" fluid alt="vector" />
          </div>
          <div className={styles.right}>
            <Image src="/assets/images/conference.png" fluid alt="conference" />
            <p>
              With over 300 entrepreneurs in SIAWED, networking and building
              valuable ​connections is guaranteed.
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default CustomerSection;
