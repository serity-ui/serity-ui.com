import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '../public/logo.svg'
import { useRouter } from 'next/router'
import { AiFillGithub } from 'react-icons/ai'
import { BsMoonFill } from 'react-icons/bs'
import { HiDotsVertical } from 'react-icons/hi'

import en from '../locales/en'
import es from '../locales/es'

const Navbar = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es
  const [open, setOpen] = useState(false)

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
  }

  return (
    <header className='h-16 w-11/12 mx-auto rounded-lg bg-white/[0.15]'>
      <div className='flex items-center justify-between h-full px-7 flex-wrap w-full'>
        <Image
          className='text-white'
          alt='Serity UI logo'
          src={Logo}
          width={26}
          height={26}
        />

        <HiDotsVertical
          className='lg:hidden block h-5 w-5 cursor-pointer text-white'
          onClick={() => setOpen(!open)}
        />

        <nav className={`${open ? 'block' : 'hidden'} lg:block`}>
          <ul className='lg:flex lg:gap-7'>
            <li>
              <Link
                className='text-white block hover:text-[rgba(56,189,248,1)]'
                href='/docs/installation/'
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                className='text-white block hover:text-[rgba(56,189,248,1)]'
                href='https://github.com/edman-cota/serity-ui.com'
              >
                {t.components}
              </Link>
            </li>
            <div className='w-[1px] h-6 bg-slate-300'></div>
            <li>
              <select
                className='bg-transparent text-white text-sm focus-visible:outline-none'
                onChange={changeLanguage}
                defaultValue={locale}
              >
                <option value='en' className='text-black text-sm'>
                  EN
                </option>
                <option value='es' className='text-black text-sm'>
                  ES
                </option>
              </select>
            </li>
            <li>
              <Link
                className='text-white flex items-center'
                href='https://github.com/edman-cota/serity-ui.com'
              >
                <BsMoonFill />
              </Link>
            </li>
            <li>
              <Link
                className='text-white flex items-center'
                target='_blank'
                href='https://github.com/serity-ui/serity-ui'
              >
                <AiFillGithub />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
