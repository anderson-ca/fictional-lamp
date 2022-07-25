import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.hero}>
        <h2 className={styles.title}>Data Visualization!</h2>
        <div className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          sapiente ducimus corporis magnam? Modi natus praesentium perspiciatis
          sed ex aperiam placeat, dolores quasi cumque ducimus ab culpa
          consectetur porro voluptatum.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          debitis laboriosam. Magni, assumenda ab rem atque aspernatur dolores
          tempora magnam vitae alias et aut exercitationem dolore qui est cum
          perferendis!
        </div>
      </div>
    </div>
  );
};

export default About;
