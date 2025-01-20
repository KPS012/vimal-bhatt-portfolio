import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const monts = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Vimal Bhatt",
  description: "I'm a passionate designer", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={monts.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
