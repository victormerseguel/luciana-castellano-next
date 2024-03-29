import Image from "next/image";
import styles from "./BonusCP.module.css";

const aromatherapy1 = "/assets/caminhospotentes/cp_bonuscardaromatherapy1.jpg";
const aromatherapy2 = "/assets/caminhospotentes/cp_bonuscardaromatherapy2.jpg";
const electronics1 = "/assets/caminhospotentes/cp_bonuscardelectronics1.jpg";
const electronics2 = "/assets/caminhospotentes/cp_bonuscardelectronics2.jpg";
const fabuloso1 = "/assets/caminhospotentes/cp_bonuscardfabuloso1.jpg";
const fabuloso2 = "/assets/caminhospotentes/cp_bonuscardfabuloso2_1.jpg";
const lives1 = "/assets/caminhospotentes/cp_bonuscardlives1.jpg";
const lives2 = "/assets/caminhospotentes/cp_bonuscardlives2.jpg";
const toolbox1 = "/assets/caminhospotentes/cp_bonuscardtoolbox1.jpg";
const toolbox2 = "/assets/caminhospotentes/cp_bonuscardtoolbox2.jpg";

function BonusCP() {
  const card = [
    {
      imga: electronics1,
      imgb: electronics2,
      alt: "Bônus: Curso sobre eletrônicos",
      id: "electronics1",
    },
    {
      imga: aromatherapy1,
      imgb: aromatherapy2,
      alt: "Bônus: Curso aromaterapia para crianças",
      id: "aromatherapy1",
    },
    {
      imga: toolbox1,
      imgb: toolbox2,
      alt: "Bônus: Maleta de ferramentas",
      id: "toolbox1",
    },
    // {
    //     imga: lives1,
    //     imgb: lives2,
    //     alt: "Bônus: Encontros ao vivo",
    //     id: "lives1",
    // },
    {
      imga: fabuloso1,
      imgb: fabuloso2,
      alt: "Bônus: Curso Autoestima para crianças",
      id: "fabuloso1",
    },
  ];

  const handleClickCard = (e) => {
    if (e.target.style.opacity === "1") {
      card.map((c) => {
        document.getElementById(c.id).style.opacity = "1";
      });
      e.target.style.opacity = "0";
    } else {
      e.target.style.opacity = "1";
    }
  };

  return (
    <div className={styles.bonusContainer}>
      <h2 className={styles.bonusTitle}>E tem Bônus!</h2>
      <p className={styles.bonusSubtitle}>clique nas imagens para saber mais</p>
      <div className={styles.bonusCards}>
        {card.map((item) => (
          <div className={styles.bonusCardContainer} key={item.alt}>
            <Image
              className={styles.Cards2}
              src={item.imgb}
              alt={item.alt}
              width={300}
              height={449}
            />
            <Image
              id={item.id}
              className={styles.Cards}
              src={item.imga}
              alt={item.alt}
              onClick={handleClickCard}
              style={{ opacity: "1" }}
              width={300}
              height={449}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BonusCP;
