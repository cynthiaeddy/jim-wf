import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/NavbarMobileMerge.css'

const NavbarMobileMerge = () => {
  return (
    <nav id='navbarJimMobile'>
      <Link to='/navbar'>
        <h6 className='menu'>Menu</h6>
      </Link>
      <div className='jim'>
        <h6>
          James Oseland’s <br />
          <span className='nav-world'>WORLD FOOD</span>
        </h6>
      </div>
    </nav>
  )
}

export default NavbarMobileMerge
