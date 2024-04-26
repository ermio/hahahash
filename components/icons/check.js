import React from 'react'
import { Box } from 'theme-ui'

const Check = ({ ...props }) => {
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
      <polyline style={style} points='1.41,12.53 8.12,19.24 22.59,4.76 ' />
    </Box>
  )
}

export default Check
