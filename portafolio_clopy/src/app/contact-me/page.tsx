import { FormContact } from '@/components/FormContact'
import { getTranslations } from 'next-intl/server'
import React from 'react'

async function ContactMe() {

  const t = await getTranslations("ContactMe")

  return (
    <section className='pt-40 md:pt-60'>
        <h1 className='text-2xl md:text-4xl font-bold text-center '>{t("title")}</h1>
        <p className='text-center text-lg px-4'>{t("description")}</p>
        <div className='flex flex-col items-center justify-center '>
          <FormContact/>
        </div>
    </section>
  )
}

export default ContactMe