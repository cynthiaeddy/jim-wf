import React from 'react'
import '../../stylesheets/Navbar.css'

const NavbarSocial = () => {
  return (
    <nav id='NavbarSocial'>
      <div className='social'>
        <div className='email'>
          <a href='mailto:james@jamesoseland.com'>
            <i className='fas fa-envelope fa-2x'></i>
          </a>
        </div>
        <div className='instagram'>
          <a href='https://www.instagram.com/jamesoseland'>
            <i className='fab fa-instagram-square fa-2x'></i>
          </a>
        </div>
        <div className='facebook'>
          <a href=' https://www.facebook.com/james.oseland'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavbarSocial
