import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'

const NavbarMexico = () => {
  return (
    <nav id='NavbarMexico'>
      <Link to='/navbar'>
        <h6>Menu</h6>
      </Link>
      <div className='buyNav'>
        <a href='https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579850'>
          Purchase the Book
        </a>
      </div>
      <h6>
        James Oseland’s <span class='nav-world'>WORLD FOOD</span>
      </h6>
    </nav>
  )
}

export default NavbarMexico
