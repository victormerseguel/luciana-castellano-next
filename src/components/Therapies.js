import styles from "./Therapies.module.css";
import Title from "./Title";

const Therapies = () => {
  return (
    <section className={styles.therapies}>
      <div className={styles.therapies_content}>
        <div className={styles.therapies_left}>
          <Title text="Terapias" />
          <div className={styles.therapies_text}>
            <p>PESSOAS ÚNICAS MERECEM ATENDIMENTOS ÚNICOS.</p>
            <p>
              Não sei você, mas eu sou uma pessoa que busca sempre algo que se
              adeque perfeitamente às minhas necessidades, aos meus desejos. E
              quando entrei no mundo das terapias, eu sempre quis poder oferecer
              isso aos meus clientes: um atendimento que fosse único,
              personalizado, que pudesse se encaixar perfeitamente às suas
              necessidades.
            </p>
            <p>
              Para isso, ao longo de muitos anos, eu me dediquei a aprender
              diversas técnicas terapêuticas, algumas tradicionais, outras
              modernas; diversas abordagens e formas alternativas de lidar com o
              ser humano de forma integral, trabalhando corpo, mente e espírito
              simultaneamente, de maneira entrelaçada e conjunta, levando em
              consideração sua história, suas crenças, sua trajetória.
            </p>
            <p>
              A abordagem TRAUMA INFORMED, que baliza todo meu trabalho, é uma
              das chaves para um atendimento que utiliza um método único, onde é
              possível utilizar o melhor de cada uma das técnicas que trabalho
              para desvendar e liberar tudo o que inconscientemente nos
              atrapalha no caminho de sermos quem queremos ser.
            </p>
          </div>
        </div>
        <div className={styles.therapies_right}>
          <img
            src="/assets/therapies-image.jpg"
            alt="Terapias - Luciana Castellano"
          />
        </div>
      </div>
    </section>
  );
};

export default Therapies;
