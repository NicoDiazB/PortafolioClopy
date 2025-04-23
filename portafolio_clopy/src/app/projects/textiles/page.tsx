import { ProjectsSection } from '@/components/ProjectsSection'
import { projects } from '@/data/projects'
import React from 'react'



 const ProjectsTextiles:React.FC = () => {
  return (
    <div>
        <ProjectsSection sectionTitle='TEXTILES' sectionDescription='Explore my Artistic Work!' projects={projects} type='textiles'/>
    </div>
  )
}

export default ProjectsTextiles