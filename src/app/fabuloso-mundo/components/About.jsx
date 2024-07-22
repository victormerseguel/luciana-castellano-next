import styles from "./About.module.css";

const title2 = "/assets/fabulosomundo/titulo2.png";
const collage2 = "/assets/fabulosomundo/collage-lu-2.png";

function About() {
  return (
    <section className={styles.sobre}>
      <div className={styles.titulo2}>
        <img
          className={styles.img_itulo_sobre}
          src={title2}
          alt="quem-e-luh-castellano"
        />
      </div>
      <div className={styles.conteudo3}>
        <div className={styles.collage2}>
          <img
            className={styles.img_collage_2}
            src={collage2}
            alt="luh-collage-2"
          />
        </div>
        <div className={styles.textoSobre}>
          <div className={styles.p1}>
            <p>
              Luciana Castellano é uma apaixonada pela vida, pelas relações,
              pela arte, pelo desenvolvimento humano e pelas infâncias, em todas
              as suas formas de existir (seja a nossa criança interior ou as que
              existem ao nosso redor).
              <br />
              <br />
              É mãe da Clarice, de 8 e Rafael de 13 anos e vive em busca de uma
              maternidade mais leve e consciente.
              <br />
              <br />
              Desde pequena é curiosa pelas histórias e pelos caminhos que as
              pessoas trilham ao longo de suas trajetórias. Dedicou toda uma
              vida a se auto conhecer e a gerar reflexão à todos a sua volta,
              seja pela arte, em suas peças de teatro, seja pelo seus múltiplos
              ofícios.
              <br />
              <br />
              Seu contato com o autoconhecimento e espiritualidade, iniciou-se
              há mais de 22 anos, mesma época em se formava como atriz. Suas
              formações na área do desenvolvimento humano, passam por terapias
              integrativas onde focou seus estudos no funcionamento do
              subconsciente e suas crenças. Formou-se ainda em Hatha Yoga, Yoga
              Kids e de Educação Parental pela Positive Discipline Association.
              Além da especialização em desenvolvimento infantil e
              parentalidade, aprofundou seus estudos em Trauma.
              <br />
              <br />
              É ainda facilitadora de meditação, autoconhecimento e
              Psicopedagoga em formação.
              <br />
              <br />
              Atualmente, todo o seu trabalho segue uma abordagem Trauma
              Informed.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
