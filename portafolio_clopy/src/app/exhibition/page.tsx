import Link from 'next/link'
import React from 'react'

function Exhibition() {
  return (
    <section className='pt-40 md:pt-60'>
        <h1 className='text-2xl md:text-4xl font-bold text-center mb-6'>Exhibitions</h1>
        <ol className='text-center text-lg px-4 max-w-[1000px] mx-auto flex flex-col gap-8'>
            <li className='md:text-xl list-disc leading-tight '>
               Estonian Textile Artist’s Association annual exhibition. Eesti Tekstiilikunstnike Liidu aastanä itus “ Eluoluline” . Dzeltenās bērnības maģ iskajāvietā- In the magic place of the yellow ( sunny) childhood from Latvian language- . By Zane Shumeiko and Claudia Diaz Reyes displays seven textile pieces with a sensorial mix between digital and analogue author’ s techniques [2. 12. 2022- 7. 01. 2023. Tartu- Estonia].
            </li>
            <li className='md:text-xl list-disc leading-tight'>
               ARS Showroom # 039 “Perforeeritud igatsus” / Punching Longing. An Interwoven Journey Though A Crafted Memory is an emotive exploration of longing; translating memories through music and weaving. Inspired by Colombia’ s context and missing persons; it seeks to honour those in uncertainty. The project intertwines music and fabric using punched cards; uncovering metaphors in materials and colours. It blends personal experiences with other’s memories; offering solace in remembrance. The result displays six woven pieces; narrating stories of joy from diverse perspectives. By Claudia Diaz Reyes. ARS Showroom galerii [28. 05. – 22. 06. 2022. Tallinn | Estonia].
            </li>
            <li className='md:text-xl list-disc leading-tight '>
                Second Chance @ World Design Capital Valencia. Blanda is tension. Tradition and technology intertwine; and everyday life wants to become a special object this time. What unites them? An accessory that comes close to jewellery in order to appreciate another view of the knitted fabric. A process that travelled from different materials and scales through knitting. By Claudia Diaz Reyes [2022 9. 5 - 19. 5. 2022. Valencia | Spain] <Link className='font-bold hover:text-[#4B70A6]' href={"https://www.wdcvalencia2022.com"}>Link</Link>
            </li>
            <li className='md:text-xl list-disc leading-tight'>
               Disainö ö 2021 Without measuring distances. Woven and interactive pieces / as part of the Research project “ Sensorial Design”. [September 2021. Tallinn | Estonia.]
            </li>
        </ol>
        
        
    </section>
  )
}

export default Exhibition