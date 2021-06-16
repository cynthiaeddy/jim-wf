import React from 'react'
import NavbarMexico from '../../navbars/navbarMexico/NavbarMexico'
import NavbarMexicoMobileInt from '../../navbars/navbarMexico/NavbarMexicoMobileInt'
import imageData from '../carouselParis/Images'
import ForwardArrow from '../carouselParis/ForwardArrow'
import BackArrow from '../carouselParis/BackArrow'
import Slide from '../carouselParis/Slide'
import '../../stylesheets/AboutParis.css'

class AboutParis extends React.Component {
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

        <div className='aboutParisContainer'>
          <div className='l-arrow '>
            <BackArrow goToPrevSlide={() => this.goToPrevSlide()} />
          </div>
          <div className='aboutParisContainer-main'>
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

export default AboutParis