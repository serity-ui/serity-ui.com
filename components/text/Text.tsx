import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TextProps {
  className?: any
  children: React.ReactNode
}

const Text = ({ className, children }: TextProps) => {
  const classNameP = twMerge(
    'text-color-primary-800 dark:text-slate-200 mb-3',
    className,
  )

  return <p className={classNameP}>{children}</p>
}

export default Text
