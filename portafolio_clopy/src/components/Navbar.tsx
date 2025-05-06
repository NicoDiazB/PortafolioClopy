"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const isActive = (href: string) => {
    return pathname === href || (href === '/' && pathname === '/')
  }

  const linkClasses = (href: string) =>
    `${isActive(href) ? 'font-bold' : 'font-normal'} transition-all duration-150`

  return (
    <nav className={`backdrop-blur-lg fixed flex items-center w-full px-8 bg-opacity-90 z-50 md:h-24 md:px-24 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full items-center">
        <div className="flex items-center h-16 justify-between">
          <div className="hidden md:flex items-center gap-20 md:text-2xl">
            <Link href="/" className={linkClasses('/')}>HOME</Link>
            <Link href="/projects/hci" className={linkClasses('/projects/hci')}>HCI PROJECTS</Link>
            <Link href="/projects/textiles" className={linkClasses('/projects/textiles')}>TEXTILE PROJECTS</Link>
            <Link href="/contact-me" className={linkClasses('/contact-me')}>CONTACT</Link>
            <a href='https://docs.google.com/document/d/149Ehni8C9ZHilrNiPKCl9Q41MMyBbDRIrnHz4oZMqFw/edit?tab=t.0' target='_blank' className="font-normal">
              CV
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <img className='absolute -top-1 left-1 ' src="/projects/hamburguesas-05.png" alt="Menu" width={70}/> : <img className='absolute top-0 left-0 ' src="/projects/hamburguesas-06.png" alt="Menu" width={70}/>}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 text-xl">
              <Link href="/" className={linkClasses('/')}>HOME</Link>
              <Link href="/projects/hci" className={linkClasses('/projects/hci')}>HCI PROJECTS</Link>
              <Link href="/projects/textiles" className={linkClasses('/projects/textiles')}>TEXTILE PROJECTS</Link>
              <Link href="/contact-me" className={linkClasses('/contact-me')}>CONTACT</Link>
              <a href='https://docs.google.com/document/d/149Ehni8C9ZHilrNiPKCl9Q41MMyBbDRIrnHz4oZMqFw/edit?tab=t.0' target='_blank' className="font-normal">
                CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
