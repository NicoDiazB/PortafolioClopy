import { ButtonProps } from '@/interfaces'
import React from 'react'



export const Btn: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false
}) => {
    
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-fit bg-[#E2DFCF] text-black rounded-xl py-2 px-3 font-bold
        outline-2 outline-dashed outline-offset-[-4px] outline-[#4B70A6]
        active:scale-95 active:shadow-[inset_0_0_8px_rgba(0,0,0,0.40)]
        hover:bg-[#d86c49] hover:text-white hover:outline-[#FFFEFB]
        transition-all duration-150
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
