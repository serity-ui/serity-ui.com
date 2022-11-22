import React from 'react'

const SelectWithPropsTheme = () => {
  return (
    <div className='bg-code-block text-sm px-6 py-6 rounded-lg overflow-x-auto'>
      <pre>
        <code>
          <span className='text-code-delimiter'>{`<`}</span>
          <span className='text-code-element'>{`Select `}</span>
          <span className='text-code-attribute'>theme</span>
          <span className='text-code-delimiter'>{`='`}</span>
          <span className='text-code-attribute-value'>dark</span>
          <span className='text-code-delimiter'>{`'`}</span>

          <span className='text-code-delimiter'>{`>`}</span>

          <span className='text-code-delimiter'>{`</`}</span>
          <span className='text-code-element'>{`Select`}</span>
          <span className='text-code-delimiter'>{`>`}</span>
        </code>
      </pre>
    </div>
  )
}

export default SelectWithPropsTheme
