import React from 'react'
import { Link } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles'
import { 
  HomeOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
  TvOutlined,
  MovieOutlined,
  SettingsOutlined,
  HelpOutlineOutlined,
  PowerSettingsNewOutlined } from '@material-ui/icons'

const components = {
  home: HomeOutlined,
  search: SearchOutlined,
  favorite: FavoriteBorderOutlined,
  tv: TvOutlined,
  movie: MovieOutlined,
  settings: SettingsOutlined,
  help: HelpOutlineOutlined,
  power: PowerSettingsNewOutlined
}

const styles = makeStyles((props) => ({
  link: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 10px',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none'
  },
  icon: {
    fillOpacity: '0.6',
    transition: '0.2s all ease-in-out',
    '&.isHovered': {
      fillOpacity: '0.8'
    },
    '&.isCurrent': {
      fillOpacity: '1'
    }
  },
  label: {
    bottom: '0',
    opacity: '0',
    transition: '0.2s all ease-in-out',
    fontSize: '14px',
    '&.isHovered': {
      opacity: '0.8',
      fontWeight: '300'
    },
    '&.isCurrent': {
      opacity: '1',
      fontWeight: '500'
  }
  }
}));

export default function NavigationBtn(props) {
  const Icon = components[props.buttonData.icon]
  const classes = styles()
  const hoveredClass = props.isHovered && 'isHovered'
  const currentPageClass = props.isCurrentPage && 'isCurrent'

  return (
    <Link
      to={props.buttonData.link}
      className={classes.link}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onBlur}
    >
      <Icon
        className={`${classes.icon} ${hoveredClass} ${currentPageClass}`}
        fontSize="large"
      />

      <label
        className={`${classes.label} ${hoveredClass} ${currentPageClass}`} 
      >
        {props.buttonData.label}
      </label>
    </Link>
  )
}