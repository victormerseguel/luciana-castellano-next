import styles from "./ClassContent.module.css";

const title1 = "/assets/fabulosomundo/titulo1.png";

function ConteudoAulas() {
  return (
    <section className={styles.conteudoAulas}>
      <div className={styles.conteudo2}>
        <div className={styles.titulo1}>
          <img
            className={styles.img002}
            src={title1}
            alt="O-que-voce-vai-aprender-neste-evento"
          />
        </div>
        <div className={styles.aulas}>
          <div className={styles.aula1}>
            <div className={styles.pAula}>
              <h2 className={styles.h2ConteudoAulas}>Aula 1 - 07/03</h2>
              <p>
                Faremos um panorama da sociedade atual e como ela contribui para
                o aumento da ansiedade e depressão nos nossos pequenos e jovens.
                Você vai aprender também, quais são as possíveis soluções e como
                a construção da autoestima é fundamental neste processo.
              </p>
            </div>
          </div>
          <div className={styles.aula2}>
            <div className={styles.pAula}>
              <h2 className={styles.h2ConteudoAulas}>Aula 2 - 08/03</h2>
              <p>
                Você vai aprender a identificar até os sinais mais sutis que
                indicam como anda a autoestima do seu filho e como você pode
                ajudá-lo na construção de uma autoestima mais saudável.
              </p>
            </div>
          </div>
          <div className={styles.aula3}>
            <div className={styles.pAula}>
              <h2 className={styles.h2ConteudoAulas}>Aula 3 - 09/03</h2>
              <p>
                Você aprenderá quais são os pontos fundamentais para o
                desenvolvimento saudável da sua criança e como você pode
                ajudá-la desde já de forma leve e criativa, mesmo que não
                entenda nada sobre o assunto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConteudoAulas;
