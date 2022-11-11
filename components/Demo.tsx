import React from 'react'
import { Tooltip } from '@serity-ui/react'

const Demo = () => {
  return (
    <div className='relative flex justify-center py-24 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
      {/* <Tooltip label="I'm a tooltip" placement='top'> */}
      <button className='bg-white shadow-sm rounded-md text-[#5746AF] h-[35px] w-[100px]'>
        Hover me
      </button>
      {/* </Tooltip> */}
    </div>
  )
}

export default Demo
