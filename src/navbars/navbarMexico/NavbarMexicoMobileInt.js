import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'
// import '../../stylesheets/Universal.css'

const NavbarMexicoMobileInt = () => {
  return (
    <nav id='navbarMexicoMobileInt'>
      <Link to='/navbar'>
        <h6>Menu</h6>
      </Link>
      <h6>
        James Oseland’s <span className='nav-world '>WORLD FOOD</span>
      </h6>
      <div className='navbarMexicoMobileInt navbarBuy mobileInt'>
        <a href='https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579850'>
          Purchase the Book
        </a>
      </div>
    </nav>
  )
}

export default NavbarMexicoMobileInt
