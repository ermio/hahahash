import React from 'react'
import { Box } from 'theme-ui'

const CheckCircle = ({ ...props }) => {
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
      <polyline style={style} points='5.95 13.34 10.25 17.64 19.53 8.36' />
      <circle style={style} cx='13' cy='13' r='12' />
    </Box>
  )
}

export default CheckCircle
