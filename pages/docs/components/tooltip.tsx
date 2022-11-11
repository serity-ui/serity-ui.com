import React from 'react'
import Import from '../../../components/blockcodes/Import'
import Tooltip from '../../../components/blockcodes/Tooltip'
import Demo from '../../../components/Demo'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import WorkInProgress from '../../../components/WorkInProgress'

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
            Tooltip with command options
          </h3>
        </div>
        <Tooltip label={"I'm a tooltip"} command='Ctrl + B' />
        <br />
        <br />
        {/* <div>
          <h2 className='text-slate-200 text-xl tracking-tight font-bold mb-3'>
            Placement
          </h2>
        </div> */}
      </section>
    </Layout>
  )
}

export default tooltip
