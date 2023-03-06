import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import { images } from '../../constants'

const Navbar = (props) => {
  const [active, setActive] = useState(1)
  const [bgImage, setbgImage] = useState(images.bgHomeDesktop)

  return (
    <div className="navbar-container" {...props.onClick(bgImage)}>
      <div className="logo">
        <Link
          to="/"
          onClick={() => {
            setActive(1)
            setbgImage(images.bgHomeDesktop)
          }}
        >
          <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-content">
        <div className="divider"></div>
        <div className="navbar">
          <ul>
            <Link
              to="/"
              onClick={() => {
                setActive(1)
                setbgImage(images.bgHomeDesktop)
              }}
            >
              <li style={active === 1 ? { borderBottom: '2px solid white' } : {}}>00 Home</li>
            </Link>
            <Link
              to="/destination"
              onClick={() => {
                setActive(2)
                setbgImage(images.bgDestinDesktop)
              }}
            >
              <li style={active === 2 ? { borderBottom: '2px solid white' } : {}}>01 Destination</li>
            </Link>
            <Link
              to="/crew"
              onClick={() => {
                setActive(3)
                setbgImage(images.bgCrewDesktop)
              }}
            >
              <li style={active === 3 ? { borderBottom: '2px solid white' } : {}}>02 Crew</li>
            </Link>
            <Link
              to="/technology"
              onClick={() => {
                setActive(4)
                setbgImage(images.bgTechDesktop)
              }}
            >
              <li style={active === 4 ? { borderBottom: '2px solid white' } : {}}>03 Technology</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
