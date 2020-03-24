import React from 'react'
import { Box } from '@material-ui/core'

export const ItemCard = props => {
  return (
    <Box>
      {props.item.title}
    </Box>
  )
}