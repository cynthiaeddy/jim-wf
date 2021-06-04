import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'

const NavbarMobile = () => {
  return (
    <nav id='navbarMobile'>
      <Link to='/navbar'>
        <h6 className='navbarMenu'>Menu</h6>
      </Link>
      <div className='navbarTitle'>
        <h6>
          James Oseland’s <br />
          <span className='navbarWorldFood'>WORLD FOOD</span>
        </h6>
      </div>
    </nav>
  )
}

export default NavbarMobile
