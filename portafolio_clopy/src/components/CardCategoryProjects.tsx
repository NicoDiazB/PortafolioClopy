import { CardProyectProps } from '@/interfaces'
import React from 'react'


export const CardCategoryProjects: React.FC<CardProyectProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative w-full max-w-md h-90 rounded-lg overflow-hidden group cursor-pointer shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-black text-2xl font-bold drop-shadow-md text-center px-4">{title}</span>
      </div>
    </div>
  )
}