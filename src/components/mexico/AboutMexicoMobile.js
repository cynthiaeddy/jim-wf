import React from 'react'
import AboutWFMobile from '../aboutWF/AboutWFMobile'
import MexicoMobileImages from './MexicoMobileImages'
import NavbarMexico from '../../navbars/navbarMexico/NavbarMexico'
import NavbarMexicoMobile from '../../navbars/navbarMexico/NavbarMexicoMobile'

const AboutMexicoMobile = () => {
  return (
    <AboutWFMobile
      mobileImages={<MexicoMobileImages />}
      navbar={<NavbarMexico />}
      navbarMobile={<NavbarMexicoMobile />}
    />
  )
}

export default AboutMexicoMobile
