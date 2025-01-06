import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { Header } from '@/components/header/Header';
import "./globals.css";


const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TakenStudios - Seu projeto nossa prioridade",
  description: "Aprenda com a TakenStudios.",
};

interface IRootLayout extends Readonly<{ children: React.ReactNode }> { }

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-Br">
      <body className={nunito.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
