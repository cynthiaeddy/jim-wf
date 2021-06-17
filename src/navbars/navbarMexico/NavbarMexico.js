import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'

function NavbarMexico() {
  return (
    <nav id='navbarMexico'>
      <Link to='/navbar'>
        <h6>Menu</h6>
      </Link>
      <div className='navbarBuy'>
        <a href='https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579850'>
          Purchase the Book
        </a>
      </div>
      <h6>
        James Oseland’s <span className='nav-world'>WORLD FOOD</span>
      </h6>
    </nav>
  )
}

export default NavbarMexico
