"use client";
import Image from "next/image";
import styles from "./Header.module.css";

import Navbar from "./Navbar";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "@/hooks/Context";
import Observer from "@/hooks/Observer";

const sentences = [
  "a sua / alma",
  "o seu / corpo",
  "a sua / mente",
  "a sua / essência",
  "o seu / poder",
];

export default function Header() {
  const { homeVisible, setHomeVisible } = useContext(Context);
  const homeRef = useRef(null);
  const [countSentence, setCountSentence] = useState(0);

  const changeSentence = () => {
    console.log(countSentence);
    countSentence === sentences.length - 1
      ? setCountSentence(0)
      : setCountSentence(countSentence + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSentence();
    }, 2500);
    return () => clearInterval(interval);
  }, [countSentence]);

  return (
    <header className={styles.header} ref={homeRef} id="home">
      <Observer state={homeVisible} setState={setHomeVisible} ref={homeRef} />
      <Image
        src="/assets/header-bg.jpg"
        alt="Luciana Castellano"
        fill
        style={{ objectPosition: "center" }}
        className="bg"
        quality={85}
        priority
      />
      <Navbar />
      <div className={styles.header_wrap}>
        <div className={styles.header_content}>
          <div className={styles.header_left}>
            <h1>
              Terapias Integrativas
              <br />
              Trauma Informed
            </h1>
            <p>Reconecte-se</p>
            <p>
              Com{" "}
              <span id="change_1">
                {sentences[countSentence].split(" / ")[0]}
              </span>
            </p>
            <p id="change_2">{sentences[countSentence].split(" / ")[1]}.</p>
          </div>
          <div className={styles.header_center}>
            <Image
              src="/assets/photo-luciana1.jpg"
              alt="Luciana Castellano"
              fill
              quality={90}
            />
          </div>
          <div className={styles.header_right}>
            <Image
              src="/assets/bg-watercolorright.png"
              alt="Watercolor background"
              fill
              quality={90}
            />
            <p>
              “PODEMOS NÃO SER RESPONSÁVEIS PELO MUNDO QUE CRIOU NOSSAS MENTES,
              MAS PODEMOS ASSUMIR A RESPONSABILIDADE PELA MENTE COM A QUAL
              CRIAMOS NOSSO MUNDO.”
            </p>
            <p>gabor mate</p>
          </div>
        </div>
      </div>
    </header>
  );
}
