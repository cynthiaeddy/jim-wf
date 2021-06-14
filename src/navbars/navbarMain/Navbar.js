import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <Link to='/navbar'>
        <h6>Menu</h6>
      </Link>
      <h6>
        James Oseland’s <span className='nav-world'>WORLD FOOD</span>
      </h6>
    </nav>
  )
}

export default Navbar
