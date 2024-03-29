import styles from "./OnboardCP.module.css";
import YTVideo from "../helpers/YTVideo";
import Image from "next/image";

const transition1 = "/assets/caminhospotentes/cp_transitionbg1.png";
const transition2 = "/assets/caminhospotentes/cp_transitionbg2.jpg";

function OnboardCP() {
  return (
    <div className={styles.Container}>
      <div className={styles.OnboardTransition1}>
        <Image src={transition1} alt="papel rasgado" fill sizes="100vw" />
      </div>

      <div className={styles.OnboardContainer}>
        <Image
          src={"/assets/caminhospotentes/cp_background4.jpg"}
          alt="background"
          fill
          className="background"
        />
        <div className={styles.OnboardContent}>
          <div className={styles.OnboardTitle}>
            <h2>O curso por dentro</h2>
          </div>
          <p>
            Assista ao vídeo e conheça a plataforma.
            <br />
            Entenda como ele está dividido, como funcionam as aulas e muito
            mais.
          </p>
          <YTVideo patch="csyFoA1g3Hk" />
        </div>
      </div>

      <div className={styles.OnboardTransition2}>
        <Image src={transition2} alt="papel rasgado" fill sizes="100vw" />
      </div>
    </div>
  );
}

export default OnboardCP;
