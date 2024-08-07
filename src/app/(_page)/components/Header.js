"use client";
import Image from "next/image";
import styles from "./Header.module.css";

import Navbar from "./Navbar";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "@/app/(_page)/hooks/Context";
import Observer from "@/app/(_page)/hooks/Observer";

const sentences = [
  "a sua / alma",
  "a sua / mente",
  "a sua / essência",
  "o seu / corpo",
  "o seu / poder",
];

export default function Header() {
  const { homeVisible, setHomeVisible } = useContext(Context);
  const [countSentence, setCountSentence] = useState(0);
  const homeRef = useRef(null);

  const changeSentence = () => {
    countSentence === sentences.length - 1
      ? setCountSentence(0)
      : setCountSentence(countSentence + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSentence();
    }, 3000);
    return () => clearInterval(interval);
  }, [countSentence]);

  return (
    <header className={styles.header} ref={homeRef} id="home">
      <Observer state={homeVisible} setState={setHomeVisible} ref={homeRef} />
      <Image
        src="/assets/header-bg.jpg"
        alt="Luciana Castellano"
        fill
        sizes="100vw"
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
              Hatha Yoga | Yoga Restaurativa
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
              width={290}
              height={424}
              quality={90}
            />
          </div>
          <div className={styles.header_right}>
            <Image
              src="/assets/bg-watercolorright.png"
              alt="Watercolor background"
              fill
              sizes="(max-width: 562px) 100vw, 50vw"
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
