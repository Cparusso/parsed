import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    return (
      <div className='nav-bar'>
        <div className='nav-spacing'>
          <NavLink className='nav-links' to="/">Home</NavLink>
        </div>
      </div>
    )
  }
}

export default Nav

// <NavLink className='nav-links' to="/customize">Customize</NavLink>
// <NavLink className='nav-links' to="/display">Display</NavLink>
