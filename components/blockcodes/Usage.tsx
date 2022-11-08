import React from 'react'

const Usage = () => {
  return (
    <div className='bg-[#1E293B] px-6 py-6  rounded-lg overflow-x-auto'>
      <div>
        <div>
          <pre>
            <div>
              <span className='text-gray-400'>// App.tsx</span>
            </div>
            <div className='text-[#d6deeb]'>
              <span className='text-teal-400'>import</span>
              <span> React </span>
              <span className='text-teal-400'>from</span>
              <span className='text-lime-500'> 'react'</span>
            </div>
            <div className='text-[#d6deeb]'>
              <span className='text-teal-400'>import </span>
              <span className='text-purple-500'>{`{`}</span>
              <span> Tooltip </span>
              <span className='text-purple-500'>{`}`}</span>
              <span className='text-teal-400'> from </span>
              <span className='text-lime-500'>'@serity-ui/react'</span>
            </div>
            <br />
            <div>
              <span className='text-teal-400'>function </span>
              <span className='text-blue-400'>App</span>
              <span className='text-purple-500'>{`() {`}</span>
              <br />
              <span className='text-teal-400'>{`  return `}</span>
              <span className='text-purple-500'>{`(`} </span>
              <br />
              <span className='text-purple-500'>{`    <`}</span>
              <span className='text-yellow-400'>{`Tooltip `}</span>
              <span className='text-lime-300'>label</span>
              <span className='text-purple-500'>{`='`}</span>
              <span className='text-teal-400'>I am a tooltip</span>
              <span className='text-purple-500'>{`'>`}</span>
              <br />
              <span className='text-purple-500'>{`      <`}</span>
              <span className='text-yellow-400'>{`button`}</span>
              <span className='text-purple-500'>{`>`}</span>
              <span className='text-white'>Button</span>
              <span className='text-purple-500'>{`</`}</span>
              <span className='text-yellow-400'>{`button`}</span>
              <span className='text-purple-500'>{`>`}</span>
              <br />
              <span className='text-purple-500'>{`    </`}</span>
              <span className='text-yellow-400'>{`Tooltip`}</span>
              <span className='text-purple-500'>{`>`}</span>
              <br />
              <span className='text-purple-500'>{`  )`} </span>
              <br />
              <span className='text-purple-500'>&#125; </span>
            </div>
          </pre>
        </div>
      </div>
      <button></button>
    </div>
  )
}

export default Usage