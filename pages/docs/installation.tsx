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
import Text from '../../components/text/Text'

const installation = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es

  return (
    <Layout>
      <section className='max-w-3xl'>
        <Header
          title={t.get_started_with_serity_ui}
          description={t.is_a_simple_modular_component}
        />
      </section>
      <section className='relative z-10 max-w-3xl mb-10'>
        <Heading>{t.installation}</Heading>
        <Text>{t.to_use_serity_ui_in_your_project}</Text>
        <InstallationBlockCode />
      </section>
      <section className='relative z-10 max-w-3xl mb-6 '>
        <Heading>{t.usage}</Heading>
        <Text>
          After installing Serity UI, you can start importing the components you
          want to use in your React project. In this example we are going to use
          the <code className='text-purple-300'>Tooltip</code> component.
        </Text>
        <UsageBlockCode />
      </section>
    </Layout>
  )
}

export default installation
