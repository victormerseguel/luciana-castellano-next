"use client";
import Image from "next/image";
import styles from "./TestimonyCP.module.css";
import { useState } from "react";

const testimonyCP1 = "/assets/caminhospotentes/cp_depoimento1.jpeg";
const testimonyCP2 = "/assets/caminhospotentes/cp_depoimento2.png";
const testimonyCP3 = "/assets/caminhospotentes/cp_depoimento3.jpeg";
const testimonyCP4 = "/assets/caminhospotentes/cp_depoimento1.jpeg";

function TestimonyCP() {
  const [imgSize, setImgSize] = useState(400);

  const handleSize = () => {
    window.innerWidth > 440
      ? imgSize === 400
        ? null
        : setImgSize(400)
      : setImgSize(+window.innerWidth * 0.9);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", handleSize);
  }

  return (
    <div className={styles.testimonyContainer}>
      <div className={styles.testimonyContent}>
        <Image
          src={testimonyCP1}
          alt="Depoimento Caminhos Potentes"
          width={imgSize}
          height={imgSize * 0.88}
          sizes="(max-width: 600px) 90vw"
        />
        <Image
          src={testimonyCP2}
          alt="Depoimento Caminhos Potentes"
          width={imgSize}
          height={imgSize * 1.78}
        />
        <Image
          src={testimonyCP3}
          alt="Depoimento Caminhos Potentes"
          width={imgSize}
          height={imgSize * 1.19}
        />
      </div>
    </div>
  );
}

export default TestimonyCP;
