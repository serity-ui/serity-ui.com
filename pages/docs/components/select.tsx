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
      <section>
        <Header title='Select' description={t.select_description} />
      </section>
      <section>
        <SelectDemo />
      </section>
      <section className='mt-10'>
        <Heading>{t.import}</Heading>
        <ImportBlockCode component='Select' />
      </section>
      <section className='mt-10'>
        <Heading className='mb-6'>{t.examples}</Heading>
        <Heading as='h3'>With theme prop</Heading>
        <p className='text-color-primary-800 dark:text-slate-200 mb-2'>
          You can either pass the prop{' '}
          <code className='text-purple-400'>theme</code> with either the value
          light or dark
        </p>
        <SelectWithPropsTheme />
      </section>
      <section className='mt-10'>
        <Heading className='mb-6'>API Reference</Heading>
        <Heading as='h3'>Select</Heading>
        <table className='w-full text-left'>
          <thead>
            <tr>
              <th>
                <span className='text-[13px] text-[#6f6f6f] dark:text-[#a0a0a0] font-normal'>
                  Prop
                </span>
              </th>
              <th>
                <span className='text-[13px] text-[#6f6f6f] dark:text-[#a0a0a0] font-normal'>
                  Type
                </span>
              </th>
              <th>
                <span className='text-[13px] text-[#6f6f6f] dark:text-[#a0a0a0] font-normal'>
                  Default
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-orange-50 dark:border-b-[#a0a0a0] border-b py-4'>
              <td className='py-3'>
                <code className='text-[#5746af] dark:text-[#9e8cfc] bg-[#f5f2ff] dark:bg-[#251e40] px-1 py-[2px] '>
                  theme
                </code>
              </td>
              <td className='py-3'>
                <code className='text-[#6f6f6f] dark:text-[#a0a0a0] bg-[#ededed] dark:bg-[#282828]  px-1 py-[2px]'>
                  string
                </code>
              </td>
              <td className='py-3'>
                <code className='text-[#6f6f6f] dark:text-[#a0a0a0] bg-[#ededed] dark:bg-[#282828] px-1 py-[2px]'>
                  light
                </code>
              </td>
            </tr>
            <tr className='border-b-orange-50 dark:border-b-[#a0a0a0] border-b py-4'>
              <td className='py-3'>
                <code className='text-[#5746af] dark:text-[#9e8cfc] bg-[#f5f2ff] dark:bg-[#251e40] px-1 py-[2px] '>
                  width
                </code>
              </td>
              <td className='py-3'>
                <code className='text-[#6f6f6f] dark:text-[#a0a0a0] bg-[#ededed] dark:bg-[#282828]  px-1 py-[2px]'>
                  number
                </code>
              </td>
              <td className='py-3'>
                <code className='text-[#6f6f6f] dark:text-[#a0a0a0] bg-[#ededed] dark:bg-[#282828] px-1 py-[2px]'>
                  200
                </code>
              </td>
            </tr>
            <tr className='border-b-orange-50 dark:border-b-[#a0a0a0] border-b '>
              <td className='py-3'>
                <code className='text-[#5746af] dark:text-[#9e8cfc] bg-[#f5f2ff] dark:bg-[#251e40] px-1 py-[2px] '>
                  onValueChange
                </code>
              </td>
              <td className='py-3'>
                <code className='text-[#6f6f6f] dark:text-[#a0a0a0] bg-[#ededed] dark:bg-[#282828]  px-1 py-[2px]'>
                  function
                </code>
              </td>
              <td className='py-3'>
                <code className='text-[#6f6f6f] '>-</code>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

export default select
