import React from 'react'
import Layout from '../../components/Layout'

const installation = () => {
  return (
    <Layout>
      <header className='flex flex-col mb-10'>
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
        <div className='relative z-10 max-w-3xl mb-16'>
          <p className='text-slate-400'>
            To use Serity UI in your project, run one of the following commands
            in your terminal:
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default installation
