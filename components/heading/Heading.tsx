import React from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadingProps {
  as?: string
  className?: any
  children: React.ReactNode
}

const Heading = ({ children, className, as = 'h2' }: HeadingProps) => {
  const classNameH1 = twMerge(
    'text-3xl sm:text-4x1 font-extrabold text-slate-200 tracking-tight',
    className,
  )

  const classNameH2 = twMerge(
    'text-slate-200 text-2xl tracking-tight font-bold mb-3',
    className,
  )

  const classNameH3 = twMerge(
    'text-slate-200 text-xl tracking-tight font-semibold mb-3',
    className,
  )

  switch (as) {
    case 'h1':
      return <h1 className={classNameH1}>{children}</h1>
    case 'h3':
      return <h3 className={classNameH3}>{children}</h3>
    default:
      return <h2 className={classNameH2}>{children}</h2>
  }
}

export default Heading
