import React from "react";
import styles from "./AboutLucianaCP.module.css";
import Image from "next/image";

const collage = "/assets/caminhospotentes/cp_collage2.png";

function AboutLucianaCP() {
  return (
    <div className={styles.aboutContainer}>
      <Image
        src={"/assets/background3.jpg"}
        alt="background"
        fill
        className="background"
        sizes="100vw"
      />
      <div className={styles.aboutContent}>
        <div className={styles.aboutTitle}>
          <h2>Quem é Luciana Castellano</h2>
        </div>
        <Image
          src={collage}
          alt="Foto Luciana Castellano"
          width={398}
          height={384}
        />
        <div className={styles.aboutDescription}>
          <p>
            Luciana Castellano é uma apaixonada pela vida, pelas relações, pela
            arte, pelo desenvolvimento humano e pelas infâncias, em todas as
            suas formas de existir (seja a nossa criança interior ou as que
            existem ao nosso redor).
          </p>
          <p>
            É mãe da Clarice, de 8 e Rafael de 13 anos e vive em busca de uma
            maternidade mais leve e consciente.
          </p>
          <p>
            Desde pequena é curiosa pelas histórias e pelos caminhos que as
            pessoas trilham ao longo de suas trajetórias. Dedicou toda uma vida
            a se auto conhecer e a gerar reflexão à todos a sua volta, seja pela
            arte, em suas peças de teatro, seja pelo seus múltiplos ofícios.
          </p>
          <p>
            Seu contato com o autoconhecimento e espiritualidade, iniciou-se há
            mais de 22 anos, mesma época em se formava como atriz. Suas
            formações na área do desenvolvimento humano, passam por terapias
            integrativas onde focou seus estudos no funcionamento do
            subconsciente e suas crenças. Formou-se ainda em Hatha Yoga, Yoga
            Kids e de Educação Parental pela Positive Discipline Association.
            Além da especialização em desenvolvimento infantil e parentalidade,
            aprofundou seus estudos em Trauma.
          </p>
          <p>
            É ainda facilitadora de meditação, autoconhecimento e Psicopedagoga
            em formação.
          </p>
          <p>
            Atualmente, todo o seu trabalho segue uma abordagem Trauma Informed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutLucianaCP;
