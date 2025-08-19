import LanguageSwitcher from "@/components/LenguageSwitcher";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations("Home")
  return (
    <main className="flex flex-col justify-center  items-center ">
      <section className="flex w-full justify-evenly  md:justify-end pt-4 md:gap-10 md:pr-6">
        <Link className="font-bold min-w-[60px] md:min-w-[80px] text-center  md:text-xl text-[#4B70A6] border-b-3 border-dashed hover:text-black" href={"/contact-me"}> {t("links.contact")}</Link>
        <Link className="font-bold min-w-[60px] md:min-w-[80px] text-center  md:text-xl text-[#4B70A6] border-b-3 border-dashed hover:text-black" href={"/contact-me"}>{t("links.cv")}</Link>
        <LanguageSwitcher/>
      </section>
     <section className="flex flex-col items-center md:max-w-[1000px] gap-4 mt-30  ">
      <h1 className="font-bold text-2xl  md:text-4xl ">{t("intro.title")}</h1>
      <p className="text-lg text-center px-4 md:text-2xl  leading-tight ">{t("intro.description")}</p>
     </section>

     <section className="flex gap-8 flex-col">
     
      <div className="gap-4 md:gap-8 flex justify-center items-center mt-16">

        <Link className=" bg-[#E2DFCF] text-center min-w-[150px] md:min-w-[200px] text-black  md:text-xl rounded-full py-5 px-2 font-bold
          outline-2 outline-dashed outline-offset-[-4px] outline-[#4B70A6]
          active:scale-95 active:shadow-[inset_0_0_8px_rgba(0,0,0,0.40)]
          hover:bg-[#d86c49] hover:text-white hover:outline-[#FFFEFB]
          transition-all" href={"/projects/hci"}>
          {t("projects.hci")}
        </Link>
        <Link className=" bg-[#E2DFCF] min-w-[150px] md:min-w-[200px] text-center text-black md:text-xl rounded-full py-5 px-2 font-bold
          outline-2 outline-dashed outline-offset-[-4px] outline-[#4B70A6]
          active:scale-95 active:shadow-[inset_0_0_8px_rgba(0,0,0,0.40)]
          hover:bg-[#d86c49] hover:text-white hover:outline-[#FFFEFB]
          transition-all" href={"/projects/textiles"}>
          {t("projects.textile")}
        </Link>
      </div>

      <div className="gap-20 md:gap-26 flex flex-wrap justify-center items-center ">
        <Link className=" font-bold min-w-[100px] md:min-w-[120px] text-center  md:text-xl border-b-3 text-[#4B70A6] border-dashed hover:text-black" href={"/exhibition"}>
          {t("sections.exhibitions")}
        </Link>
        <Link className=" font-bold min-w-[100px] md:min-w-[120px] text-center  md:text-xl border-b-3 text-[#4B70A6] border-dashed hover:text-black" href={"/publications"}>
          {t("sections.publications")}
        </Link>

      </div>
     </section>
  
    </main>
  );
}
