import Link from 'next/link'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/router'

const installation = () => {
  const router = useRouter()

  const Menus = [
    {
      title: 'Getting Started',
      submenu: true,
      submenuItems: [
        { title: 'Installation', href: '/docs/installation' },
        { title: 'Editor Setup', href: '/docs/editor-setup' },
        {
          title: 'Using with Preprocessors',
          href: '/docs/using-with-preprocessors',
        },
      ],
    },
    {
      title: 'Core Concepts',
      submenu: true,
      submenuItems: [
        { title: 'Utility-First Fundamentals', href: '/docs/utility-first' },
        {
          title: 'Handling Hover, Focus, and Other States',
          href: '/docs/hover-focus-and-other-states',
        },
        {
          title: 'Responsive Design',
          href: '/docs/responsive-design',
        },
      ],
    },
    {
      title: 'Customization',
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: 'Configuration', href: '/docs/configuration' },
        { title: 'Content', href: '/docs/content-configuration' },
        {
          title: 'Theme',
          href: '/docs/theme',
        },
      ],
    },
  ]

  return (
    <div className='flex'>
      <aside className='h-screen bg-slate-900 p-5 pt-8 w-72 lg:text-sm lg:w-72 lg:flex-shrink-0'>
        <div className='flex items-center rounded-md bg-slate-800 mt-6 px-4 py-2'>
          <BsSearch className='text-white text-lg block float-left cursor-pointer mr-2' />
          <input
            type={'search'}
            placeholder='Quick Search'
            className='text-base bg-transparent w-full text-white focus:outline-none'
          />
        </div>
        <ul className='pt-2'>
          {Menus.map((menu, index) => (
            <li key={index} className='mt-12 lg:mt-8'>
              <h5 className='mb-8 lg:mb-3 font-semibold text-slate-200'>
                {menu.title}
              </h5>
              {menu.submenu && (
                <ul className='space-y-6 lg:space-y-2 border-l border-slate-800'>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li key={index}>
                      <Link
                        href={submenuItem.href}
                        className={`block border-l pl-4 -ml-px border-transparent  hover:text-slate-300 ${
                          router.asPath === submenuItem.href
                            ? 'text-sky-400 border-sky-400 hover:border-sky-400'
                            : 'text-slate-400 hover:border-slate-500'
                        } `}
                      >
                        {submenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <main className='bg-slate-900 flex w-0 flex-1 flex-col overflow-hidden px-12 py-10'>
        <p className='text-white'>Get started with Serity UI</p>
      </main>
    </div>
  )
}

export default installation
