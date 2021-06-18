import React from 'react'
import LazyLoad from 'react-lazyload'
import NavbarMexicoMobile from '../../navbars/navbarMexico/NavbarMexicoMobile'
import NavbarMexicoMobileInt from '../../navbars/navbarMexico/NavbarMexicoMobileInt'
import '../../stylesheets/AboutMexico.css'

class AboutParisMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
    }
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
    if (width >= 699) isBigMobile = true
    return (
      <div className='container'>
        {isBigMobile ? <NavbarMexicoMobileInt /> : <NavbarMexicoMobile />}
        <div className='aboutMexicoContainer-mobile'>
          <LazyLoad>
            <img
              src='https://imgur.com/dm1Yv2W.png'
              className='images-spread paris-opener'
              alt='paris cover'
            />
            <img
              src='https://imgur.com/GeTVIXU.png'
              className='images-spread'
              alt='park spread'
            />
            <img
              src='https://imgur.com/UswFLRh.png'
              className='images-spread'
              alt='girl chefs'
            />
            <img
              src='https://imgur.com/4tSP4Om.png'
              className='images-spread'
              alt='oysters'
            />
            <img
              src='https://imgur.com/U0aEoTl.png'
              className='images-spread'
              alt='young chef'
            />
            <img
              src='https://imgur.com/RWThjCg.png'
              className='images-spread'
              alt='picnic'
            />
            <img
              src='https://imgur.com/LTNOm3M.png'
              className='images-spread'
              alt='paris and food'
            />
            <img
              src='https://imgur.com/58CEeOw.png'
              className='images-spread'
              alt='chef at home'
            />
            <img
              src='https://imgur.com/DrRCHsx.png'
              className='images-spread'
              alt='flowers spread'
            />
          </LazyLoad>
        </div>
      </div>
    )
  }
}

export default AboutParisMobile
