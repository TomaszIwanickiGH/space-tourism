import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Destination.css'
import { data } from '../../constants'

const Destination = () => {
  const [numberOfPlanet, setNumberOfPlanet] = useState(0)
  const { destinations } = data
  return (
    <div className="destination">
      <h2 className="destination-header">
        <span>01</span>pick your destination
      </h2>
      <div className="destination-container">
        <div className="destination-image">
          <img src={destinations[numberOfPlanet].image} alt="" />
        </div>
        <div className="destination-content">
          <div className="destination-navbar">
            <ul>
              <Link to="/destination/moon">
                <li style={numberOfPlanet === 0 ? { borderBottom: '3px solid white' } : {}} onClick={() => setNumberOfPlanet(0)}>
                  Moon
                </li>
              </Link>
              <Link to="/destination/mars">
                <li style={numberOfPlanet === 1 ? { borderBottom: '3px solid white' } : {}} onClick={() => setNumberOfPlanet(1)}>
                  Mars
                </li>
              </Link>
              <Link to="/destination/europa">
                <li style={numberOfPlanet === 2 ? { borderBottom: '3px solid white' } : {}} onClick={() => setNumberOfPlanet(2)}>
                  Europa
                </li>
              </Link>
              <Link to="/destination/titan">
                <li style={numberOfPlanet === 3 ? { borderBottom: '3px solid white' } : {}} onClick={() => setNumberOfPlanet(3)}>
                  Titan
                </li>
              </Link>
            </ul>
          </div>
          <div className="destination-main">
            <h3>{destinations[numberOfPlanet].name}</h3>
            <p>{destinations[numberOfPlanet].description}</p>
          </div>
          <div className="destination-travel">
            <div className="destination-travel-distance">
              <h4>Avg. Distance</h4>
              <p>{destinations[numberOfPlanet].distance}</p>
            </div>
            <div className="destination-travel-time">
              <h4>Est. Travel Time</h4>
              <p>{destinations[numberOfPlanet].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
