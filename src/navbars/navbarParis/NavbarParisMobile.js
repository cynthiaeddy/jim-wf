import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Navbar.css'

const NavbarParisMobile = () => {
  return (
    <nav id='navbarMobile' className='navbarMexico'>
      <Link to='/navbar'>
        <h6 className='navbarMenu'>Menu</h6>
      </Link>
      <div className='navbarTitle'>
        <h6>
          James Oseland’s <br />
          <span className='navbarWorldFood'>WORLD FOOD</span>
        </h6>
        <div className='navbarBuy'>
          <a href='https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579834/ref=sr_1_2?dchild=1&keywords=world+food+paris&qid=1607724226&s=books&sr=1-2'>
            Purchase the Book
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavbarParisMobile
