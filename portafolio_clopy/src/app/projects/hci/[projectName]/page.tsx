import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    projectName: string
  }
}

export default async function ProjectDetailPage({ params }: Props) {
    const { projectName } = await params;
    const project = projects.find(p => p.slug === projectName);
  
    if (!project) return notFound();
  
    return (
      <div className="pt-40 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <img src={project.banner} alt={project.title} className="mb-6 rounded-xl" />
        <p className="mb-6 text-lg">{project.introduction}</p>
        {/* aquí seguís renderizando lo demás del proyecto: información, galería, etc */}
      </div>
    );
  }