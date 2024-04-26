import React from 'react'
import { Box } from 'theme-ui'

const Globe = ({ closed, ...props }) => {
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
      <circle cx='12' cy='12' r='11.5' style={style} />
      <line x1='1' y1='8.16' x2='23' y2='8.16001' style={style} />
      <line x1='1.5' y1='15.82' x2='22.5' y2='15.82' style={style} />
      <path d='M12 23.5C4.75561 14.7 8.98151 4.16667 12 0.5' style={style} />
      <path d='M12 23.5C19.2444 14.7 15.0185 4.16667 12 0.5' style={style} />
    </Box>
  )
}

export default Globe
