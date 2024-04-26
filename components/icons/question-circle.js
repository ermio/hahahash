import React from 'react'
import { Box } from 'theme-ui'

const QuestionCircle = ({ ...props }) => {
  const style = { vectorEffect: 'non-scaling-stroke' }
  return (
    <Box
      as='svg'
      viewBox='0 0 26 26'
      fill='none'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      {...props}
    >
      <g transform='translate(5,6)'>
        <path
          d='M4.5,5A3.58,3.58,0,0,1,8.11,1.49,3.2,3.2,0,0,1,11.5,4.76C11.5,7.61,8,7,8,9.07V9.6'
          style={style}
        />
        <line x1='7.98' y1='11.3' x2='7.98' y2='13.6' style={style} />
      </g>
      <circle cx='13' cy='13' r='12' style={style} />
    </Box>
  )
}

export default QuestionCircle
