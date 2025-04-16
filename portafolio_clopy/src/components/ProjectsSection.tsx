import { ProjectsSectionProps } from '@/interfaces'
import React from 'react'
import { CardProyect } from './CardProyect'




export const ProjectsSection: React.FC<ProjectsSectionProps> = ({sectionTitle, sectionDescription, projects}) => {
  return (
    <section className="py-16 px-4 md:px-20">
    <h2 className="text-3xl md:text-5xl font-bold mb-4">{sectionTitle}</h2>
    <p className="mb-10 max-w-2xl text-lg">{sectionDescription}</p>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj, index) => (
        // map para los poryectos
        <CardProyect key={index} title={proj.title} imageUrl={proj.image} />
      ))}
    </div>
  </section>
  )
}
