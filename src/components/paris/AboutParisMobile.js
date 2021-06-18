import React from 'react'
import AboutWFMobile from '../aboutWF/AboutWFMobile'
import ParisMobileImages from './ParisMobileImages'
import NavbarParisMobile from '../../navbars/navbarParis/NavbarParisMobile'
import NavbarParisMobileInt from '../../navbars/navbarParis/NavbarParisMobileInt'

const AboutParisMobile = () => {
  return (
    <AboutWFMobile
      mobileImages={<ParisMobileImages />}
      navbarMobile={<NavbarParisMobile />}
      navbarMobileInt={<NavbarParisMobileInt />}
    />
  )
}

export default AboutParisMobile
