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
    date: string
  }

 export interface Gallery{
  title?: string
  description?: string
  imageUrl: string
 } 

export interface Project{
  id: string
  date: string
  slug: string
  title: string
  subTittle?: string
  banner: string
  cover?: string
  introduction: string
  information?: string
  video?: string
  gallery?: Gallery[]
}

export interface ProjectsSectionProps {
    sectionTitle: string
    sectionDescription: string
    projects: Project[]


}