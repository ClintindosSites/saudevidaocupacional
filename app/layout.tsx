import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsappFloat";
import WhatsAppWidget from "./components/WhatsappWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
export const metadata: Metadata = {
  title:
    "Saúde e Vida | Medicina e Segurança do Trabalho para emrpesas de todos os portes.",
  description:
    "Mantenha sua empresa em conformidade com as exigências legais, evite multas e proteja a saúde dos seus colaboradores com soluções completas em SST.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`
    ${inter.variable}
    ${poppins.variable}
    h-full antialiased
  `}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
