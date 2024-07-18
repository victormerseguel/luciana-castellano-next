import Script from "next/script";
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
        {/*  <meta
        name="facebook-domain-verification"
        content="qkirify6dyp1rjblzefuke1m74u423"
      />
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5F5RCL59');`,
        }}
      ></Script> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
