import style from "./Header.module.css";
import "../../globals.css";

import Image from "next/image";

const Header = () => {
  return (
    <header className={style.wrap}>
      <Image
        src={"/assets/pequenosinventores/peq-inv_header_bg.png"}
        fill
        alt="background"
        className="background"
        sizes="100vw"
        priority
      />
      <div className={style.content}>
        <h1>Oficina de Férias</h1>
        <div className={style.grid}>
          <div className={style.left}>
            <div className={style.logo}>
              <Image
                src={"/assets/pequenosinventores/peq-inv_logo.png"}
                fill
                alt="Pequenos Inventores"
                sizes="(min-width: 701px) 40vw, (max-width: 700px) 90vw, (min-width: 1000px) 500px"
              />
            </div>
          </div>
          <div className={style.right}>
            <p>
              Uma oficina para desenvolver{" "}
              <strong>
                criatividade, planeamento estratégico, trabalho em equipa,
                autoconfiança
              </strong>
              , trabalhos manuais e sustentabilidade.
            </p>
            <button>Inscreve-te já!</button>
          </div>
        </div>
      </div>
      <Image
        src={"/assets/pequenosinventores/peq-inv_tools.png"}
        width={190}
        height={125}
        alt="Ferramentas e tintas"
      />
    </header>
  );
};

export default Header;
