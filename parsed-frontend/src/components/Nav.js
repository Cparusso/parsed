import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
        <NavLink to="/welcome">Welcome</NavLink>
        <br></br>
        <NavLink to="/customize">Customize</NavLink>
        <br></br>
        <NavLink to="/display">Display</NavLink>
      </div>
    )
  }
}

export default Nav
