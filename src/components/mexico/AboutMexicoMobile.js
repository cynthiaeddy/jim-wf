import React from 'react'
import LazyLoad from 'react-lazyload'
import NavbarSocial from '../../navbars/navbarSocial/NavbarSocial'
import NavbarMexicoMobile from '../../navbars/navbarMexico/NavbarMexicoMobile'
import NavbarMexicoMobileInt from '../../navbars/navbarMexico/NavbarMexicoMobileInt'
import '../../stylesheets/AboutMexico.css'

class AboutMexicoMobile extends React.Component {
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

        <div className='aboutMexicoContainer mobile'>
          <LazyLoad>
            <img
              src='https://imgur.com/m0fagzo.png'
              className='Image-spread '
              alt='spread'
            />
            <img
              src='https://imgur.com/ZgGRhRt.png'
              className='Image-spread'
              alt='spread'
            />
            <img
              src='https://imgur.com/jPjrPeU.png'
              className='Image-spread'
              alt='spread'
            />
            <img
              src='https://imgur.com/51tn7cd.png'
              className='Image-spread'
              alt='spread'
            />
            <img
              src='https://imgur.com/7MzW9c6.png'
              className='Image-spread'
              alt='spread'
            />
            <img
              src='https://imgur.com/gFsv1GF.png'
              className='Image-spread'
              alt='spread'
            />
            <img
              src='https://imgur.com/NrZ884y.png'
              className='Image-spread'
              alt='spread'
            />
            <img
              src='https://imgur.com/j4prFfU.png'
              className='Image-spread'
              alt='spread'
            />
            <img
              src='https://imgur.com/gmv8QqP.png'
              className='Image-spread'
              alt='spread'
            />
          </LazyLoad>
        </div>
        <NavbarSocial />
      </div>
    )
  }
}

export default AboutMexicoMobile
