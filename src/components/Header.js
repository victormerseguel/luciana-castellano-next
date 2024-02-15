import Image from "next/image";
import styles from "./Header.module.css";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/assets/header-bg.jpg"
        alt="Luciana Castellano"
        fill
        style={{ objectPosition: "center" }}
        className="bg"
        quality={85}
      />
      <div className={styles.header_wrap}>
        <Navbar />
        <div className={styles.header_content}>
          <div className={styles.header_left}>
            <h1>
              Terapias Integrativas
              <br />
              Trauma Informed
            </h1>
            <p>Reconecte-se</p>
            <p>
              Com <span id="change_1">a sua</span>
            </p>
            <p id="change_2">Essência.</p>
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
