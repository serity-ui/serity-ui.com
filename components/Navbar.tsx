import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '../public/logo.svg'
import { useRouter } from 'next/router'
import { AiFillGithub } from 'react-icons/ai'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import { HiDotsVertical } from 'react-icons/hi'
import { useTheme } from 'next-themes'

import en from '../locales/en'
import es from '../locales/es'

const Navbar = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
  }

  return (
    <header className='h-16 w-full sticky top-0 left-0 z-[9997] backdrop-blur-lg backdrop-saturate-[180%] bg-[rgba(255,255,255,0.72)] dark:bg-[rgba(0,0,0,.72)]'>
      <div className='flex items-center justify-between h-full mx-auto flex-wrap px-7 w-11/12 max-w-[90rem]'>
        <Link href='/'>
          <Image
            className='text-white'
            alt='Serity UI logo'
            src={Logo}
            width={26}
            height={26}
          />
        </Link>
        <HiDotsVertical
          className='lg:hidden block h-5 w-5 cursor-pointer text-white'
          onClick={() => setOpen(!open)}
        />

        <nav className={`${open ? 'block' : 'hidden'} lg:block`}>
          <ul className='lg:flex lg:gap-7'>
            <li>
              <Link
                className='text-[rgba(0,0,0,0.88)] dark:text-white  block hover:text-[rgba(56,189,248,1)]'
                href='/docs/installation/'
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                className='text-slate-700 dark:text-white  block hover:text-[rgba(56,189,248,1)]'
                href='/docs/components/select'
              >
                {t.components}
              </Link>
            </li>
            <div className='w-[1px] h-6 bg-slate-400'></div>
            <li>
              <select
                className='bg-transparent text-slate-700 dark:text-white  text-sm focus-visible:outline-none'
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
            <li className='flex items-center'>
              <button
                className='text-slate-700 dark:text-slate-200'
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
              </button>
            </li>
            <li className='flex items-center'>
              <Link
                className='text-slate-700 dark:text-white'
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
