import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import { images } from '../../constants'

const Navbar = (props) => {
  const [active, setActive] = useState(1)
  const [bgImage, setbgImage] = useState(images.bgHomeDesktop)

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <img
            src={images.logo}
            alt="logo"
            onClick={() => {
              setActive(1)
              setbgImage(images.bgHomeDesktop)
              props.onClick(bgImage)
            }}
          />
        </Link>
      </div>
      <div className="navbar-content">
        <div className="divider"></div>
        <div className="navbar">
          <ul>
            <Link to="/">
              <li
                style={active === 1 ? { borderBottom: '2px solid white' } : {}}
                onClick={() => {
                  setActive(1)
                  setbgImage(images.bgHomeDesktop)
                  props.onClick(bgImage)
                }}
              >
                00 Home
              </li>
            </Link>
            <Link to="/destination">
              <li
                style={active === 2 ? { borderBottom: '2px solid white' } : {}}
                onClick={() => {
                  setActive(2)
                  setbgImage(images.bgDestinDesktop)
                  props.onClick(bgImage)
                }}
              >
                01 Destination
              </li>
            </Link>
            <Link to="/crew">
              <li
                style={active === 3 ? { borderBottom: '2px solid white' } : {}}
                onClick={() => {
                  setActive(3)
                  setbgImage(images.bgCrewDesktop)
                  props.onClick(bgImage)
                }}
              >
                02 Crew
              </li>
            </Link>
            <Link to="/technology">
              <li
                style={active === 4 ? { borderBottom: '2px solid white' } : {}}
                onClick={() => {
                  setActive(4)
                  setbgImage(images.bgTechDesktop)
                  props.onClick(bgImage)
                }}
              >
                03 Technology
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
