import { trauma_db } from "@/databases/trauma_db";
import InsertTexts from "./InsertTexts";
import Title from "./Title";
import styles from "./Trauma.module.css";

const Trauma = () => {
  return (
    <section className={styles.trauma}>
      <div className={styles.trauma_content}>
        <div className={styles.trauma_left}>
          <img
            src="/assets/trauma-image.jpg"
            alt="Trauma Informed - Luciana Castellano"
          />
        </div>
        <div className={styles.trauma_right}>
          <Title text="Trauma Informed" />
          <InsertTexts db={trauma_db} />
        </div>
      </div>
    </section>
  );
};

export default Trauma;
