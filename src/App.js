import React from 'react'
import './App.css'
import { Route, Redirect } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import NavBarToggle from './navbars/navBarToggle/NavBarToggle'
import NavbarSocial from './navbars/navbarSocial/NavbarSocial'
import AboutJimMobile from './components/aboutJim/AboutJimMobile'
import AboutJim from './components/aboutJim/AboutJim'
import HomeMobile from './components/home/HomeMobile'
import Home from './components/home/Home'
import AboutMexicoMobile from './components/mexico/AboutMexicoMobile'
import AboutMexico from './components/mexico/AboutMexico'
import Newsletter from './components/newsletter/Newsletter'

import AboutJimMobileCopy from './components/aboutJim/AboutJimMobileCopy'
import AboutJimMobileMerge from './components/aboutJim/AboutJimMobileMerge'
import AboutJimMobileNew from './components/aboutJim/AboutJimMobileNew'

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

    let isMobileMexico
    if (width <= 760) isMobileMexico = true

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
        {isMobileMexico ? (
          <Route exact path='/world-food' component={AboutMexicoMobile} />
        ) : (
          <Route exact path='/world-food' component={AboutMexico} />
        )}
        {isMobileJim ? (
          <Route exact path='/about-james' component={AboutJimMobile} />
        ) : (
          <Route exact path='/about-james' component={AboutJim} />
        )}

        {isMobileJim ? (
          <Route
            exact
            path='/about-james-copy'
            component={AboutJimMobileCopy}
          />
        ) : (
          <Route exact path='/about-james-copy' component={AboutJim} />
        )}
        {isMobileJim ? (
          <Route
            exact
            path='/about-james-merge'
            component={AboutJimMobileMerge}
          />
        ) : (
          <Route exact path='/about-james-merge' component={AboutJim} />
        )}

        <Route exact path='/newsletter' component={Newsletter} />
        {/* <Redirect to='/' /> */}
        <NavbarSocial />
      </div>
    )
  }
}
export default App
