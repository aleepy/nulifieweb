import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Нуліфай - РП сервер",
  description: "Сервер середньовічного РП та ворлдбілдінгу в світі Екзайл. Кастомні механіки ковальства, магії, міст та війн чекають на тебе!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-[#0c0c0c] text-white`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
