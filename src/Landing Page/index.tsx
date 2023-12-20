import React from 'react'
import HeroSection from "./HeroSection"
import Navbar from '../components/Navbar'
import Projects from './Projects'
import "../index.css"
import Clients from './Clients'
import Services from './Services'
import Events from './Events'
import Testimonials from './Testimonials'
import Trial from './Trial'
import WorkWithUs from './WorkWithUs'
import Footer from './Footer'
import PrivacyPolicy from './PrivacyPolicy'

const LandingPage = () => {
  return (
    <>
    <Navbar/>
        <HeroSection/>
        <Projects/>
        <Clients/>
        <Services/>
        <Events/>
        <Trial/>
        <Testimonials/>
        <WorkWithUs/>
        <Footer/>
        <PrivacyPolicy/>
    </>

  )
}

export default LandingPage