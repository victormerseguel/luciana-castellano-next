"use client";
import styles from "./About.module.css";

import { about_db } from "@/databases/about_db";
import { useContext, useRef } from "react";

import Observer from "@/hooks/Observer";
import Title from "./Title";
import InsertTexts from "./InsertTexts";
import { Context } from "@/hooks/Context";

const About = () => {
  const aboutRef = useRef();
  const { aboutVisible, setAboutVisible } = useContext(Context);

  return (
    <section className={styles.about} ref={aboutRef} id="about">
      <Observer
        state={aboutVisible}
        setState={setAboutVisible}
        ref={aboutRef}
      />
      ;
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
