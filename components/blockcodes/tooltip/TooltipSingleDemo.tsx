import React from 'react'
import { Tooltip } from '@serity-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'

interface Props {
  type: string
}

const TooltipSingleDemo = ({ type }: Props) => {
  switch (type) {
    case 'icon':
      return (
        <div className='relative flex px-5 mb-5 py-6 rounded-md border border-[#1E293B]'>
          {/* <Tooltip label="I'm a tooltip" placement='top' command='Ctrl + B'> */}
          <BsTelephoneFill />
          {/* </Tooltip> */}
        </div>
      )
    default:
      return (
        <div className='relative flex px-5 mb-5 py-6 rounded-md border border-[#1E293B]'>
          {/* <Tooltip label="I'm a tooltip" placement='top' command='Ctrl + B'> */}
          <button className='bg-white shadow-sm rounded-md text-[#5746AF] h-[35px] w-[100px]'>
            Hover me
          </button>
          {/* </Tooltip> */}
        </div>
      )
  }
}

export default TooltipSingleDemo
