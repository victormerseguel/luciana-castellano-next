"use client";

import {
  therapies_db,
  therapies_title,
} from "@/app/(_page)/databases/therapies_db";
import styles from "./Therapies.module.css";
import Title from "./Title";
import InsertTexts from "./InsertTexts";
import { useContext, useRef } from "react";
import { Context } from "@/app/(_page)/hooks/Context";
import Observer from "@/app/(_page)/hooks/Observer";

const Therapies = () => {
  const { therapiesVisible, setTherapiesVisible } = useContext(Context);
  const therapiesRef = useRef(null);
  return (
    <section className={styles.therapies} ref={therapiesRef} id="therapies">
      <Observer
        state={therapiesVisible}
        setState={setTherapiesVisible}
        ref={therapiesRef}
      />
      <div className={styles.therapies_content}>
        <div className={styles.therapies_left}>
          {/* <Title text={therapies_title} /> */}
          <div className={styles.therapies_text}>
            <InsertTexts db={therapies_db} />
          </div>
        </div>
        <div className={styles.therapies_right}>
          <img
            src="/assets/therapies-image.jpg"
            alt="Terapias - Luciana Castellano"
          />
        </div>
      </div>
    </section>
  );
};

export default Therapies;
