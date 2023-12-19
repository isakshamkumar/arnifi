import React from 'react'
import HeroSection from "./HeroSection"
import Navbar from '../components/Navbar'
import Projects from './Projects'
import "../index.css"
import Clients from './Clients'
import Services from './Services'

const LandingPage = () => {
  return (
    <>
    <Navbar/>
        <HeroSection/>
        <Projects/>
        <Clients/>
        <Services/>
    </>

  )
}

export default LandingPage