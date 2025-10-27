import { getTranslations } from 'next-intl/server';
import Link from 'next/link'
import React from 'react'

export const Footer = async () => {

  const t = await getTranslations("Footer");
  return (
<footer
      role='contentinfo'
      className=" md:justify-center font-sans px-4 mt-10 pt-6 pb-3 border-t-4 border-dashed border-[#d86c49] text-center flex flex-col  items-center gap-6"
    >
      <div>
        <p className="font-bold ">{t("name")}</p>
        <p className=' text-sm'>{t("description")}</p>
       
        <p className=' text-sm'><Link className='hover:text-[#4B70A6]' href='/'>{t("website")}</Link> · <a className=' hover:text-[#4B70A6]' href='mailto:claudia.diaz.dis@gmail.com'>{t("contactEmail")}</a> {t("location")}g</p>
      </div>

      <div className='text-xs' >
        <p className="font-bold">{t("copyright")}</p>
        <p>{t("licenseDescription")}</p>
        <a className=' hover:text-[#4B70A6]' href={"https://creativecommons.org/licenses/by-sa/4.0/"}>{t("licenseLink")}</a>
      </div>
        <a className=' hover:text-[#4B70A6]' href='https://www.linkedin.com/in/nicolas-diaz-99944b232/'> {t("developedBy")}</a>
    </footer>
  )
}
