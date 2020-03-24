import React from 'react'
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import NavigationBtn from './NavigationBtn'
import { navigationBtns } from './constants'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredIndex: null
    }
  }

  setHoveredIndex(index) {
    this.setState({
      hoveredIndex: index
    })
  }

  isHoveredIndex(index) {
    return this.state.hoveredIndex === index
  }

  isCurrentPage(btn) {
    return this.props.location.pathname === btn.link
  }

  render() {
    return (
      <Box 
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {navigationBtns.map((btn, index) => (
          <NavigationBtn
            key={`navbtn-${index}`}
            buttonData={btn}
            isHovered={this.isHoveredIndex(index)}
            isCurrentPage={this.isCurrentPage(btn)}
            onHover={this.setHoveredIndex.bind(this, index)}
            onBlur={this.setHoveredIndex.bind(this, null)}
          />
        ))}
      </Box>
    )
  }
}
