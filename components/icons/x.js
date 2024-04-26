import React from 'react'
import { Box } from 'theme-ui'

const X = ({ closed, ...props }) => {
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
      <line style={style} x1='3.81' y1='3.81' x2='20.19' y2='20.19' />
      <line style={style} x1='3.81' y1='20.19' x2='20.19' y2='3.81' />
    </Box>
  )
}

export default X
