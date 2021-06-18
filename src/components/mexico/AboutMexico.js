import React from 'react'
import imageData from './MexicoImages'
import NavbarMexico from '../../navbars/navbarMexico/NavbarMexico'
import NavbarMexicoMobileInt from '../../navbars/navbarMexico/NavbarMexicoMobileInt'
import AboutWF from '../aboutWF/AboutWF'

const AboutMexico = () => {
  return (
    <AboutWF
      imageData={imageData}
      navbar={<NavbarMexico />}
      navbarMobileInt={<NavbarMexicoMobileInt />}
    />
  )
}

export default AboutMexico
