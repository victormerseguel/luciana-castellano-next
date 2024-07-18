import Link from "next/link";
import styles from "./bio.module.css";
import "./globals.css";
import Image from "next/image";

const profile = "/assets/bio-profile.jpg";
const atendimentos = "/assets/bio-atendimentos.jpg";
const caminhospotentes = "/assets/bio-caminhospotentes.jpg";
const fabuloso = "/assets/bio-fabuloso.jpg";
const rematerna = "/assets/bio-rematerna.jpg";
const youtube = "/assets/bio-youtube.jpg";
const pequenosinventores = "/assets/bio-pequenosinventores.jpg";

const cards = [
  {
    src: atendimentos,
    alt: "Banner Atendimentos",
    link: "https://wa.me/5511976363608?text=Ol%c3%a1%2c+gostaria+de+mais+informa%c3%a7%c3%b5es+%c3%a0+respeito+dos+atendimentos.",
  },
  {
    src: pequenosinventores,
    alt: "Banner Pequenos Inventores",
    link: "https://wa.link/g8yw9y",
  },
  {
    src: caminhospotentes,
    alt: "Banner Curso Caminhos Potentes",
    link: "https://luhcastellano.com/caminhos-potentes",
  },
  // {
  //   src: fabuloso,
  //   alt: "Banner do curso O Fabuloso Mundo das Crianças que se Amam",
  //   link: "https://wa.me/351935715802?text=Ol%c3%a1%2c+gostaria+de+mais+informa%c3%a7%c3%b5es+%c3%a0+respeito+do+curso+O+Fabuloso+Mundo+das+Crian%c3%a7as+que+se+Amam.",
  // },
  // {
  //   src: rematerna,
  //   alt: "Grupo Terapeutico ReMaterna",
  //   link: "https://wa.me/5511976363608?text=Ol%c3%a1%2c+gostaria+de+receber+maiores+informa%c3%a7%c3%b5es+%c3%a0+respeito+do+Grupo+Terap%C3%AAutico+ReMaterna.",
  // },
  {
    src: youtube,
    alt: "Canal do YouTube",
    link: "https://www.youtube.com/luhcastellano",
  },
];

function BioInstagram() {
  return (
    <div className={styles.bioBackground}>
      <div className={styles.bioContainer}>
        <img src={profile} alt="Luciana Castellano" className={styles.cover} />
        <div className={styles.links_container}>
          {cards.map(({ src, alt, link }) => (
            <div className={styles.link} key={src}>
              <Link
                href={link}
                key={src}
                className={styles.links}
                target="_blank"
                rel="nonreferrer"
              >
                <Image
                  src={src}
                  alt={alt}
                  className={styles.img}
                  fill
                  sizes="(max-width: 700px) 90vw, (min-width: 701px) 700px"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BioInstagram;
