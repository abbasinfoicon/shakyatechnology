import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/Home'
import About from '../view/About'
import Services from '../view/Services'
import Portfolio from '../view/Portfolio'
import Blog from '../view/Blog'
import Contact from '../view/Contact'
import NotFound from '../view/NotFound'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default index