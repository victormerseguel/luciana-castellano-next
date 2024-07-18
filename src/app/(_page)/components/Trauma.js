"use client";

import { trauma_db } from "@/app/(_page)/databases/trauma_db";
import InsertTexts from "./InsertTexts";
import Title from "./Title";
import styles from "./Trauma.module.css";
import { useContext, useRef } from "react";
import { Context } from "@/app/(_page)/hooks/Context";
import Observer from "@/app/(_page)/hooks/Observer";
import Image from "next/image";

const Trauma = () => {
  const { traumaVisible, setTraumaVisible } = useContext(Context);
  const traumaRef = useRef(null);

  return (
    <section className={styles.trauma} ref={traumaRef} id="trauma">
      <Image
        src={"/assets/trauma-bg.jpg"}
        alt="background"
        className="bg"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "left" }}
      />
      <Observer
        state={traumaVisible}
        setState={setTraumaVisible}
        ref={traumaRef}
      />
      <div className={styles.trauma_content}>
        <div className={styles.trauma_left}>
          <div>
            <Image
              src="/assets/trauma-image.jpg"
              alt="Flor de Lótus"
              fill
              sizes="300px"
            />
          </div>
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
