import React from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import "./App.css"

import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Chelsea from './pages/Chelsea'
import Chess from './pages/Chess'
import AboutPortraits from './pages/AboutPortraits'

import Fixture from './components/ChelseaFixture'

import NavBar from './components/Navbar'





function App() {

  const location = useLocation()
  const atChelsea = location.pathname.includes('chelsea')

  return (
    <div className="App">
      {!atChelsea && <NavBar/>}
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="aboutphotos" element={<AboutPortraits />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="chelsea" element={<Chelsea />}></Route>
          <Route path="chess" element={<Chess />}></Route>
        </Routes>
      </div>
    </div>
  )
}


export default App