import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header"; // Добавили и Header
import { SubFooter } from "@/components/SubFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        {/* Шапка сайта */}
        <Header />

        {/* Основное содержимое страницы, растягивается за счет flex-1 */}
        <main className="flex-1">{children}</main>

        {/* Нижняя полоса */}
        <SubFooter />
      </body>
    </html>
  );
}