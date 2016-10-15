import React from 'react'

import Icon from './Icon'

const Navbar = () => {
  return <nav className="navbar">
    <img className="user-image" alt="User image" src="https://avatars2.githubusercontent.com/u/1026406?v=3&s=60" />
    <Icon className="navbar-icon" name="home" />
    <Icon className="navbar-icon" name="book" />
    <Icon className="navbar-icon" name="group" />
    <Icon className="navbar-icon" name="calendar-o" />
  </nav>
}

export default Navbar
