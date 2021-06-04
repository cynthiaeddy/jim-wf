import React from 'react'
import './App.css'
import { Route, Redirect } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import NavBarToggle from './navbars/navBarToggle/NavBarToggle'
import AboutJimMobile from './components/aboutJim/AboutJimMobile'
import HomeMobile from './components/home/HomeMobile'

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
        <Route exact path='/' component={HomeMobile} />
        <Route exact path='/about-james' component={AboutJimMobile} />
        {/* <Redirect to='/' /> */}
      </div>
    )
  }
}
export default App
