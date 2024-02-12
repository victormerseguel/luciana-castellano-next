import styles from "./Navbar.module.css";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>Luciana Castellano</h1>
      </div>
      <ul className={styles.links}>
        <li>
          <Link className={styles.a} href={"#"}>
            Terapias
          </Link>
        </li>
        <li>
          <Link className={styles.a} href={"#"}>
            Trauma Informed
          </Link>
        </li>
        <li>
          <Link className={styles.a} href={"#"}>
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link className={styles.a} href={"#"}>
            Atendimentos
          </Link>
        </li>
        <li>
          <Link className={styles.a} href={"#"}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
