import { ReactNode } from "react"

 export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    className?: string
    disabled?: boolean
  }

  export interface CardProjectProps {
    title: string
    imageUrl: string
    date?: string
    p?: string
  }

 export interface Gallery{
  title?: string
  description?: string
  imageUrl: string
  context?:string
 } 

 interface Banner{
  url: string
  subtitle?: string
 }

export interface Project{
  id: string
  date: string
  slug: string
  title?: string
  subTittle?: string
  banner: Banner
  cover?: string
  introduction?: string
  information?: string
  imageInformation?: string
  video?: string
  gallery?: Gallery[]
  lastBanner?: string[]
  otherimfortmation?: string
  categories: string[]
}

export interface ProjectsSectionProps {
    sectionTitle: string
    sectionDescription: string
    projects: Project[]
    type: string


}

export interface IInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement|  HTMLTextAreaElement> ) => void;
    placeholder?: string;
    labelData: ReactNode;
    idInput: string;
    name: string;
    type: string;
    icon?: ReactNode;
    as?: 'input' | 'textarea';
}


export interface FormContactProps {
  name: string;
  email: string;
  message: string;
  privacyPolicy: boolean;
}