import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'

const NavBarToggle = () => {
  return (
    <div id='navBarToggle'>
      <ul className='toggleNavBar'>
        <li>
          <h4>
            <Link to='/' className='home'>
              Home
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link to='/world-food-mexico' className='world-food'>
              World Food: Mexico City
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link to='/world-food-paris' className='world-food'>
              World Food: Paris
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link to='/about-james' className='about-james'>
              About James Oseland
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link to='/about-james-old' className='about-james'>
              About James Oseland Too
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link to='/newsletter' className='newsletter'>
              Newsletter and Videos
            </Link>
          </h4>
        </li>
      </ul>
    </div>
  )
}

export default NavBarToggle
