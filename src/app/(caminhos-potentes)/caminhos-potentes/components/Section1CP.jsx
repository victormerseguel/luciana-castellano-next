import React from "react";
import styles from "./Section1CP.module.css";
import Image from "next/image";

const collage = "/assets/caminhospotentes/cp_collage1.png";
const checkbox = "/assets/caminhospotentes/cp_checkbox.png";

function Section1CP() {
  const list = [
    { ponto: "mais Autonomia;" },
    { ponto: "Inteligência emocional;" },
    { ponto: "mais Segurança;" },
    { ponto: "Relações Saudáveis;" },
    { ponto: "mais Resiliência;" },
    { ponto: "mais Empatia;" },
    { ponto: "mais Motivação;" },
    { ponto: "menos Ansiedade;" },
    { ponto: "mais Alegria;" },
  ];
  return (
    <div className={styles.section1Container}>
      <Image
        src="/assets/caminhospotentes/cp_paperbg2.png"
        alt="background"
        fill
        className="background"
      />
      <div className={styles.Grid}>
        <div>
          <Image
            src={collage}
            alt="Luh Castellano - Colagem"
            width={350}
            height={350 * 1.04}
            className={styles.collage}
          />
        </div>
        <div className={styles.Bullets1}>
          <h2>
            É hora de proporcionar para a sua
            <br />
            criança uma vida com:
          </h2>
          <ul>
            {list.map((item) => (
              <li key={item.ponto}>
                <Image src={checkbox} alt="Check" width={30} height={20} />
                {item.ponto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section1CP;
