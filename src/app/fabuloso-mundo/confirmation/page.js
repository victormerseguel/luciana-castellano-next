import styles from "./page.module.css";
import "../../globals.css";

const logo3 = "/assets/fabulosomundo/logo-3.png";
const progresso = "/assets/fabulosomundo/progresso.png";

const favicon = "/assets/fabulosomundo/collage-lu-2.png";
const title = "Confirmação";
{
  /* <link rel="icon" type="image/png" href={favicon} /> */
}

function Confirmacao() {
  return (
    <>
      <section className={styles.total__bg}>
        <div className={styles.conteudo_central}>
          <div className={styles.logo}>
            <img
              className={styles.img__logo}
              src={logo3}
              alt="logo"
              width="338px"
            />
          </div>
          <div className={styles.plantas__bg}>
            <h4 className={styles.h22}>Só falta mais um passo!</h4>
            <h5 className={styles.h33}>
              Entre no grupo do WhatsApp para receber
              <br />o link das aulas e materiais de apoio.
            </h5>
          </div>
          <div className={styles.img__barra - progresso}>
            <img
              className={styles.barraProgresso}
              src={progresso}
              alt="barra-de-progresso"
            />
          </div>
          <div className={styles.btn}>
            <a
              target={"blank"}
              className={styles.btn__whatsapp}
              href="https://chat.whatsapp.com/HXeCTKEWf8ILCxm7qhjTI9"
            >
              Entrar para o Grupo VIP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Confirmacao;
