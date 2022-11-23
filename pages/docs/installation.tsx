import React from 'react'
import Layout from '../../components/Layout'
import UsageBlockCode from '../../components/blockcodes/UsageBlockCode'
import InstallationBlockCode from '../../components/blockcodes/InstallationBlockCode'
import Link from 'next/link'
import Header from '../../components/Header'
import Heading from '../../components/heading/Heading'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import es from '../../locales/es'

const installation = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es

  return (
    <Layout>
      <Header
        title={t.get_started_with_serity_ui}
        description='Serity UI is a simple, modular and accessible component library that
          gives you ready-to-use React components.'
      />
      <section className='relative z-10 max-w-3xl mb-6'>
        <Heading>{t.installation}</Heading>
        <p className='text-slate-700 dark:text-slate-200'>
          To use Serity UI in your project, run the following command in your
          terminal:
        </p>
        <InstallationBlockCode />
      </section>
      <section className='relative z-10 max-w-3xl mb-6'>
        <Heading>{t.usage}</Heading>
        <p className='text-slate-700 dark:text-slate-200'>
          After installing Serity UI, you can start importing the components you
          want to use in your React project. In this example we are going to use
          the <code className='text-purple-300'>Tooltip</code> component.
        </p>
        <UsageBlockCode />
      </section>
      <section className='relative'>
        <Heading>Framework Guide</Heading>

        <div className='relative z-10 max-w-3xl mb-6'>
          <p className='text-slate-700 dark:text-slate-400'>
            Framework-specific guides that cover our recommended approach to
            installing Serity UI.
          </p>
        </div>
        <ul className='grid grid-cols-1 gap-x-6 gap-y-10 mt-8 sm:grid-cols-2 xl:grid-cols-3'>
          <li className='relative flex flex-row-reverse'>
            <div className='peer group ml-6 flex-auto'>
              <h4 className='mb-2 leading-6 text-slate-200 font-semibold'>
                <Link
                  className='before:absolute before:-inset-3 before:rounded-2xl'
                  href='/docs/guides/nextjs'
                >
                  Next.js
                  <svg
                    viewBox='0 0 3 6'
                    className='ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
                  >
                    <path
                      d='M0 0L3 3L0 6'
                      fill='none'
                      stroke-width='2'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                </Link>
              </h4>
              <p className='text-sm leading-6 text-slate-400'>
                Full-featured React framework wihth great developer experience.
              </p>
            </div>
            <div className='flex-none w-14 h-14 rounded-full ring-1 ring-slate-900/5 shadow flex-items-center justify-center overflow-hidden bg-slate-800 highlight-white/5'></div>
            <div className='absolute -z-10 -inset-3 rounded-2xl bg-slate-800/50 opacity-0 peer-hover:opacity-100'></div>
          </li>
          <li className='relative flex flex-row-reverse'>
            <div className='peer group ml-6 flex-auto'>
              <h4 className='mb-2 leading-6 text-slate-200 font-semibold'>
                <Link
                  className='before:absolute before:-inset-3 before:rounded-2xl'
                  href='/docs/guides/nextjs'
                >
                  Vite
                  <svg
                    viewBox='0 0 3 6'
                    className='ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
                  >
                    <path
                      d='M0 0L3 3L0 6'
                      fill='none'
                      stroke-width='2'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                </Link>
              </h4>
              <p className='text-sm leading-6 text-slate-400'>
                Fast and modern development server and build tool.
              </p>
            </div>
            <div className='flex-none w-14 h-14 rounded-full ring-1 ring-slate-900/5 shadow flex-items-center justify-center overflow-hidden bg-slate-800 highlight-white/5'></div>
            <div className='absolute -z-10 -inset-3 rounded-2xl bg-slate-800/50 opacity-0 peer-hover:opacity-100'></div>
          </li>
          <li className='relative flex flex-row-reverse'>
            <div className='peer group ml-6 flex-auto'>
              <h4 className='mb-2 leading-6 text-slate-200 font-semibold'>
                <Link
                  className='before:absolute before:-inset-3 before:rounded-2xl'
                  href='/docs/guides/nextjs'
                >
                  Create React App
                  <svg
                    viewBox='0 0 3 6'
                    className='ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
                  >
                    <path
                      d='M0 0L3 3L0 6'
                      fill='none'
                      stroke-width='2'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                </Link>
              </h4>
              <p className='text-sm leading-6 text-slate-400'>
                CLI tool for scaffolding a new single-page React application.
              </p>
            </div>
            <div className='flex-none w-14 h-14 rounded-full ring-1 ring-slate-900/5 shadow flex-items-center justify-center overflow-hidden bg-slate-800 highlight-white/5'></div>
            <div className='absolute -z-10 -inset-3 rounded-2xl bg-slate-800/50 opacity-0 peer-hover:opacity-100'></div>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default installation
