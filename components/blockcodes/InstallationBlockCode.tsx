import React from 'react'

const InstallationBlockCode = () => {
  return (
    <div className='bg-code-block px-6 py-6 rounded-lg overflow-x-auto'>
      <pre>
        <code className='font-fira-code'>
          <span className='text-code-function'>npm</span>
          <span> install @serity-ui/react</span>
        </code>
      </pre>
    </div>
  )
}

export default InstallationBlockCode
