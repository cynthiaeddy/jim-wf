import React from 'react'
import NavbarMexicoMobile from '../../navbars/navbarMexico/NavbarMexicoMobile'
import NavbarMexicoMobileInt from '../../navbars/navbarMexico/NavbarMexicoMobileInt'
import '../../stylesheets/AboutWF.css'

class AboutWFMobile extends React.Component {
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
        <div className='aboutWFContainer-mobile'>{this.props.mobileImages}</div>
      </div>
    )
  }
}
export default AboutWFMobile
