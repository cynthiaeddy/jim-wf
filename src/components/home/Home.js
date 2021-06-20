import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import NavbarHome from '../../navbars/navbarHome/NavbarHome'

import '../../stylesheets/Home.css'

const Home = () => (
  <div className='container home'>
    <NavbarHome />

    <div className='homeContainer-home'>
      <div className=' homeContainer-header'>
        <h3>James Oseland’s</h3>
        <h1>World Food</h1>
      </div>

      <section className='homeContainer-main'>
        <div className='ltla'>
          <img src='https://imgur.com/3AFnSfd.jpg' alt='gal with food'></img>
        </div>
        <div className='ltra'>
          <img src='https://imgur.com/Jh9ZcB6.jpg' alt='flan on plate'></img>
        </div>
        <div className='lmla'>
          <img src='https://imgur.com/m4tAvPX.jpg' alt='corn'></img>
        </div>
        <div className='lmra'>
          <img src='https://imgur.com/VEOtKmw.jpg' alt='woman gazing'></img>
        </div>
        <div className=' lbla'>
          <img src='https://imgur.com/CG7o7fq.jpg' alt='older man in hat'></img>
        </div>
        <div className='lbra'>
          <img
            src='https://imgur.com/11sGlQP.jpg'
            alt='single piece of flan'></img>
        </div>

        <div className='carousel-wrapper'>
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={4000}
            transitionTime={1000}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            stopOnHover={true}>
            <div>
              <img
                src='https://imgur.com/SAHVLhY.jpg'
                alt='mexico book cover'></img>
            </div>
            <div>
              <img
                src='https://imgur.com/fEBlwqS.jpg'
                alt='paris book cover'></img>
            </div>
          </Carousel>
        </div>

        <div className=' rtla'>
          <img src='https://imgur.com/DVSJrF2.jpg' alt='waiter'></img>
        </div>
        <div className=' rnla'>
          <img src='https://imgur.com/eG4b0bp.jpg' alt='plate of food'></img>
        </div>
        <div className=' rbla'>
          <img
            src='https://imgur.com/QGPjTRp.jpg'
            alt='woman with bowl of food'></img>
        </div>

        <div className='copy '>
          <h5>
            Introducing World Food, an exceptional new series in the tradition
            of classic cookbooks that takes you on a journey to the world’s
            greatest cuisines and the remarkable cultures they come from.
          </h5>
          <Link to='/newsletter' className='signUpBtn '>
            NEWSLETTER SIGN UP
          </Link>
        </div>
      </section>

      <div className='homeContainer-footer'>
        <h2>
          <a href='https://jamesroper.photoshelter.com/index'>
            Photography by James Roper
          </a>
        </h2>
        <h2>
          <a href='https://cynthiaeddy.netlify.app'>
            Built and Designed by Cynthia Eddy
          </a>
        </h2>
      </div>
    </div>
  </div>
)
export default Home
