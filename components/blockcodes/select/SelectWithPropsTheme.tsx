import React from 'react'

const SelectWithPropsTheme = () => {
  return (
    <div className=' bg-code-block text-sm px-6 py-6 rounded-lg overflow-x-auto'>
      <pre>
        <code>
          <span className='text-code-delimiter'>{`<`}</span>
          <span className='text-code-element'>{`Select `}</span>
          <span className='text-code-attribute'>theme</span>
          <span className='text-code-delimiter'>{`='`}</span>
          <span className='text-code-attribute-value'>dark</span>
          <span className='text-code-delimiter'>{`'`}</span>
          <span className='text-code-delimiter'>{`>`}</span>
          <br />

          <span className='text-code-delimiter'>{`  <`}</span>
          <span className='text-code-element'>{`Select.Trigger `}</span>
          <span className='text-code-attribute'>placeholder</span>
          <span className='text-code-delimiter'>{`='`}</span>
          <span className='text-code-attribute-value'>Pick an option</span>
          <span className='text-code-delimiter'>{`'`}</span>
          <span className='text-code-delimiter'>{`/>`}</span>
          <br />

          {/* Select.Content -> SelectItem */}
          <span className='text-code-delimiter'>{`  <`}</span>
          <span className='text-code-element'>{`Select.Content`}</span>
          <span className='text-code-delimiter'>{`>`}</span>
          <br />

          <span className='text-code-delimiter'>{`    <`}</span>
          <span className='text-code-element'>{`SelectItem `}</span>
          <span className='text-code-attribute'>value</span>
          <span className='text-code-delimiter'>{`='`}</span>
          <span className='text-code-attribute-value'>value</span>
          <span className='text-code-delimiter'>{`'`}</span>
          <span className='text-code-delimiter'>{`/>`}</span>
          <br />

          <span className='text-code-delimiter'>{`  </`}</span>
          <span className='text-code-element'>{`Select.Content`}</span>
          <span className='text-code-delimiter'>{`>`}</span>
          <br />

          <span className='text-code-delimiter'>{`</`}</span>
          <span className='text-code-element'>{`Select`}</span>
          <span className='text-code-delimiter'>{`>`}</span>
        </code>
      </pre>
    </div>
  )
}

export default SelectWithPropsTheme
