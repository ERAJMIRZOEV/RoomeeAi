import type { Metadata } from "next";
import { Lato } from "next/font/google"; // 1. Импортируем Lato вместо Geist

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// 2. Настраиваем Lato с нужными весами и поддержкой латиницы + кириллицы
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Roomee.tj — Недвижимость в Душанбе",
  description: "Аренда и продажа квартир, домов и коммерческой недвижимости",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${lato.variable} ${lato.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        {/* Шапка сайта */}
        <Header />

        {/* Основное содержимое страницы */}
        <main className="flex-1 w-full">{children}</main>

        {/* Нижняя полоса */}
        <Footer />
      </body>
    </html>
  );
} 