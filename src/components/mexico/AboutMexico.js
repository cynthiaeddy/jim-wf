import React from 'react'
import NavbarMexico from '../../navbars/navbarMexico/NavbarMexico'
import NavbarMexicoMobileInt from '../../navbars/navbarMexico/NavbarMexicoMobileInt'
import NavbarSocial from '../../navbars/navbarSocial/NavbarSocial'
import imageData from '../carouselMexico/Images'
import ForwardArrow from '../carouselMexico/ForwardArrow'
import BackArrow from '../carouselMexico/BackArrow'
import Slide from '../carouselMexico/Slide'
import '../../stylesheets/AboutMexico.css'

class AboutMexico extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      length: imageData.length,
      width: window.innerWidth,
    }
  }
  goToPrevSlide() {
    let index = this.state.activeIndex
    let length = this.state.length
    if (index < 1) {
      index = length - 1
    } else {
      index--
    }
    this.setState({
      activeIndex: index,
    })
  }

  goToNextSlide() {
    let index = this.state.activeIndex
    let length = this.state.length
    if (index === length - 1) {
      index = 0
    } else {
      index++
    }
    this.setState({
      activeIndex: index,
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }
  render() {
    let width = this.state.width
    let isBigMobile
    if (width <= 840) isBigMobile = true
    return (
      <div className='container'>
        {isBigMobile ? <NavbarMexicoMobileInt /> : <NavbarMexico />}

        <NavbarSocial />
        <div className='aboutMexicoContainer'>
          <div className='l-arrow '>
            <BackArrow goToPrevSlide={() => this.goToPrevSlide()} />
          </div>
          <div className='aboutMexicoContainer-main'>
            <Slide
              activeIndex={this.state.activeIndex}
              goToNextSlide={() => this.goToNextSlide()}
            />
          </div>

          <div className='r-arrow'>
            <ForwardArrow goToNextSlide={() => this.goToNextSlide()} />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMexico
