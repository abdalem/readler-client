import React from 'react'
import { Box } from '@material-ui/core'
import { ItemCard } from 'components' 

export const ItemList = props => {
  console.log(props)
  return (
    <Box>
      {props.items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </Box>
  )
}