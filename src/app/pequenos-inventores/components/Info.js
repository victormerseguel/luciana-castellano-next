import Image from "next/image";
import style from "./Info.module.css";
import Link from "next/link";

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
        <p className={style.space}>Para miúdos dos 7 aos 12 anos</p>
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
        <p>
          <strong>Valor: </strong>72€
          {/* <span className={style.small}>
            {" ("}22€ pagos na inscrição + 50€ pagos até ao dia 09/08{")"}
          </span> */}
        </p>
        <p className={`${style.small} ${style.space}`}>
          * Materiais e lanches incluídos
        </p>
        <p className={style.small}>
          <strong>
            Vagas limitadas a 10 crianças.
            <br />
            Garante já a tua vaga!
          </strong>
        </p>
        <Link href={"https://forms.gle/qMrXAjxrgXcdxiBV8"}>
          <button>Fazer Inscrição</button>
        </Link>
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
