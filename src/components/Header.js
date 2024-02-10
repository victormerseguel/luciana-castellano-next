import styles from "./Header.module.css";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className={styles.header}>
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
            <img src="/assets/photo-luciana1.jpg" alt="Luciana Castellano" />
          </div>
          <div className={styles.header_right}>
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
