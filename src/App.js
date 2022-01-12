import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import "./App.css"

import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'

import NavBar from './components/Navbar'





function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="project" element={<Project />}></Route>
        </Routes>
      </div>
    </div>
  )
}


export default App