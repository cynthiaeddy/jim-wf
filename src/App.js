import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import NavBarToggle from './navbars/navBarToggle/NavBarToggle'
import NavbarSocial from './navbars/navbarSocial/NavbarSocial'
import AboutJim from './components/aboutJim/AboutJim'
import HomeMobile from './components/home/HomeMobile'
import Home from './components/home/Home'
import AboutMexicoMobile from './components/mexico/AboutMexicoMobile'
import AboutMexico from './components/mexico/AboutMexico'
import AboutParisMobile from './components/paris/AboutParisMobile'
import AboutParis from './components/paris/AboutParis'
import Newsletter from './components/newsletter/Newsletter'

import AboutJimMobile from './components/aboutJim/AboutJimMobile'

class App extends React.Component {
  state = {
    width: window.innerWidth,
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
    let isMobile
    if (width <= 900) isMobile = true

    let isMobileWF
    if (width <= 760) isMobileWF = true

    let isMobileJim
    if (width <= 539) isMobileJim = true

    return (
      <div className='app'>
        <Route exact path='/navbar' component={NavBarToggle} />
        {isMobile ? (
          <Route exact path='/' component={HomeMobile} />
        ) : (
          <Route exact path='/' component={Home} />
        )}
        {isMobileWF ? (
          <Route
            exact
            path='/world-food-mexico'
            component={AboutMexicoMobile}
          />
        ) : (
          <Route exact path='/world-food-mexico' component={AboutMexico} />
        )}
        {isMobileWF ? (
          <Route exact path='/world-food-paris' component={AboutParisMobile} />
        ) : (
          <Route exact path='/world-food-paris' component={AboutParis} />
        )}

        {isMobileJim ? (
          <Route exact path='/about-james' component={AboutJimMobile} />
        ) : (
          <Route exact path='/about-james' component={AboutJim} />
        )}

        <Route exact path='/newsletter' component={Newsletter} />
        <NavbarSocial />
      </div>
    )
  }
}
export default App
