import Image from "next/image";
import style from "./Content.module.css";

const Content = () => {
  return (
    <div className={style.wrap}>
      <Image
        src={"/assets/pequenosinventores/peq-inv_header_bg.png"}
        fill
        alt="background"
        className="background"
        sizes="100vw"
        priority
      />
      <div className={style.grid}>
        <div className={style.left}>
          <div className={style.img}>
            <Image
              src={"/assets/pequenosinventores/peq-inv_play.jpg"}
              fill
              alt="Menina com invenção na mão"
              sizes="(max-width: 700px) 100vw, (min-width: 701px) 50vw, (min-width: 1000px) 500px"
            />
          </div>
        </div>
        <div className={style.right}>
          <p>
            Em Pequenos Inventores, a dupla conduz as crianças num processo
            completo de criação que vai desde a concepção até o invento
            finalizado, com tudo a que se tem direito.
          </p>
          <p>Os miúdos aprendem:</p>
          <ul>
            <li>
              Como nasce uma invenção à partir da observação do mundo à sua
              volta;
            </li>
            <li>Processos criativos;</li>
            <li>Organização de ideias e colocação destas no papel;</li>
            <li>Preparação e pré-produção;</li>
            <li>Manuseio de ferramentas;</li>
            <li>Relações interpessoais e</li>
            <li>Processos colaborativos;</li>
          </ul>
          <p>
            Mas acima de qualquer coisa, a criança passa por uma experiência que
            pode ser muito enriquecedora para ela, numa oportunidade de
            sentir-se pertencente, de fazer parte do surgimento de algo que, se
            não fosse por ela, poderia não existir nunca. Passa também pela
            experimentação de se sentir orgulhoso ou orgulhosa de algo que faz e
            acaba por perceber que é mais capaz do que pode imaginar.
          </p>
          <p>
            O invento em si, passa a ser apenas um pretexto para transformar
            pequenos inventores em grandes pessoas, felizes e mais seguras de si
            mesmas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
