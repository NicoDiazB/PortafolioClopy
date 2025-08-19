import { getTranslations } from 'next-intl/server';
import React from 'react'

async function Publications() {
    const t = await getTranslations("Publications");


  return (
    <section className='pt-40 md:pt-60'>
        <h1 className='text-2xl md:text-4xl font-bold text-center mb-6'>{t("title")}</h1>
        <ol className='text-start text-lg px-4 max-w-[1000px] font-mono mx-auto flex flex-col gap-8'>
            <li className='md:text-xl list-decimal leading-tight '>
                <p 
               dangerouslySetInnerHTML={{ __html: t.raw(`items.0`) }}
               />
            </li>
            <li className='md:text-xl list-decimal leading-tight'>
              <p 
               dangerouslySetInnerHTML={{ __html: t.raw(`items.1`) }}
               />
            </li>
            <li className='md:text-xl list-decimal leading-tight'>
                <p 
               dangerouslySetInnerHTML={{ __html: t.raw(`items.2`) }}
               />
            </li>
            <li className='md:text-xl list-decimal leading-tight'>
                <p 
               dangerouslySetInnerHTML={{ __html: t.raw(`items.3`) }}
               />
            </li>
        </ol>
        
        
    </section>
  )
}

export default Publications
