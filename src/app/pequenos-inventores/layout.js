import { Inter, Oswald } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--oswald",
});

export const metadata = {
  title: "Pequenos Inventores",
  description:
    "Oficina de Férias Pequenos Inventores, uma oficina para crianças de desenvolvimento de criatividade, planejamento estratégico, trabalho em equipe, autoconfiança, trabalhos manuais e sustentabilidade.",
  icons: {
    icon: "/assets/pequenosinventores/peq-inv_tools.png",
  },
};

export default function PequenosInventoresLayout({ children }) {
  return (
    <html lang="pt" className={`${inter.className} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
