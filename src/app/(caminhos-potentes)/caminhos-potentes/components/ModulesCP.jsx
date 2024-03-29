"use client";
import styles from "./ModulesCP.module.css";

import { useState } from "react";
import Image from "next/image";

const card1 = "/assets/caminhospotentes/cp_modulecard1a.jpg";
const card2 = "/assets/caminhospotentes/cp_modulecard2a.jpg";
const card3 = "/assets/caminhospotentes/cp_modulecard3a.jpg";
const card4 = "/assets/caminhospotentes/cp_modulecard4a.jpg";
const card5 = "/assets/caminhospotentes/cp_modulecard5a.jpg";
const card6 = "/assets/caminhospotentes/cp_modulecard6a.jpg";
const card1b = "/assets/caminhospotentes/cp_modulecard1b.jpg";
const card2b = "/assets/caminhospotentes/cp_modulecard2b.jpg";
const card3b = "/assets/caminhospotentes/cp_modulecard3b.jpg";
const card4b = "/assets/caminhospotentes/cp_modulecard4b.jpg";
const card5b = "/assets/caminhospotentes/cp_modulecard5b.jpg";
const card6b = "/assets/caminhospotentes/cp_modulecard6b.jpg";
const paperbg = "/assets/caminhospotentes/cp_paperbg.png";

function ModulesCP() {
  const [viewCard1, setViewCard1] = useState(false);

  const card = [
    {
      imga: card1,
      imgb: card1b,
      alt: "Módulo 1 - Lupa Mágica",
      id: "card1",
    },
    {
      imga: card2,
      imgb: card2b,
      alt: "Módulo 2 - CME: Corpo",
      id: "card2",
    },
    {
      imga: card3,
      imgb: card3b,
      alt: "Módulo 3 - CME: Mente",
      id: "card3",
    },
    {
      imga: card4,
      imgb: card4b,
      alt: "Módulo 4 - CME: Emoções",
      id: "card4",
    },
    {
      imga: card5,
      imgb: card5b,
      alt: "Módulo 5 - Eu Único",
      id: "card5",
    },
    {
      imga: card6,
      imgb: card6b,
      alt: "Módulo 6 - Meu Melhor Amigo",
      id: "card6",
    },
  ];

  const handleClickCard = (e) => {
    if (e.target.style.opacity === "1") {
      card.map((c) => {
        document.getElementById(c.id).style.opacity = "1";
      });
      e.target.style.opacity = "0";
    } else {
      e.target.style.opacity = "1";
    }
  };

  return (
    <div className={styles.ModulesContainer}>
      <Image
        src="/assets/background3.jpg"
        alt="background"
        fill
        className="background"
      />
      <div className={styles.ModuleTitle}>
        <h2>Veja os 6 módulos exclusivos para as crianças:</h2>
      </div>
      <p className={styles.modulesSubtite}>
        clique nas imagens para saber mais
      </p>
      <div className={styles.CardsContainers}>
        {card.map((item) => (
          <div className={styles.cardContainter} key={item.id}>
            <Image
              className={styles.Cards2}
              src={item.imgb}
              alt={item.alt}
              width={240}
              height={359}
            />
            <Image
              id={item.id}
              className={styles.Cards}
              src={item.imga}
              alt={item.alt}
              onClick={handleClickCard}
              style={{ opacity: "1" }}
              width={240}
              height={359}
            />
          </div>
        ))}
      </div>
      <div className={styles.ModulesPaperBg}>
        <img src={paperbg} alt="Papel Rasgado" />

        <div className={styles.ModulesText}>
          <h3>Tudo isso é acompanhado de muita:</h3>
          <ul>
            <li>Atividade Prática;</li>
            <li>Práticas de Yoga;</li>
            <li>Meditações;</li>
            <li>Ferramentas de Arteterapia;</li>
            <li>
              Exercícios respiratórios e outros recursos para autorregulação;
            </li>
            <li>Material de apoio.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ModulesCP;
