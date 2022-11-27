import { useRouter } from 'next/router'
import React from 'react'
import ImportBlockCode from '../../../components/blockcodes/ImportBlockCode'
import SelectWithPropsTheme from '../../../components/blockcodes/select/SelectWithPropsTheme'
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
      <section>
        <SelectDemo />
      </section>
      <section className='mt-10'>
        <Heading>{t.import}</Heading>
        <ImportBlockCode component='Select' />
      </section>
      <section className='mt-10'>
        <Heading>{t.examples}</Heading>
        <Heading as='h3'>With theme prop</Heading>
        <p>
          You can either pass the prop <code>theme</code> with either the valie
          light or 'dark
        </p>
        <SelectWithPropsTheme />
      </section>
    </Layout>
  )
}

export default select
