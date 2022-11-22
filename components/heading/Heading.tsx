import React from 'react'

interface HeadingProps {
  as?: string
  children: React.ReactNode
}

const Heading = ({ children, as = 'h2' }: HeadingProps) => {
  switch (as) {
    case 'h1':
      return (
        <h1 className='text-3xl sm:text-4x1 font-extrabold text-slate-200 tracking-tight'>
          {children}
        </h1>
      )
    default:
      return (
        <h2 className='text-slate-200 text-xl tracking-tight font-bold mb-3'>
          {children}
        </h2>
      )
  }
}

export default Heading
