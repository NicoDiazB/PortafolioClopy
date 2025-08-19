import type { Metadata } from "next";
import {Lekton } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";



const lekton = Lekton({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Clopy Diaz Reyes",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale()
  
  return (
    <html lang={locale} className={lekton.className}>
      <body className="bg-[#fff8ed] bg-[url('/bg-texture(1).webp')] bg-repeat bg-[length:1000px_1000px] min-h-dvh flex flex-col justify-between">
        <NextIntlClientProvider>

          <Navbar/>
          {children}
          <Footer/>
       </NextIntlClientProvider>
      </body>
    </html>
  );
}
