import React from 'react'
import imageData from './ParisImages'
import NavbarParis from '../../navbars/navbarParis/NavbarParis'
import NavbarParisMobileInt from '../../navbars/navbarParis/NavbarParisMobileInt'
import AboutWF from '../aboutWF/AboutWF'

const AboutParis = () => {
  return (
    <AboutWF
      imageData={imageData}
      navbar={<NavbarParis />}
      navbarMobileInt={<NavbarParisMobileInt />}
    />
  )
}

export default AboutParis
