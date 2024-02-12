import styles from "./About.module.css";

import InsertTexts from "./InsertTexts";
import Title from "./Title";
import { about_db } from "@/databases/about_db";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about_content}>
        <div className={styles.about_left}>
          <Title text="Sobre Mim" />
          <InsertTexts db={about_db} />
        </div>
        <div className={styles.about_right}>
          <img src="/assets/about-image.jpg" alt="Luciana Castellano" />
          <p>Luciana Castellano</p>
        </div>
      </div>
    </section>
  );
};

export default About;
