import React from "react";
import styles from "./GuaranteeCP.module.css";
import Image from "next/image";

const selo = "/assets/caminhospotentes/cp_selo.png";
const barcode = "/assets/caminhospotentesicon-barcode.png";
const mastercard = "/assets/caminhospotentesicon-mastercard.png";
const paypal = "/assets/caminhospotentesicon-paypal.png";
const pix = "/assets/caminhospotentesicon-pix.png";
const visa = "/assets/caminhospotentesicon-visa.png";
const postitHoliday = "/assets/caminhospotentes/cp_postitHoliday.png";

function GuaranteeCP() {
  return (
    <div className={styles.guaranteeContainer} id="guarantee">
      <Image
        src={"/assets/caminhospotentes/cp_background8.jpg"}
        alt="background"
        fill
        className="background"
        sizes="100vw"
      />
      <div className={styles.gridWrap}>
        <div className={styles.guarateeGrid}>
          <div className={styles.guaranteeGridLeft}>
            <h2>O que você ganha ao entrar no Caminhos Potentes</h2>
            <div className={styles.pContainer}>
              <p className={styles.pLeft}>
                - 1 ano de acesso ao Caminhos Potentes
              </p>
            </div>
            <div className={styles.pContainer}>
              <p className={styles.pLeft}>
                - 1 ano de acesso ao Fabuloso Mundo das Crianças que se Amam
              </p>
            </div>
            <div className={styles.pContainer}>
              <p className={styles.pLeft}>- Maleta de Ferramentas</p>
            </div>
            <div className={styles.pContainer}>
              <p className={styles.pLeft}>- Aulas sobre o uso de Eletrônicos</p>
            </div>
            <div className={styles.pContainer}>
              <p className={styles.pLeft}>
                - Aula sobre Aromaterapia para crianças
              </p>
            </div>

            {/* <img className={styles.postit} src={postitHoliday} alt="Promoção de Férias" /> */}
            {/* <p id={styles.oldPrice}>de R$ 897,00</p> */}
            <p id={styles.textNormal}>por apenas:</p>
            <p id={styles.actualPrice}>12x de 55,89</p>
            <p id={styles.totalPrice}>ou R$ 560,00 à vista</p>
            <a href="https://pay.hotmart.com/E76398977G?off=t50egpzc">
              <p>QUERO ENTRAR AGORA</p>
            </a>
            <div className={styles.paymentMethod}>
              <Image src={barcode} alt="Boleto" width={35} height={22.75} />
              <Image
                src={mastercard}
                alt="Mastercard"
                width={35}
                height={20.86}
              />
              <Image src={paypal} alt="Paypal" width={35} height={8.5} />
              <Image src={pix} alt="Pix" width={35} height={12.34} />
              <Image src={visa} alt="Visa" width={35} height={11.33} />
            </div>
          </div>
          <div className={styles.guaranteeGridRight}>
            <Image
              src={selo}
              alt="Selo de garantia de 7 dias"
              width={183}
              height={183}
            />
            <h2>Garantia incondicional de 7 dias</h2>
            <h3>Você está totalmente seguro</h3>
            <p>
              Se por algum motivo você não se identificar com o conteúdo ou
              sentir que isso não trouxe nenhum benefício real, você pode
              acionar a garantia incondicional de 7 dias e devolvo 100% do seu
              investimento.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuaranteeCP;
