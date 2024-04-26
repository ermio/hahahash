import React from 'react'
import { Box } from 'theme-ui'

const Reset = ({ closed, ...props }) => {
  const style = { vectorEffect: 'non-scaling-stroke' }
  return (
    <Box
      as='svg'
      viewBox='0 0 20 20'
      fill='none'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      {...props}
    >
      <path
        style={style}
        d='M1.2,10c0-1.1,0.2-2.3,0.7-3.4C3.8,2.1,9,0.1,13.5,2c2.2,1,3.9,2.6,4.7,4.7'
      />
      <path
        style={style}
        d='M18.8,10c0,1.2-0.2,2.3-0.7,3.4c-1.9,4.5-7,6.5-11.5,4.6c-2.2-1-3.9-2.8-4.7-4.8'
      />
      <polyline style={style} points='7.4,14.6 1.8,13.2 0.9,19  ' />
      <polyline style={style} points='12.6,5.4 18.2,6.8 19.1,1  ' />
    </Box>
  )
}

export default Reset
