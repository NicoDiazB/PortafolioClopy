import { FormContact } from '@/components/FormContact'
import React from 'react'

function ContactMe() {
  return (
    <section className='pt-40 md:pt-60'>
        <h1 className='text-2xl md:text-4xl font-bold text-center '>Contact Me</h1>
        <p className='text-center text-lg px-4'>I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
        <div className='flex flex-col items-center justify-center '>
          <FormContact/>
        </div>
    </section>
  )
}

export default ContactMe