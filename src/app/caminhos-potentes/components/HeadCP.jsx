import styles from "./HeadCP.module.css";
import "../../globals.css";

import YTVideo from "../helpers/YTVideo";
import InnerButtomCP from "./InnerButtomCP";
import Image from "next/image";

function HeadCP() {
  const logoCP = "/assets/caminhospotentes/cp_logo.png";

  return (
    <div className={styles.headerContainer}>
      <Image
        src={"/assets/caminhospotentes/cp_background1.jpg"}
        alt="background"
        className="background"
        fill
        style={{ objectFit: "cover" }}
        sizes="100vw"
      />
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Image
            src={logoCP}
            alt="Logo Caminhos Potentes"
            width={172}
            height={155}
          />
        </div>
        <h1>
          Uma jornada de{" "}
          <b>autodescobrimento e educação emocional para crianças</b>!
          <br />
          Um curso que ajuda as nossas crianças a descobrirem suas
          peculiaridades, potencializando aquilo que elas já possuem! Fazendo
          com que elas brilhem suas essências pelo mundo!
        </h1>
        <p>Assista ao vídeo a seguir e entenda</p>
        <YTVideo patch="_8T_UmS7Ots?autoplay=1" />
        <InnerButtomCP text="QUERO POTENCIALIZAR O DESENVOLVIMENTO DA MINHA CRIANÇA" />
      </div>
    </div>
  );
}

export default HeadCP;
