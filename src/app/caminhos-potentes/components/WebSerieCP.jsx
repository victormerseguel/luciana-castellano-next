import Image from "next/image";
import styles from "./WebSerieCP.module.css";

const ep1 = "/assets/caminhospotentes/cp_thumbep1.png";
const epThumbs = [
  "/assets/caminhospotentes/cp_thumbep2.jpg",
  "/assets/caminhospotentes/cp_thumbep3.jpg",
  "/assets/caminhospotentes/cp_thumbep4.jpg",
  "/assets/caminhospotentes/cp_thumbep5.jpg",
  "/assets/caminhospotentes/cp_thumbep6.jpg",
];
const play = "/assets/caminhospotentes/cp_play.png";

function WebSerieCP() {
  return (
    <div className={styles.webserieContainer}>
      <Image
        src={"/assets/caminhospotentes/cp_background6.jpg"}
        alt="background"
        fill
        className="background"
        sizes="100vw"
      />
      <div className={styles.webserieContent}>
        <div className={styles.webserieTitle}>
          <h2>Luz, câmera, ação!</h2>
        </div>
        <div className={styles.webserieGrid}>
          <div className={styles.oculto}>
            {/* <img src={ep1} alt="Capa do episódio 1" /> */}
            <Image src={ep1} alt="Capa do episódio 1" fill sizes="491px" />
          </div>
          <div className={styles.webserieGridLeft}>
            <h4>
              Original <b>Caminhos Potentes</b>
            </h4>
            <h3>Mafalda</h3>
            <div className={styles.webserieService}>
              <p>
                <span>97% relevante</span>
              </p>
              <p>2022</p>
              <p>1 Temporada</p>
              <div>
                <p>HD</p>
                <p>Stereo</p>
              </div>
            </div>
            <p className={styles.webserieDescription}>
              E para fechar, tem também{" "}
              <b>
                UMA MINI WEBSÉRIE EM 6 EPISÓDIOS PRODUZIDA ESPECIALMENTE PARA O
                CURSO
              </b>
              , com uma personagem com um jeitinho bem peculiar que fará com que
              a criança assimile ainda mais o que acontece dentro dela por meio
              do espelhamento e empatia.
            </p>
          </div>
          <div className={styles.webserieGridRight}>
            <div className={styles.cover_thumb_2}>
              <Image src={ep1} alt="Capa do episódio 1" fill sizes="491px" />
            </div>
            <div className={styles.webserieButtom}>
              <img src={play} alt="play" />
              <p>Assistir</p>
            </div>
          </div>
        </div>
        <div className={styles.webserieThumbnails}>
          {epThumbs.map((thumb, i) => (
            <Image
              key={thumb}
              src={thumb}
              alt={"Capa do episódio " + (i + 2)}
              width={149}
              height={84}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebSerieCP;
