import { ProjectsSection } from '@/components/ProjectsSection'
import { projects } from '@/data/projects'
import { getTranslations } from 'next-intl/server'
import React from 'react'



 const ProjectsHci:React.FC = async () => {

  const t = await getTranslations("ProjectHCI")
  
  return (
    <div className='flex flex-col items-center '>
        <ProjectsSection sectionTitle={t("title")} sectionDescription={t("description")} projects={projects} type='hci'/>
    </div>
  )
}

export default ProjectsHci