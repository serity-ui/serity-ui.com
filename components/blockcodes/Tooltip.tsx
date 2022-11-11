import React from 'react'

interface Props {
  label: string
  command?: string
}

const Tooltip = ({ label, command }: Props) => {
  return (
    <div className='bg-[#1E293B] text-sm px-6 py-6 rounded-lg overflow-x-auto'>
      <pre>
        <code>
          <span className='text-purple-500'>{`<`}</span>
          <span className='text-[rgb(255,117,127)]'>{`Tooltip `}</span>
          <span className='text-[rgb(192,153,255)]'>label</span>
          <span className='text-purple-500'>{`="`}</span>
          <span className='text-teal-400'>{label}</span>
          <span className='text-purple-500'>{`"`}</span>
          <span className='text-[rgb(192,153,255)]'> command</span>
          <span className='text-purple-500'>{`="`}</span>
          <span className='text-teal-400'>{command}</span>
          <span className='text-purple-500'>{`">`}</span>
          <br />
          <span className='text-purple-500'>{`  <`}</span>
          <span className='text-[rgb(255,117,127)]'>{`button`}</span>
          <span className='text-purple-500'>{`>`}</span>
          <span className='text-white'>Button</span>
          <span className='text-purple-500'>{`</`}</span>
          <span className='text-[rgb(255,117,127)]'>{`button`}</span>
          <span className='text-purple-500'>{`>`}</span>
          <br />
          <span className='text-purple-500'>{`</`}</span>
          <span className='text-[rgb(255,117,127)]'>{`Tooltip`}</span>
          <span className='text-purple-500'>{`>`}</span>
        </code>
      </pre>
    </div>
  )
}

export default Tooltip
