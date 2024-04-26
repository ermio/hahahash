import React from 'react'
import { Box } from 'theme-ui'

const Triangle = ({ closed, ...props }) => {
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
      <polygon points='1.1,2.5 12,21.5 22.9,2.5 ' style={style} />
    </Box>
  )
}

export default Triangle
