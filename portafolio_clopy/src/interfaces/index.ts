 export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    className?: string
    disabled?: boolean
  }

  export interface CardProyectProps {
    title: string
    imageUrl: string
  }
  
export interface Project{
  id: string
  title: string
  description: string
  image: string
  slug?: string // si quieres tener rutas dinámicas tipo /projects/hci-project-1
  category: 'HCI' | 'Textile' | 'Commisioned'
}

export interface ProjectsSectionProps {
    sectionTitle: string
    sectionDescription: string
    projects: Project[]


}