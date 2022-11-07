import React from 'react'
import Layout from '../../components/Layout'
import BlockCodeUsage from '../../components/blockcodes/Usage'
import BlockCodeInstallation from '../../components/blockcodes/Installation'

const installation = () => {
  return (
    <Layout>
      <header className='flex flex-col mb-12 mt-16'>
        <h1 className='text-3xl sm:text-4x1 font-extrabold text-slate-200 tracking-tight'>
          Get started with Serity UI
        </h1>
        <p className='mt-4 text-lg text-slate-400'>
          Serity UI is a simple, modular and accessible component library that
          gives you ready-to-use React components.
        </p>
      </header>
      <section className='mb-16 relative'>
        <div>
          <h2 className='text-slate-200 text-xl tracking-tight font-bold mb-3'>
            Installation
          </h2>
        </div>
        <div className='relative z-10 max-w-3xl mb-6'>
          <p className='text-slate-400'>
            To use Serity UI in your project, run the following command in your
            terminal:
          </p>
        </div>
        <BlockCodeInstallation />
        <div>
          <h2 className='text-slate-200 text-xl tracking-tight font-bold mb-3 mt-10'>
            Usage
          </h2>
        </div>
        <div className='relative z-10 max-w-3xl mb-6'>
          <p className='text-slate-400'>
            After installing Serity UI, you can start importing the components
            you want to use in your React project. In this example we are going
            to use the <code className='text-purple-300'>Tooltip</code>{' '}
            component.
          </p>
        </div>
        <BlockCodeUsage />
        <div>
          <h2 className='text-slate-200 text-xl tracking-tight font-bold mb-3 mt-10'>
            Demo
          </h2>
        </div>
      </section>
    </Layout>
  )
}

export default installation
