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
            Em Pequenos Inventores, a dupla guia as crianças num processo
            completo de criação, desde a concepção até ao invento finalizado,
            com tudo a que têm direito.
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
            <li>Processos colaborativos.</li>
          </ul>
          <p>
            Mas acima de tudo, a criança passa por uma experiência que pode ser
            muito enriquecedora, uma oportunidade de sentir-se parte do
            surgimento de algo que, se não fosse por ela, podia nunca existir.
            Passa também pela experiência de sentir orgulho de algo que fez,
            percebendo que é mais capaz do que imaginava.
          </p>
          <p>
            O invento em si é apenas um pretexto para transformar pequenos
            inventores em grandes pessoas, felizes e mais seguras de si mesmas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
