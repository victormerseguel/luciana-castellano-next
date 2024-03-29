import "../globals.css";
import "./globals_home.css";
import Footer from "@/app/(_page)/components/Footer";

export const metadata = {
  title: "Luh Castellano",
  description:
    "Terapeuta informada sobre trauma (trauma informed), especialista em gestão emocional e relações mães e filhos",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="body">
        {children}
        <Footer />
      </body>
    </html>
  );
}
