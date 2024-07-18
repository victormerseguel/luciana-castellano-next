import Image from "next/image";
import styles from "./FAQCP.module.css";

const seta = "/assets/caminhospotentes/cp_play.png";

function FAQCP() {
  const faq = [
    {
      pergunta: "Para que idade o curso é recomendado?",
      resposta: "Para crianças que já passaram dos 7 anos.",
      id: "faq1",
    },
    {
      pergunta: "Crianças menores podem fazer a jornada?",
      resposta:
        "A Jornada foi toda desenvolvida para crianças com um pouco mais de entendimento e maturidade, por isso sua linguagem é diferente da usada para crianças menores. Crianças abaixo dos 7 anos, podem não aproveitar todo o conteúdo da jornada.",
      id: "faq2",
    },
    {
      pergunta: "Para até que idade é o curso?",
      resposta:
        "O curso foi pensado para um publico infantojuvenil, sendo assim compreende uma faixa etária dos 7 aos 12 anos, porém somente você vai saber se mesmo após os 12 sua criança se interessaria pelo curso.",
      id: "faq3",
    },
    {
      pergunta: "Tem um tempo certo para fazer o curso?",
      resposta:
        "Você pode fazer quando quiser, no horário que quiser de acordo com a rotina da família dentro do seu período de acesso. Porém, é indicado que a jornada seja feita de forma constante e consistente, para que o processo seja mais potente e possa trazer mais resultados. A jornada propõe diversas atividades práticas e para que elas possam ser realizadas, os módulos são liberados aos poucos.",
      id: "faq4",
    },
    {
      pergunta: "Qual é o período de acesso?",
      resposta: "1 ano.",
      id: "faq5",
    },
    {
      pergunta: "Está com alguma dúvida?",
      resposta: "Entre em contato pelo WhatsApp e faça sua pergunta.",
      id: "faq6",
    },
  ];

  let active;

  const handleClick = (e) => {
    const id = e.target.id ? e.target.id : e.target.parentNode.id;

    faq.map((question) => {
      clear(question);
      if (question.id === id) {
        if (active !== id) {
          document.getElementById(question.id).style.backgroundColor =
            "var(--lightGreen)";
          document.getElementById(question.id + "Ans").style.display = "block";
          active = id;
        } else {
          active = "";
        }
      }
    });
  };

  const clear = (question) => {
    document.getElementById(question.id).style.backgroundColor =
      "var(--lightBege)";
    document.getElementById(question.id + "Ans").style.display = "none";
  };

  return (
    <div className={styles.faqContainer}>
      <Image
        src={"/assets/caminhospotentes/cp_background1.jpg"}
        alt="background"
        fill
        className="background"
        sizes="100vw"
      />
      <div className={styles.faqTitle}>
        <h2>FAQ - Perguntas Frequentes</h2>
      </div>
      <div className={styles.faqQuestions}>
        {faq.map((item) => (
          <div key={item.id}>
            <div
              id={item.id}
              className={styles.faqQuestion}
              onClick={handleClick}
            >
              <p>{item.pergunta}</p>
              <img src={seta} alt="seta para baixo" />
            </div>
            <p id={item.id + "Ans"} className={styles.faqAnswer}>
              {item.resposta}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQCP;
