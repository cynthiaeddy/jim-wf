import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'

const NavbarHome = () => {
  return (
    <nav id='navbarHome'>
      <Link to='/navbar'>
        <h6 className='navbarHomeMenu'>Menu</h6>
      </Link>
    </nav>
  )
}

export default NavbarHome
