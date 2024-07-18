import Image from "next/image";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.wrap}>
      <div className={style.grid}>
        <div className={style.left}>
          <p>
            Nesta oficina, ou melhor, laboratório de invenções,{" "}
            <strong>Luciana Castellano</strong> e{" "}
            <strong>Victor Merseguel</strong> conduzem os miúdos a pensarem e
            enxergarem o mundo de um jeito diferente.
          </p>
          <p>
            Luciana é artista cênica, finalista em Psicopedagogia, terapeuta e
            instrutora de Yoga com um trabalho especialmente voltado para o
            desenvolvimento e relações humanas, inclusive na Infância.
          </p>
          <p>
            Victor é artista cênico, cenógrafo premiado, programador e
            videomaker e passa seu tempo entre ideias e invenções.
          </p>
          <p>
            Juntos, co-fundaram a Companhia de Copas, onde desenvolvem há mais
            de 13 anos projetos artísticos pensados e criados pra o público
            infantojuvenil.
          </p>
        </div>
        <div className={style.right}>
          <Image
            src={"/assets/pequenosinventores/peq-inv_photo.png"}
            fill
            alt="Crianças com ferramentas"
            sizes="(max-width: 700px) 100vw, (min-width: 701px) 50vw,(min-width: 1000px) 500px"
            style={{ objectPosition: "center", objectFit: "cover" }}
          />
        </div>
      </div>
      <Image
        src={"/assets/pequenosinventores/peq-inv_gears.png"}
        width={150}
        height={156}
        alt="engrenagens"
        className={style.gears}
      />
    </div>
  );
};

export default About;
