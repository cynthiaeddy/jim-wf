import React from 'react'
import ForwardArrow from '../aboutWF/carousel/ForwardArrow'
import BackArrow from '../aboutWF/carousel/BackArrow'
import Slide from '../aboutWF/carousel/Slide'

import '../../stylesheets/AboutWF.css'

class AboutWF extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      width: window.innerWidth,
      length: this.props.imageData.length,
      imageData: this.props.imageData,
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
        {isBigMobile ? this.props.navbarMobileInt : this.props.navbar}

        <div className='aboutWFContainer'>
          <div className='l-arrow '>
            <BackArrow goToPrevSlide={() => this.goToPrevSlide()} />
          </div>
          <div className='aboutWFContainer-main'>
            <Slide
              imageData={this.state.imageData}
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

export default AboutWF
