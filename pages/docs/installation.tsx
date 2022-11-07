import React from 'react'
import Layout from '../../components/Layout'

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
        <div className='bg-[#1E293B] px-6 py-6  rounded-lg'>
          <pre>
            <code>npm install @serity-ui/react</code>
          </pre>
        </div>
        <div>
          <h2 className='text-slate-200 text-xl tracking-tight font-bold mb-3 mt-10'>
            Usage
          </h2>
        </div>
        <div className='relative z-10 max-w-3xl mb-6'>
          <p className='text-slate-400'>
            After installing Serity UI, you can start importing the components
            you want to use in your React project.
          </p>
        </div>
        <div className='bg-[#1E293B] px-6 py-6  rounded-lg'>
          <div>
            <div>
              <pre>
                <div className='text-[#d6deeb]'>
                  <span className='text-teal-400'>import</span>
                  <span> &#123; Tooltip &#125; </span>
                  <span className='text-teal-400'>from</span>
                  <span className='text-lime-500'> '@serity-ui/react'</span>
                </div>
              </pre>
            </div>
          </div>
          <button></button>
        </div>
      </section>
    </Layout>
  )
}

export default installation
