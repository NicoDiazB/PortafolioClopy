import { ProjectsSection } from '@/components/ProjectsSection'
import { projects } from '@/data/projects'
import Link from 'next/link'
import React from 'react'



 const ProjectsTextiles:React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
        <ProjectsSection sectionTitle='TEXTILES' sectionDescription='Explore my Artistic Work!' projects={projects} type='textiles'/>
    </div>
  )
}

export default ProjectsTextiles