import React from 'react'
import Arrow from './arrow'

const Down = ({ sx, ...props }) => {
  return <Arrow sx={{ transform: 'rotate(135deg)', ...sx }} {...props} />
}

export default Down
