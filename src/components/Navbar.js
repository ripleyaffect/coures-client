import React from 'react'
import { Link } from 'react-router'

import Icon from './Icon'

const Navbar = () => {
  return <nav className="navbar">
    <img className="user-image" alt="User" src="https://avatars2.githubusercontent.com/u/1026406?v=3&s=60" />
    <Link to="/"><Icon className="navbar-icon" name="home" /></Link>
    <Link to="/courses"><Icon className="navbar-icon" name="book" /></Link>
    <Link to="/sessions"><Icon className="navbar-icon" name="group" /></Link>
    <Link to="/schedule"><Icon className="navbar-icon" name="calendar-o" /></Link>
  </nav>
}

export default Navbar
