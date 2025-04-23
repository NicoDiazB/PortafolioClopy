import { ProjectsSectionProps } from '@/interfaces'
import React from 'react'
import { CardProject } from './CardProject'
import Link from 'next/link'




export const ProjectsSection: React.FC<ProjectsSectionProps> = ({sectionTitle, sectionDescription, projects, type}) => {
  
   // Filter projects by category (e.g., "HCI Projects")
   const filteredProjects = projects.filter((proj) =>
    proj.categories.includes(type) // Change 'HCI' to the desired category
  );


  
  return (
    
    <section className=" flex flex-col items-center gap-4 pt-60">
    <h2 className="text-xl md:text-3xl font-bold mb-4">{sectionTitle}</h2>
    <p className="mb-10 max-w-[1000px] leading-tight text-lg md:text-xl">{sectionDescription}</p>
    <div className="grid gap-8 grid-cols-2 md:grid-cols-3 ">
      {filteredProjects.map((proj, index) => (
        // map para los poryectos
        <Link href={`/projects/${type}/${proj.slug.toLowerCase().replace(/ /g, "-")}`} key={index}>
        <CardProject  title={proj.title} imageUrl={proj.cover? proj.cover : proj.banner.url} date={proj.date} />
        </Link>
      ))}
    </div>
  </section>
      
  )
}
