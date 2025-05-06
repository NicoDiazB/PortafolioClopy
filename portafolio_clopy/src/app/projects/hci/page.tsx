import { ProjectsSection } from '@/components/ProjectsSection'
import { projects } from '@/data/projects'
import React from 'react'



 const ProjectsHci:React.FC = () => {
  return (
    <div className='flex flex-col items-center '>
        <ProjectsSection sectionTitle='HUMAN-COMPUTER INTERACTION' sectionDescription='I have experience with participatory Design approach and Generative Design Research. My collaborative social practices help me explore new ideas. With expertise in design and crafts, my passion for textiles keeps my creative flame alive and fuels my ability to interweave technology and creativity.' projects={projects} type='hci'/>
    </div>
  )
}

export default ProjectsHci