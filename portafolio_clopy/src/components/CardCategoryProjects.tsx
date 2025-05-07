import { CardProjectProps } from '@/interfaces'
import React from 'react'


export const CardCategoryProjects: React.FC<CardProjectProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative h-fit max-w-lg rounded-lg  group cursor-pointer ">
      <img
        src={imageUrl}
        alt={title}
        className=" transition-opacity duration-300 group-hover:opacity-50 "
        loading='lazy'
        />
        <p className='absolute bottom-5 left-10 z-50 text-lg font-bold'>Click on the image</p>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-black text-2xl font-bold drop-shadow-md text-center px-4">{title}</span>
      </div>
    </div>
  )
}