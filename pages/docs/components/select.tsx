import React from 'react'
import Demo from '../../../components/Demo'
import SelectDemo from '../../../components/demos/SelectDemo'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import WorkInProgress from '../../../components/WorkInProgress'

const select = () => {
  return (
    <Layout>
      <Header
        title='Select'
        description='Select component is a component that allows users pick a value from predefined options.'
      />
      <section className='relative'>
        <SelectDemo />
      </section>
    </Layout>
  )
}

export default select
