import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <p className="home-header">So, you want to travel to</p>
        <h1>space</h1>
        <p className="home-description">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="home-button">
        <button>Explore!</button>
      </div>
    </div>
  )
}

export default Home
