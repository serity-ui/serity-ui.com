import React from 'react'

interface Props {
  component: string
}

const Import = ({ component }: Props) => {
  return (
    <div className='bg-[#1E293B] text-sm px-6 py-6 rounded-lg overflow-x-auto'>
      <pre>
        <code className='font-fira-code'>
          <span className='text-teal-400'>import </span>
          <span className='text-[#B4C2F0]'>{`{`}</span>
          <span> {component} </span>
          <span className='text-[#B4C2F0]'>{`}`}</span>
          <span className='text-teal-400'> from </span>
          <span className='text-[rgb(195,232,141)]'>'@serity-ui/react'</span>
        </code>
      </pre>
    </div>
  )
}

export default Import
