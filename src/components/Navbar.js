import styles from "./Navbar.module.css";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>Luciana Castellano</h1>
      </div>
      <ul className={styles.links}>
        <l1>
          <Link className={styles.a} href={"#"}>
            Terapias
          </Link>
        </l1>
        <l1>
          <Link className={styles.a} href={"#"}>
            Trauma Informed
          </Link>
        </l1>
        <l1>
          <Link className={styles.a} href={"#"}>
            Sobre Mim
          </Link>
        </l1>
        <l1>
          <Link className={styles.a} href={"#"}>
            Atendimentos
          </Link>
        </l1>
        <l1>
          <Link className={styles.a} href={"#"}>
            Contato
          </Link>
        </l1>
      </ul>
    </nav>
  );
}
