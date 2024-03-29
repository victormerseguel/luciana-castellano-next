import styles from "./BeforeAndAfterCP.module.css";

import InnerButtomCP from "./InnerButtomCP";
import Image from "next/image";

const checkboxfail = "/assets/caminhospotentes/cp_checkboxfail.png";
const checkboxcorrect = "/assets/caminhospotentes/cp_checkbox.png";

function BeforeAndAfterCP() {
  const infos = [
    {
      before: "Informações desencontradas",
      after: "Passo a passo estruturado",
    },
    {
      before: "Excesso de informação e dificuldade de colocar em prática",
      after: "Conhecimento na prática, passo a passo e de forma simples",
    },
    {
      before:
        "Necessidade de saber sobre todos os temas para passar aos filhos",
      after:
        "Os pais não precisam saber dos assuntos, eles vão aprendendo junto com a criança",
    },
    {
      before: "Sobrecarga emocional",
      after: "Processo leve e divertido",
    },
    {
      before: "Comunicação inadequada",
      after: "Linguagem apropriada e lúdica",
    },
    {
      before: "Vínculos frágeis",
      after: "Fortalecimento de vínculos",
    },
  ];
  return (
    <>
      <div className={styles.BAContainer}>
        <Image
          src={"/assets/caminhospotentes/cp_background3.jpg"}
          alt="background"
          fill
          className="background"
          sizes="100vw"
        />
        <div className={styles.BAContent}>
          <h2>
            Potencialize o <b>desenvolvimento</b> de sua criança{" "}
            <b>de uma forma estruturada e integral</b> a partir de um método
            único e exclusivo
          </h2>
          <div className={styles.gridContainter}>
            <div className={styles.gridRight}>
              <h3>Com o método{/* CIE*/}</h3>
              <ul>
                {infos.map((item) => (
                  <li className={styles.wrongWay} key={item.after}>
                    <img src={checkboxcorrect} alt="Jeito Certo" />
                    <p>{item.after}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.gridLeft}>
              <h3>Sem método</h3>
              <ul>
                {infos.map((item) => (
                  <li className={styles.wrongWay} key={item.before}>
                    <img src={checkboxfail} alt="Jeito errado" />
                    <p>{item.before}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.gridRight}></div>
          </div>
        </div>
        <InnerButtomCP text="SIM, QUERO POTENCIALIZAR O DESENVOLVIMENTO DA MINHA CRIANÇA" />
      </div>
    </>
  );
}

export default BeforeAndAfterCP;
