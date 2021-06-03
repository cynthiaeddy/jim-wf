import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'

const NavbarJimMobile = () => {
  return (
    <nav id='navbarJimMobile'>
      <Link to='/navbar'>
        <h6 className='navbarJimMenu'>Menu</h6>
      </Link>
      <div className='navbarJim'>
        <h6>
          James Oseland’s <br />
          <span className='navbarWorldFood'>WORLD FOOD</span>
        </h6>
      </div>
    </nav>
  )
}

export default NavbarJimMobile
