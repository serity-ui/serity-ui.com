import React from 'react'

const UsageBlockCode = () => {
  return (
    <div className='bg-code-block px-6 py-6 text-sm rounded-lg overflow-x-auto'>
      <div>
        <div>
          <pre>
            <code className='font-fira-code'>
              <div>
                <span className='text-code-comment'>// App.tsx</span>
              </div>
              <div>
                <span className='text-code-extra'>import</span>
                <span> React </span>
                <span className='text-code-extra'>from</span>
                <span className='text-code-library'> 'react'</span>
              </div>
              <div>
                <span className='text-code-extra'>import </span>
                <span className='text-code-bracket'>{`{`}</span>
                <span> Tooltip </span>
                <span className='text-code-bracket'>{`}`}</span>
                <span className='text-code-extra'> from </span>
                <span className='text-code-library'>'@serity-ui/react'</span>
              </div>
              <br />
              <div>
                <span className='text-code-extra'>function </span>
                <span className='text-code-function'>App</span>
                <span className='text-code-parenthesis'>{`()`}</span>
                <span className='text-code-bracket'>{` {`}</span>
                <br />
                <span className='text-code-extra'>{`  return `}</span>
                <span className='text-code-parenthesis'>{`(`} </span>
                <br />
                <span className='text-code-delimiter'>{`    <`}</span>
                <span className='text-code-element'>{`Tooltip `}</span>
                <span className='text-code-attribute'>label</span>
                <span className='text-code-delimiter'>{`='`}</span>
                <span className='text-code-attribute-value'>
                  I am a tooltip
                </span>
                <span className='text-code-delimiter'>{`'>`}</span>
                <br />
                <span className='text-code-delimiter'>{`      <`}</span>
                <span className='text-code-element'>{`button`}</span>
                <span className='text-code-delimiter'>{`>`}</span>
                <span className='text-code-content'>Hover me</span>
                <span className='text-code-delimiter'>{`</`}</span>
                <span className='text-code-element'>{`button`}</span>
                <span className='text-code-delimiter'>{`>`}</span>
                <br />
                <span className='text-code-delimiter'>{`    </`}</span>
                <span className='text-code-element'>{`Tooltip`}</span>
                <span className='text-code-delimiter'>{`>`}</span>
                <br />
                <span className='text-code-parenthesis'>{`  )`} </span>
                <br />
                <span className='text-code-bracket'>{`}`}</span>
              </div>
            </code>
          </pre>
        </div>
      </div>
      <button></button>
    </div>
  )
}

export default UsageBlockCode
