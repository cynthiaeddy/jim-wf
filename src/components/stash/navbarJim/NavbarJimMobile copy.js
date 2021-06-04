import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'
import '../../stylesheets/Universal.css'

const navbarMobile = () => {
  return (
    <nav id='navbarMobile'>
      <Link to='/navbar'>
        <h6 className='navbarMobile menu'>Menu</h6>
      </Link>
      <div className='navbarMobile-title'>
        <h6>
          James Oseland’s <br />
          <span className='nav-world'>WORLD FOOD</span>
        </h6>
      </div>
    </nav>
  )
}

export default navbarMobile
