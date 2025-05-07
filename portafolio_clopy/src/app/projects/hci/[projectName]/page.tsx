
import GalleryModal from '@/components/GalleryModal';
import { projects } from '@/data/projects'
import Link from 'next/link';
import { notFound } from 'next/navigation'


export default async function ProjectDetailPage ({ params }: { params: Promise<{ projectName: string }> }) {
    const { projectName } = await params;
    const project = projects.find(p => p.slug === projectName);
  
    if (!project) return notFound();

  
    return (
      <article className="flex flex-col pt-40 px-6 md:max-w-[1000px] mx-auto ">
        <div className='mb-4'>

        <Link href="/projects/hci" className=" font-bold underline text-lg underline-offset-4 decoration-[2px] hover:text-[#4B70A6] mb-6 ">
            ← − −  Back to HCI Projects
        </Link>
        </div>
        <section className='flex flex-col items-center '>
        <h1 className="text-4xl font-bold ">{project.title}</h1>
        <h3 className='text-xl text-gray-700 mb-4'>{project.subTittle}</h3>
        <div>
        <img src={project.banner.url} alt={project.title} className=" max-h-[800px] rounded-xl" />
        <p className='text-lg text-center mb-6 text-gray-700'>{project.banner.subtitle}</p>
        </div>
        <p className="mb-6 text-lg leading-tight text-pretty" dangerouslySetInnerHTML={{ __html: project.introduction }}/>
      

        {/* render de imagen */}
        {project.imageInformation && (
          <div className="mb-6 w-full max-w-3xl ">
            <img loading='lazy' className='rounded-xl' src={`${project.imageInformation}`} alt={`${project.title}`} />
          </div>
        )}
        {/* redner de video */}
        {project.video && (
          <div className="mb-6 w-full max-w-3xl">
            <iframe
              className='rounded-xl w-full min-h-[250px] md:h-[450px]'
              src={project.video}
              title="YouTube video player"
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              
            ></iframe>
            <p className='text-center text-lg'>For a more immersive experience, check out the video!</p>
          </div>
        )}
        <p className='mb-6 text-xl text-pretty leading-tight'dangerouslySetInnerHTML={{ __html: project.information? project.information: "" }} />
         {/* gallery component */}
      {project.gallery && project.gallery.length > 0 && (
        <GalleryModal gallery={project.gallery} />
      )}
      {project.lastBanner && (
        <div>
          <img src={project.lastBanner} alt={project.title} className=" rounded-xl" />
        </div>

      )}
      {/* otra infromacion */}
       <p className='mb-6 text-xl text-pretty'dangerouslySetInnerHTML={{ __html: project.otherimfortmation? project.otherimfortmation: "" }} />
       
        {/* boton para subir el scroll */}
       
        </section>
        <section>
            {/* aqui va a haber cards de los otros proyectos */}
            <h2 className="text-2xl font-bold mb-4">Otros Proyectos</h2>
        </section>
     
      </article>
      
    );
  }