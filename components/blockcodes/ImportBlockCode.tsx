import React from 'react'

interface Props {
  component: string
}

const Import = ({ component }: Props) => {
  return (
    <div className='bg-code-block text-sm px-6 py-6 rounded-lg overflow-x-auto'>
      <pre>
        <code className='font-fira-code'>
          <span className='text-code-extra'>import </span>
          <span className='text-code-bracket'>{`{`}</span>
          <span> {component} </span>
          <span className='text-code-bracket'>{`}`}</span>
          <span className='text-code-extra'> from </span>
          <span className='text-code-library'>'@serity-ui/react'</span>
        </code>
      </pre>
    </div>
  )
}

export default Import
