import React from 'react'
import Arrow from './arrow'

const Left = ({ sx, ...props }) => {
  return <Arrow sx={{ transform: 'rotate(-135deg)', ...sx }} {...props} />
}

export default Left
