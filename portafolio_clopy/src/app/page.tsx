import { Btn } from "@/components/Btn";
import { CardCategoryProjects } from "@/components/CardCategoryProjects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-20">
     <section className="flex flex-col items-center gap-4 mt-60   ">
      <h1 className="font-bold text-2xl md:text-4xl ">hi, i am cloply</h1>
      <p className="text-lg text-center md:text-2xl  md:max-w-[1000px] leading-tight ">I am a multidisciplinary design researcher and artist navigating experiences, technology, and crafts. My creative process thrives on collaboration, using participatory methods to understand and address social and community needs, contributing to positive change.See my work below!</p>
     </section>
     <Btn>Button</Btn>

     <section className="flex gap-10">
      {/* esto seria la section de los tipos de proyecto */}

      <Link href={"/projects/hci"}>
      
        <CardCategoryProjects title="HUMAN-COMPUTER INTERACTION" imageUrl="/projects/human-computer-interaction/HCI.png"/>
      </Link>
      <Link href={"/projects/textiles"}>
      
        <CardCategoryProjects title="HUMAN-COMPUTER INTERACTION" imageUrl="/projects/human-computer-interaction/HCI.png"/>
      </Link>
     </section>
  
    </main>
  );
}
