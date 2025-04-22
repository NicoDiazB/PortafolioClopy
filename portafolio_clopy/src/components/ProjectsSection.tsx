import { ProjectsSectionProps } from '@/interfaces'
import React from 'react'
import { CardProyect } from './CardProyect'
import Link from 'next/link'




export const ProjectsSection: React.FC<ProjectsSectionProps> = ({sectionTitle, sectionDescription, projects}) => {
  return (
    
    <section className=" flex flex-col items-center gap-4 pt-60">
    <h2 className="text-xl md:text-3xl font-bold mb-4">{sectionTitle}</h2>
    <p className="mb-10 max-w-[1000px] leading-tight text-lg md:text-xl">{sectionDescription}</p>
    <div className="grid gap-8 grid-cols-2 md:grid-cols-3 ">
      {projects.map((proj, index) => (
        // map para los poryectos
        <Link href={`/projects/hci/${proj.slug.toLowerCase().replace(/ /g, "-")}`} key={index}>
        <CardProyect key={index} title={proj.title} imageUrl={proj.cover? proj.cover : proj.banner.url} date={proj.date} />
        </Link>
      ))}
    </div>
  </section>
      
  )
}
