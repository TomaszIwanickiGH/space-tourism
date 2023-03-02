import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import { images } from '../../constants'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-content">
        <div className="divider"></div>
        <div className="navbar">
          <ul>
            <Link to="/">
              <li>00 Home</li>
            </Link>
            <Link to="/destination">
              <li>01 Destination</li>
            </Link>
            <Link to="/crew">
              <li>02 Crew</li>
            </Link>
            <Link to="/technology">
              <li>03 Technology</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
