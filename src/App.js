import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { images } from './constants'
import { Destination, Home, Navbar, Crew, Technology } from './components'

const App = () => {
  const [background, setBackground] = useState(images.bgHomeDesktop)

  useEffect(() => {
    console.log('siema')
  }, [background])

  const getData = (bgImage) => {
    setBackground(bgImage)
  }

  return (
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      <Navbar onClick={getData} />
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
