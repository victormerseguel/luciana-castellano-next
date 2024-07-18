"use client";
import styles from "./About.module.css";

import { about_db } from "@/app/(_page)/databases/about_db";
import { useContext, useRef } from "react";

import Observer from "@/app/(_page)/hooks/Observer";
import Title from "./Title";
import InsertTexts from "./InsertTexts";
import { Context } from "@/app/(_page)/hooks/Context";
import Image from "next/image";

const About = () => {
  const { aboutVisible, setAboutVisible } = useContext(Context);
  const aboutRef = useRef(null);

  return (
    <section className={styles.about} ref={aboutRef} id="about">
      <Image
        src={"/assets/about-bg.jpg"}
        fill
        sizes="100vw"
        alt="Background"
        className="bg"
        style={{ objectFit: "cover", objectPosition: "right" }}
      />
      <Observer
        state={aboutVisible}
        setState={setAboutVisible}
        ref={aboutRef}
      />
      <div className={styles.about_content}>
        <div className={styles.about_left}>
          <Title text="Sobre Mim" />
          <InsertTexts db={about_db[0]} />
          <a href="/caminhos-potentes">
            <InsertTexts db={about_db[1]} />
          </a>
          <InsertTexts db={about_db[2]} />
        </div>
        <div className={styles.about_right}>
          <div>
            <Image
              src="/assets/about-image.jpg"
              alt="Luciana Castellano"
              fill
              sizes="300px"
            />
          </div>
          {/* <img src="/assets/about-image.jpg" alt="Luciana Castellano" /> */}
          <p>Luciana Castellano</p>
        </div>
      </div>
    </section>
  );
};

export default About;
