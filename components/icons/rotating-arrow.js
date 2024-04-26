import React from 'react'
import Arrow from './arrow'

const RotatingArrow = ({ sx, ...props }) => {
  return (
    <Arrow
      sx={{
        transition: 'transform 0.15s',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            transform: 'rotate(45deg)',
          },
        },
        ...sx,
      }}
      {...props}
    />
  )
}

RotatingArrow.hover = { transform: 'rotate(45deg)' }

export default RotatingArrow
