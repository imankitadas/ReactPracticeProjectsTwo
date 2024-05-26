import React from 'react'
import Navbar from './components/Navbar.jsx'
import Pheader from './components/Previewheader.jsx'
import Hero from './components/HeroSection.jsx'
import Rating from './components/RatingSection.jsx'
import Magic from './components/MagicWandSection.jsx'
// import Apply from './components/ApplySection.jsx'
// import Sbrowsers from './components/SupportedBrowsers.jsx'
// import Plugin from './components/PluginSection.jsx'
import Footer from './components/Footer.jsx'
import './Motion.css'

const Motion = () => { 
    return ( 
      <> 
        <Navbar />
        <Pheader />
        <Hero />
        <Rating />
        <Magic />
        {/* <Apply /> */}
        {/* <Sbrowsers /> */}
        {/* <Plugin /> */}
        {/* <Footer /> */}
      </>  
    )
}

export default Motion