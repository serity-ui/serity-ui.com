import React from 'react'

interface Props {
  label: string
  command?: string
  type: string
}

interface ChildrenTypeProps {
  type: string
}

const Tooltip = ({ label, command, type }: Props) => {
  return (
    <div className='bg-code-block text-sm px-6 py-6 rounded-lg overflow-x-auto'>
      <pre>
        <code>
          <span className='text-code-delimiter'>{`<`}</span>
          <span className='text-code-element'>{`Tooltip `}</span>
          <span className='text-code-attribute'>label</span>
          <span className='text-code-delimiter'>{`='`}</span>
          <span className='text-code-attribute-value'>{label}</span>
          <span className='text-code-delimiter'>{`'`}</span>
          {command && (
            <>
              <span className='text-code-attribute'> command</span>
              <span className='text-code-delimiter'>{`='`}</span>
              <span className='text-code-attribute-value'>{command}</span>
              <span className='text-code-delimiter'>{`'`}</span>
            </>
          )}
          <span className='text-code-delimiter'>{`>`}</span>
          <ChildrenType type={type} />
          <span className='text-code-delimiter'>{`</`}</span>
          <span className='text-code-element'>{`Tooltip`}</span>
          <span className='text-code-delimiter'>{`>`}</span>
        </code>
      </pre>
    </div>
  )
}

const ChildrenType = ({ type }: ChildrenTypeProps) => {
  switch (type) {
    case 'icon':
      return (
        <>
          <br />
          <span className='text-code-delimiter'>{`  <`}</span>
          <span className='text-code-element'>{`PhoneIcon`}</span>
          <span className='text-code-delimiter'>{` />`}</span>
          <br />
        </>
      )
    default:
      return (
        <>
          <br />
          <span className='text-code-delimiter'>{`  <`}</span>
          <span className='text-code-element'>{`button`}</span>
          <span className='text-code-delimiter'>{`>`}</span>
          <span className='text-code-content'>Hover me</span>
          <span className='text-code-delimiter'>{`</`}</span>
          <span className='text-code-element'>{`button`}</span>
          <span className='text-code-delimiter'>{`>`}</span>
          <br />
        </>
      )
  }
}

export default Tooltip
