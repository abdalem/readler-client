import React from 'react'
import { connect } from "react-redux"
import { Location, Router, Redirect } from '@reach/router'
import { Box } from '@material-ui/core'
import { Login } from 'containers'
import { Layout } from 'components'


export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuth: true
    }
  }

  render() {
    return(
      <Location>
        {({ location }) => (
          <Box 
            component={Router} 
            display="flex" 
            flexGrow={1}
          >
            {this.state.isAuth ? (
              <Layout default />
            ) : ([
              <Login 
                key="login-page" 
                path="login" 
              />,
              <Redirect 
                key="redirect" 
                default 
                noThrow 
                from="*" 
                to="login" 
              />
            ])}
          </Box>
        )}
      </Location>
    )
  }
}

