import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
<footer
      role='contentinfo'
      className=" md:justify-center font-sans px-4 mt-10 pt-6 pb-3 border-t-4 border-dashed border-[#d86c49] text-center flex flex-col  items-center gap-6"
    >
      <div>
        <p className="font-bold ">Clopy Diaz Reyes</p>
        <p className=' text-sm'>Textile artist & participatory designer Working with memory, relation, and tactile practices</p>
       
        <p className=' text-sm'><Link className=' hover:text-[#4B70A6]' href='/'>clopy.co</Link> · <a className=' hover:text-[#4B70A6]' href='mailto:claudia.diaz.dis@gmail.com'>Contact email</a> · Based wherever hands are making</p>
      </div>

      <div className='text-xs' >
        <p className="font-bold">Copyleft Claudia Diaz Reyes, 2025</p>
        <p>This work is meant to be shared, transformed, and passed on. Please credit when you do, and keep the thread open for others.</p>
        
        <a className=' hover:text-[#4B70A6]' href={"https://creativecommons.org/licenses/by-sa/4.0/"}>Licensed under CC BY-SA 4.0</a>
      </div>
    </footer>
  )
}
