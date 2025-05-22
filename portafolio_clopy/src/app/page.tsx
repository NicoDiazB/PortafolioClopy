import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center  items-center gap-20">
     <section className="flex flex-col items-center md:max-w-[1000px] gap-4 md:mt-50  mt-30  ">
      <h1 className="font-bold text-2xl  md:text-4xl ">Hi, i am Clopy</h1>
      <p className="text-lg text-center px-4 md:text-2xl  leading-tight ">I am a multidisciplinary design researcher and artist navigating experiences, technology, and crafts. My creative process thrives on collaboration, using participatory methods to understand and address social and community needs, contributing to positive change.See my work below!</p>
     </section>

     <section className="flex gap-8 flex-col">
     
      <div className="gap-4 md:gap-8 flex justify-center items-center">

        <Link className=" bg-[#E2DFCF] text-center min-w-[150px] md:min-w-[200px] text-black  md:text-xl rounded-full py-5 px-2 font-bold
          outline-2 outline-dashed outline-offset-[-4px] outline-[#4B70A6]
          active:scale-95 active:shadow-[inset_0_0_8px_rgba(0,0,0,0.40)]
          hover:bg-[#d86c49] hover:text-white hover:outline-[#FFFEFB]
          transition-all" href={"/projects/hci"}>
          HCI PROJECTS
          {/* <CardCategoryProjects title="HUMAN-COMPUTER INTERACTION" imageUrl="/projects/human-computer-interaction/cover-HCI.webp" p="Explore HCI projects"/> */}
        </Link>
        <Link className=" bg-[#E2DFCF] min-w-[150px] md:min-w-[200px] text-center text-black md:text-xl rounded-full py-5 px-2 font-bold
          outline-2 outline-dashed outline-offset-[-4px] outline-[#4B70A6]
          active:scale-95 active:shadow-[inset_0_0_8px_rgba(0,0,0,0.40)]
          hover:bg-[#d86c49] hover:text-white hover:outline-[#FFFEFB]
          transition-all" href={"/projects/textiles"}>
          TEXTILE PROJECTS
          {/* <CardCategoryProjects title="TEXTILE" imageUrl="/projects/textile/cover-textile.webp" p="Explore Textile projects"/> */}
        </Link>
      </div>

      <div className="gap-4 md:gap-8 flex flex-wrap justify-center items-center">
        <Link className=" bg-[#E2DFCF] text-center min-w-[100px] md:min-w-[120px] text-black  md:text-xl rounded-full py-3 px-2  font-bold
          outline-2 outline-dashed outline-offset-[-4px] outline-[#4B70A6]
          active:scale-95 active:shadow-[inset_0_0_8px_rgba(0,0,0,0.40)]
          hover:bg-[#d86c49] hover:text-white hover:outline-[#FFFEFB]
          transition-all" href={"/exhibition"}>
          Exhibition
        </Link>
        <Link className=" bg-[#E2DFCF] min-w-[100px] md:min-w-[120px] text-center text-black md:text-xl rounded-full py-3 px-2 font-bold
          outline-2 outline-dashed outline-offset-[-4px] outline-[#4B70A6]
          active:scale-95 active:shadow-[inset_0_0_8px_rgba(0,0,0,0.40)]
          hover:bg-[#d86c49] hover:text-white hover:outline-[#FFFEFB]
          transition-all" href={"/publications"}>
          Publications
        </Link>
        <Link className=" bg-[#E2DFCF] min-w-[100px] md:min-w-[120px] text-center text-black md:text-xl rounded-full py-3 px-2  font-bold
          outline-2 outline-dashed outline-offset-[-4px] outline-[#4B70A6]
          active:scale-95 active:shadow-[inset_0_0_8px_rgba(0,0,0,0.40)]
          hover:bg-[#d86c49] hover:text-white hover:outline-[#FFFEFB]
          transition-all" href={"/contact-me"}>
          Contact Me
        </Link>
        <Link className=" bg-[#E2DFCF] min-w-[100px] md:min-w-[120px] text-center text-black md:text-xl rounded-full py-3 px-2 font-bold
          outline-2 outline-dashed outline-offset-[-4px] outline-[#4B70A6]
          active:scale-95 active:shadow-[inset_0_0_8px_rgba(0,0,0,0.40)]
          hover:bg-[#d86c49] hover:text-white hover:outline-[#FFFEFB]
          transition-all" href={"https://docs.google.com/document/d/149Ehni8C9ZHilrNiPKCl9Q41MMyBbDRIrnHz4oZMqFw/edit?tab=t.0"} target="_blank">
          CV
        </Link>

      </div>
     </section>
  
    </main>
  );
}
