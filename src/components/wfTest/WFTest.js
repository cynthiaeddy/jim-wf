import React from 'react'
// import NavbarMexico from '../../navbars/navbarMexico/NavbarMexico'
// import NavbarMexicoMobileInt from '../../navbars/navbarMexico/NavbarMexicoMobileInt'
import imageData from '../carouselMexico/Images'
import AboutWF from '../aboutWF/AboutWF'
import AboutMexico from '../mexico/AboutMexico'

// import '../../stylesheets/AboutMexico.css'

class WFTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      length: imageData.length,
    }
  }
  render() {
    console.log(imageData, 'this.state', this.state)
    return <AboutWF imageData={this.state.length} />
  }
}

export default WFTest
