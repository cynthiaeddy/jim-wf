import React from 'react'
import LazyLoad from 'react-lazyload'
import NavbarMexicoMobile from '../../navbars/navbarMexico/NavbarMexicoMobile'
import NavbarMexicoMobileInt from '../../navbars/navbarMexico/NavbarMexicoMobileInt'
import '../../stylesheets/AboutMexico.css'

class WFTestMobile extends React.Component {
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
              src='https://imgur.com/m0fagzo.png'
              className='image-spread '
              alt='mexico cover'
            />
            <img
              src='https://imgur.com/ZgGRhRt.png'
              className='image-spread'
              alt='cacti spread'
            />
            <img
              src='https://imgur.com/jPjrPeU.png'
              className='image-spread'
              alt='family gathering'
            />
            <img
              src='https://imgur.com/51tn7cd.png'
              className='image-spread'
              alt='tostadas'
            />
            <img
              src='https://imgur.com/7MzW9c6.png'
              className='image-spread'
              alt='flautas'
            />
            <img
              src='https://imgur.com/gFsv1GF.png'
              className='image-spread'
              alt='chef owner'
            />
            <img
              src='https://imgur.com/NrZ884y.png'
              className='image-spread'
              alt='making tortillas'
            />
            <img
              src='https://imgur.com/j4prFfU.png'
              className='image-spread'
              alt='city dusk scene'
            />
            <img
              src='https://imgur.com/gmv8QqP.png'
              className='image-spread'
              alt='couple dancing'
            />
          </LazyLoad>
        </div>
      </div>
    )
  }
}

export default WFTestMobile
