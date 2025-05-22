import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className=' h-40 mt-20 flex items-center justify-center border-t-4 border-dashed border-[#d86c49]'>
      <Link href={"/contact-me"} className='rounded-3xl text-[#d86c49] font-bold text-3xl md:text-5xl px-2 md:px-4  border-5 border-double hover:cursor-pointer hover:text-[#4B70A6] hover:border-[#4B70A6]'> curious? <br /> Let’s talk</Link>
    </footer>
  )
}
