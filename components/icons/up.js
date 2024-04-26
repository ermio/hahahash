import React from 'react'
import Arrow from './arrow'

const Up = ({ sx, ...props }) => {
  return <Arrow sx={{ transform: 'rotate(-45deg)', ...sx }} {...props} />
}

export default Up
