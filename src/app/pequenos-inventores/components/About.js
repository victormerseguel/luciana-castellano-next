import Image from "next/image";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.wrap}>
      <div className={style.grid}>
        <div className={style.left}>
          <p>
            Nesta oficina, ou melhor, laboratório de invenções, a{" "}
            <strong>Luciana Castellano</strong> e o{" "}
            <strong>Victor Merseguel</strong> levam os miúdos a pensar e ver o
            mundo de uma maneira diferente.
          </p>
          <p>
            A Luciana é artista cénica, finalista em Psicopedagogia, terapeuta e
            instrutora de Yoga, com um trabalho especialmente focado no
            desenvolvimento e relações humanas, inclusive na infância.
          </p>
          <p>
            O Victor é artista cénico, cenógrafo premiado, programador e
            videomaker, e passa o seu tempo entre ideias e invenções.
          </p>
          <p>
            Juntos, co-fundaram a Companhia de Copas, onde há mais de 13 anos
            desenvolvem projetos artísticos pensados e criados para o público
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
