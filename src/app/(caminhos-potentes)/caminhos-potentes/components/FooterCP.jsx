import React from "react";
import styles from "./FooterCP.module.css";
import Image from "next/image";

const logo = "/assets/caminhospotentes/cp_logo2.png";

function FooterCP() {
  return (
    <div className={styles.footerContainer}>
      <Image
        src={"/assets/caminhospotentes/cp_background5.jpg"}
        alt="background"
        fill
        className="background"
        sizes="100vw"
      />
      <Image src={logo} alt="Logo Caminhos Potentes" width={131} height={70} />
      <p>
        <b>Aviso Legal:</b> “Nenhuma informação contida neste produto deve ser
        interpretada como uma afirmação da obtenção de resultados. Qualquer
        referência ao desempenho passado não é, e não deve ser interpretada como
        uma recomendação ou como garantia de qualquer resultado específico. Este
        curso não substitui, em nenhuma hipótese, o acompanhamento psicológico
        e/ou psiquiátrico, bem como o uso de medicação prescrita.”
      </p>
      <p>
        Copyright © 2023 Inc. Todos os direitos reservados. CNPJ:
        19.930.128/0001-82
      </p>
      <p>Política de Privacidade | Política de vendas</p>
    </div>
  );
}

export default FooterCP;
