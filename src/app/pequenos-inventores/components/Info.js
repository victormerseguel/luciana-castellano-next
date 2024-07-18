import Image from "next/image";
import style from "./Info.module.css";

const Info = () => {
  return (
    <div className={style.wrap}>
      <Image
        src={"/assets/pequenosinventores/peq-inv_spring.png"}
        width={65}
        height={71}
        alt="mola"
        className={style.spring}
      />
      <div className={style.content}>
        <p className={style.space}>Para miúdos dos 8 aos 12 anos</p>
        <p>
          <strong>Datas: </strong>12, 13 e 14 de agosto
        </p>
        <p>
          <strong>Horário: </strong>das 10h às 13h
        </p>
        <p>
          <strong>Local: </strong>Tigre Utópico
        </p>
        <p className={`${style.small} ${style.space}`}>
          Rua Frei Bartolomeu dos Mártires, 17 - Nova Oeiras
        </p>
        <p className={style.space}>
          <strong>Valor: </strong>72€{" "}
          <span className={style.small}>
            {"("}22€ pagos na inscrição + 50€ pagos até o dia 09/08{")"}
          </span>
        </p>
        <p className={`${style.small} ${style.space}`}>
          * Materiais e lanche inclusos
        </p>
        <p className={style.small}>
          <strong>
            Vagas limitadas a 10 crianças.
            <br />
            Garante já a tua vaga!
          </strong>
        </p>
        <button>Fazer Inscrição</button>
      </div>
      <Image
        src={"/assets/pequenosinventores/peq-inv_spring.png"}
        width={65}
        height={71}
        alt="mola"
        className={style.spring}
      />
    </div>
  );
};

export default Info;
