import React from 'react'
import { Box } from 'theme-ui'

const Question = ({ ...props }) => {
  const style = { vectorEffect: 'non-scaling-stroke' }
  return (
    <Box
      as='svg'
      viewBox='0 0 24 24'
      fill='none'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      {...props}
    >
      <g transform='translate(5,6)'>
        <path
          style={style}
          d='M1.41,1.94c0.06-3.13,2.63-5.63,5.76-5.61c2.81-0.17,5.23,1.98,5.41,4.8c0.01,0.14,0.01,0.28,0.01,0.43
    C12.59,6.1,7,5.14,7,8.44v0.85'
        />
        <line style={style} x1='6.97' y1='11.99' x2='6.97' y2='15.67' />
      </g>
    </Box>
  )
}

export default Question
