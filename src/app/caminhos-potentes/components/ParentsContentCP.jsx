import React from "react";
import styles from "./ParentsContentCP.module.css";
import Image from "next/image";

const fase0Card = "/assets/caminhospotentes/cp_cardparents.jpg";

function ParentsContentCP() {
  return (
    <div className={styles.parentsContainer}>
      <Image
        src={"/assets/caminhospotentes/cp_background5.jpg"}
        alt="background"
        fill
        className="background"
        sizes="100vw"
      />
      <div className={styles.parentsContent}>
        <div className={styles.parentsTitle}>
          <h2>E para os Pais?</h2>
        </div>
        <h3>
          O processo de desenvolvimento de uma criança depende da conexão e do
          apoio que os pais ou cuidadores podem oferecer.
        </h3>
        <div className={styles.parentsGrid}>
          <div className={styles.parentsGridLeft}>
            <h4>Mas quem apoia os pais?</h4>
            <p>
              Pensando nisso, temos a Fase 0. Um módulo com conteúdo exclusivo
              onde você encontra orientações e apoio, para assim, poder dar um
              suporte de qualidade para sua criança ao longo de toda Jornada. Um
              passo a passo para que vocês aproveitem toda a experiência da
              melhor maneira possível estreitando e fortalecendo vínculos. Além
              de proporcionar o contato com seu próprio processo de
              autoconhecimento.
            </p>
          </div>
          <Image
            className={styles.parentsGridRight}
            src={fase0Card}
            alt="Módulo 0 - Para os pais"
            width={207}
            height={310}
          />
        </div>
      </div>
    </div>
  );
}

export default ParentsContentCP;
