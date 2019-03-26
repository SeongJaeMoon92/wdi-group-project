import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../auth/userAuthentication'
// import Flash from '../../lib/flash'

class Nav extends React.Component {
  constructor(){
    super()

    this.state = { }
    this.logout = this.logout.bind(this)

  }

  logout() {
    Auth.logout()
    // Flash.setMessage('success', 'You have successfully logged out')
    this.props.history.push('/')
  }

  render(){
    return(
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/map'>Map</Link>
        <Link to='/spaces'>Spaces</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>login</Link>
        <Link to='/users/:id'>Account</Link>
        <Link to='/spaces/new'>Create Space</Link>
        <a onClick={this.logout}>Logout</a>
      </nav>
    )
  }
}

export default withRouter(Nav)
