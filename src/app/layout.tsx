import "./globals.scss";

import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["300", "600"] });

export const metadata: Metadata = { title: "Portfolio" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={workSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
