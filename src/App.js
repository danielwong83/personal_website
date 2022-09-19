// import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import "./App.css"

import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes.style";

import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Chelsea from './pages/Chelsea'
import OldChelsea from './pages/Chelsea2122'
import Chess from './pages/Chess'
import AboutPortraits from './pages/AboutPortraits'
import HomeVersionOne from './pages/HomeVersionOne'
import HomeVersionTwo from './pages/HomeVersionTwo'
import HomeVersionThree from './pages/HomeVersionThree'
import WaveObject from './pages/WaveObject'

import NavBar from './components/Navbar'
import useLocalStorage from 'use-local-storage';



function App() {

  const location = useLocation()
  const atChelsea = location.pathname.includes('chelsea')

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', !defaultDark ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        {!atChelsea && <NavBar switchTheme = {switchTheme}/>}
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="aboutphotos" element={<AboutPortraits />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="project" element={<Project />}></Route>
            <Route path="chelsea" element={<Chelsea />}></Route>
            <Route path="chelsea_21_22" element={<OldChelsea />}></Route>
            <Route path="chess" element={<Chess />}></Route>
            <Route path="wave" element={<WaveObject />}></Route>
            <Route path="home_vers_1" element={<HomeVersionOne/>}></Route>
            <Route path="home_vers_2" element={<HomeVersionTwo/>}></Route>
            <Route path="home_vers_3" element={<HomeVersionThree/>}></Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  )
}


export default App