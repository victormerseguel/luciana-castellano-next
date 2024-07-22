import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "O Fabuloso Mundo das Crianças que se Amam",
  description: "Mini curso de autoestima para crianças e jovens",
  icons: {
    icon: "/assets/fabulosomundo/collage-lu-2.png",
  },
};

export default function FabulosLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
