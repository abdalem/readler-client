import React from 'react'
import { Router, Redirect } from '@reach/router'
import { Box } from '@material-ui/core'
import { 
  Home,
  Search,
  Wishlist,
  Shows,
  Movies,
  Settings,
  Help } from 'containers'
import Navigation from './Navigation'
import LogoLoader from './LogoLoader'

export const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation location={props.location} />
      <Box 
        component={Router} 
        display="flex" 
        flexGrow={1}
        flexDirection="column"
      >
        <Home path="home" />
        <Wishlist path="wishlist" />
        <Search path="search" />
        <Shows path="shows" />
        <Movies path="movies" />
        <Settings path="settings" />
        <Help path="help" />
        <Redirect default noThrow from="*" to="home" />
      </Box>
    </React.Fragment>
  )
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     width: 240,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: 240,
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(3),
//   },
// }));

// const Layout = () => {
//   const classes = useStyles()

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//         anchor="left"
//       >
//         <List>
//           {['HomeIcon', 'MovieIcon', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 <Icon>home</Icon>
//               </ListItemIcon>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       <main className={classes.content}>
//         <div className={classes.toolbar} />
//       </main>
//     </div>

    // <div>
    //   <Link to="/">Home</Link>

    //   <Router>
    //     <Home path="/" />
    //   </Router>
    // </div>
    // <Player>
    //   <HlsDecoder
    //     isVideoChild
    //     src="http://stream.readler.local/hls/file-%2FOP915.mp4.m3u8"
    //   />
    // </Player>
//   );
// }