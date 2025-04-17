import { CardProyectProps } from '@/interfaces'
import React from 'react'


export const CardProyect: React.FC<CardProyectProps> = ({ title, imageUrl, date }) => {
  return (
    <div className="relative w-full max-w-md h-90 rounded-lg overflow-hidden group cursor-pointer shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
      />
      <div className="absolute flex-col pt-8 inset-0 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-black text-2xl font-bold drop-shadow-md text-center px-4">{title}</span>
      <span className="text-black text-xl font-bold drop-shadow-md text-center px-4">{date}</span>
      </div>
    </div>
  )
}