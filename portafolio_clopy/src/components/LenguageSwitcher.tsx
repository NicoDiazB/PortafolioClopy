"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const match = document.cookie.match(/NEXT_LOCALE=(\w+)/);
    
    setLocale(match ? match[1] : "en");
  }, []);

  const changeLocale = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
    setLocale(newLocale);
    router.refresh();
  };

  const buttonClass = (lang: string) =>
    `${locale === lang
      ? "text-[#d86c49] font-bold border-b-2 border-dashed"
      : "font-bold"} w-fit hover:text-[#4B70A6] transition-all duration-150 flex items-center justify-center leading-none`;

  return (
    <div className="flex gap-3">
      <button className={buttonClass("en")} onClick={() => changeLocale("en")}>EN</button>
      <button className={buttonClass("es")} onClick={() => changeLocale("es")}>ES</button>
    </div>
  );
}