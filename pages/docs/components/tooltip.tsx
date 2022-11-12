import React from 'react'
import Import from '../../../components/blockcodes/ImportBlockCode'
import TooltipBlockCode from '../../../components/blockcodes/tooltip/TooltipBlockCode'
import TooltipSingleDemo from '../../../components/blockcodes/tooltip/TooltipSingleDemo'
import Demo from '../../../components/Demo'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const tooltip = () => {
  return (
    <Layout>
      <Header
        title='Tooltip'
        description='A tooltip is a brief, informative message that appears when a user interacts with an element.'
      />
      <section className='relative'>
        <Demo />
        <br />
        <br />
        <div>
          <h2 className='text-slate-200 text-xl tracking-tight font-bold mb-3'>
            Import
          </h2>
        </div>
        <Import component='Tooltip' />
        <br />
        <br />
        <div>
          <h2 className='text-slate-200 text-xl tracking-tight font-bold mb-3'>
            Usage
          </h2>
          <br />
          <h3 className='text-slate-200 text-lg tracking-tight font-bold mb-3'>
            Tooltip with command props
          </h3>
        </div>
        <TooltipSingleDemo type='button' />
        <TooltipBlockCode
          type='button'
          label={'Hey, I am a tooltip'}
          command='Ctrl + B'
        />
        <br />
        <br />
        <div>
          <h3 className='text-slate-200 text-lg tracking-tight font-bold mb-3'>
            With an icon
          </h3>
        </div>
        <TooltipSingleDemo type='icon' />
        <TooltipBlockCode type='icon' label={'Hey, I am a tooltip'} />
        <br />
        <br />
        <div>
          <h2 className='text-slate-200 text-xl tracking-tight font-bold mb-3'>
            Placement
          </h2>
        </div>
      </section>
    </Layout>
  )
}

export default tooltip
