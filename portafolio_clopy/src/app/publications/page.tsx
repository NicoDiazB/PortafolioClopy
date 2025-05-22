import Link from 'next/link'
import React from 'react'

function Publications() {
  return (
    <section className='pt-40 md:pt-60'>
        <h1 className='text-2xl md:text-4xl font-bold text-center mb-6'>Publicaions</h1>
        <ol className='text-center text-lg px-4 max-w-[1000px] mx-auto flex flex-col gap-8'>
            <li className='md:text-xl list-decimal leading-tight '>
                Neves, I. R., Diaz Reyes, C., Pachi, I., Demir, A. D., & Kuusk, K. (2021). Creative exchange through joint responsibility: designing performances in multidisciplinary teams in the educational context. Research in Arts and Education, 2021(1), 72–101. <Link className='font-bold hover:text-[#4B70A6]' href="https://doi.org/10.54916/rae.119319">Link</Link>
            </li>
            <li className='md:text-xl list-decimal leading-tight'>
               Sion, Y., Diaz Reyes, C., Lamas, D., & Mokhalled, M. (2023, February). Vibmory-Mapping Episodic Memories to Vibrotactile Patterns. In Proceedings of the Seventeenth International Conference on Tangible, Embedded, and Embodied Interaction (pp. 1-12). <Link className='font-bold hover:text-[#4B70A6]' href="https://doi.org/10.1145/3569009.3572747">Link</Link>
            </li>
            <li className='md:text-xl list-decimal leading-tight'>
                Campos, I., Fuchs, D., Repo, P., Jager, W., Klöckner, C., Wang, S., Lamas, D., Cots, F., Barchiesi, E., Löfström, E., Peniche, D., Sion, Y., Buth, V., Limão, J., Oliveira, S., Diaz, C. R., & Živčič, L. (2024). What roles can democracy labs play in co-creating democratic innovations for sustainability? Socio-Ecological Practice Research.  <Link className='font-bold hover:text-[#4B70A6]' href="https://doi.org/10.1007/s42532-024-00197-7">Link</Link>
            </li>
            <li className='md:text-xl list-decimal leading-tight'>
                Diaz Reyes, C & Vračarević, S (2025, September 3-6). Sensing Connections. [Presentation Open Panel with Intervention Co-razonar] 4S Annual Meeting (Society for Social Studies of Science), Seattle, WA, United States. 
            </li>
        </ol>
        
        
    </section>
  )
}

export default Publications
