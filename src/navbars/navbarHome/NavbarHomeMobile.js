import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'

const NavbarHomeMobile = () => {
  return (
    <nav id='navbarMobile' className='navbarHomeMobileHybrid'>
      <Link to='/navbar'>
        <h6 className='navbarMenu'>Menu</h6>
      </Link>
      <div className='navbarTitle'>
        <h3>
          James Oseland’s <br />
          <span className='navbarWorldFood'>
            <h1>WORLD FOOD</h1>
          </span>
        </h3>
      </div>
    </nav>
  )
}

export default NavbarHomeMobile
