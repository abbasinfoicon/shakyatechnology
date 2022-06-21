import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/Home'
import About from '../view/About'
import Services from '../view/Services'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  )
}

export default index