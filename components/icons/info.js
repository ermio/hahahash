import React from 'react'
import { Box } from 'theme-ui'

const Info = ({ closed, ...props }) => {
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
      <g transform='translate(0,-1)'>
        <line x1='13' y1='12.3' x2='13' y2='19.5' style={style} />
        <line x1='13' y1='7.9' x2='13' y2='10.1' style={style} />
      </g>
      <circle cx='13' cy='13' r='12' style={style} />
    </Box>
  )
}

export default Info
