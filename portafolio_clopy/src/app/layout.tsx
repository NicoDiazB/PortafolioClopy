import type { Metadata } from "next";
import {Lekton } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";



const lekton = Lekton({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Portafolio Clopy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lekton.className}>
      <body className="bg-[#fff8ed] bg-[url('/bg-texture(1).jpg')] bg-repeat bg-[length:1000px_1000px]">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
