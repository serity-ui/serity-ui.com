import { useRouter } from 'next/router'
import React from 'react'
import Import from '../../../components/blockcodes/ImportBlockCode'
import SelectDemo from '../../../components/demos/SelectDemo'
import Header from '../../../components/Header'
import Heading from '../../../components/heading/Heading'
import Layout from '../../../components/Layout'
import en from '../../../locales/en'
import es from '../../../locales/es'

const select = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es

  return (
    <Layout>
      <Header title='Select' description={t.select_description} />
      <section className='relative'>
        <SelectDemo />
        <br />
        <br />
      </section>
      <section>
        <div>
          <Heading>{t.import}</Heading>
        </div>
        <Import component='Select' />
      </section>
    </Layout>
  )
}

export default select
