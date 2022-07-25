import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.hero}>
        <h2 className={styles.title}>Data Visualization!</h2>
        <div className={styles.paragraph}>
          Wind Turbines with higher power ratings are desired to reduce
          construction cost and maintenance time and increase energy yields.
          <br />
          <br />
          Wind resource estimation is important to determine the feasibility of
          a wind turbine/ wind farm. The most accurate method for finding out
          the power that will be generated is by using the recorded data on site
          on hourly basis for a period of a year.
        </div>
      </div>
    </div>
  );
};

export default About;
