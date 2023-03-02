import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { images } from './constants'
import { Destination, Home, Navbar, Crew, Technology } from './components'

const App = () => {
  return (
    <div className="app-container" style={{ backgroundImage: `url(${images.bgHomeDesktop})` }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  )
}

export default App
