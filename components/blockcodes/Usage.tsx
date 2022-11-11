import React from 'react'

const Usage = () => {
  return (
    <div className='bg-[#1E293B] px-6 py-6  rounded-lg overflow-x-auto'>
      <div>
        <div>
          <pre>
            <code className='font-fira-code'>
              <div>
                <span className='text-gray-400'>// App.tsx</span>
              </div>
              <div className='text-[#d6deeb]'>
                <span className='text-teal-400'>import</span>
                <span> React </span>
                <span className='text-teal-400'>from</span>
                <span className='text-[rgb(195,232,141)]'> 'react'</span>
              </div>
              <div className='text-[#d6deeb]'>
                <span className='text-teal-400'>import </span>
                <span className='text-[#B4C2F0]'>{`{`}</span>
                <span> Tooltip </span>
                <span className='text-[#B4C2F0]'>{`}`}</span>
                <span className='text-teal-400'> from </span>
                <span className='text-[rgb(195,232,141)]'>
                  '@serity-ui/react'
                </span>
              </div>
              <br />
              <div>
                <span className='text-teal-400'>function </span>
                <span className='text-blue-400'>App</span>
                <span className='text-[rgb(180,194,240)]'>{`() {`}</span>
                <br />
                <span className='text-teal-400'>{`  return `}</span>
                <span className='text-[rgb(180,194,240)]'>{`(`} </span>
                <br />
                <span className='text-purple-500'>{`    <`}</span>
                <span className='text-[rgb(255,117,127)]'>{`Tooltip `}</span>
                <span className='text-[rgb(192,153,255)]'>label</span>
                <span className='text-purple-500'>{`='`}</span>
                <span className='text-teal-400'>I am a tooltip</span>
                <span className='text-purple-500'>{`'>`}</span>
                <br />
                <span className='text-purple-500'>{`      <`}</span>
                <span className='text-[rgb(255,117,127)]'>{`button`}</span>
                <span className='text-purple-500'>{`>`}</span>
                <span className='text-white'>Button</span>
                <span className='text-purple-500'>{`</`}</span>
                <span className='text-[rgb(255,117,127)]'>{`button`}</span>
                <span className='text-purple-500'>{`>`}</span>
                <br />
                <span className='text-purple-500'>{`    </`}</span>
                <span className='text-[rgb(255,117,127)]'>{`Tooltip`}</span>
                <span className='text-purple-500'>{`>`}</span>
                <br />
                <span className='text-[rgb(180,194,240)]'>{`  )`} </span>
                <br />
                <span className='text-[rgb(180,194,240)]'>{`}`}</span>
              </div>
            </code>
          </pre>
        </div>
      </div>
      <button></button>
    </div>
  )
}

export default Usage
