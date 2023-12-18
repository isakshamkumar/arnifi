import React from 'react'
import HeroSection from "./HeroSection"
import Navbar from '../components/Navbar'
import Projects from './Projects'
import "../index.css"

const LandingPage = () => {
  return (
    <>
    <Navbar/>
        <HeroSection/>
        <Projects/>
    </>

  )
}

export default LandingPage