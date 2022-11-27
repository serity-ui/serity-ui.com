import React from 'react'
import { useRouter } from 'next/router'

import Import from '../../../components/blockcodes/ImportBlockCode'
import TooltipBlockCode from '../../../components/blockcodes/tooltip/TooltipBlockCode'
import TooltipSingleDemo from '../../../components/blockcodes/tooltip/TooltipSingleDemo'
import Demo from '../../../components/Demo'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import en from '../../../locales/en'
import es from '../../../locales/es'
import Heading from '../../../components/heading/Heading'

const tooltip = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es

  return (
    <Layout>
      <Header title='Tooltip' description={t.tooltip_description} />
      <section>
        <Demo />
      </section>
      <section className='mt-8'>
        <Heading>{t.import}</Heading>
        <Import component='Tooltip' />
      </section>
      <section className='mt-8'>
        <Heading>{t.usage}</Heading>
      </section>
      <section className='mt-5'>
        <Heading as='h3'>Tooltip with command props</Heading>
        <TooltipSingleDemo type='button' />
        <TooltipBlockCode
          type='button'
          label={'Hey, I am a tooltip'}
          command='Ctrl + B'
        />
      </section>
      <section className='mt-10'>
        <Heading as='h3'>With an icon</Heading>
        <TooltipSingleDemo type='icon' />
        <TooltipBlockCode type='icon' label={'Hey, I am a tooltip'} />
      </section>
      <section className='mt-10'>
        <Heading>{t.placement}</Heading>
      </section>
    </Layout>
  )
}

export default tooltip
