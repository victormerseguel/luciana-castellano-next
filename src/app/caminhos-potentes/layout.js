import "../globals.css";

export const metadata = {
  title: "Caminhos Potentes",
  description: "Educação emocional para crianças e jovens",
  icons: {
    icon: "/assets/caminhospotentes/cp_favicon.ico",
  },
};

export default function CaminhosPotentesLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
