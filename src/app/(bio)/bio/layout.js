export const metadata = {
  title: "Luh Castellano",
  description: "Link da Bio | Luciana Castellano",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function BioLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
