import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import NavbarHomeMobile from '../../navbars/navbarHome/NavbarHomeMobile'
import LazyLoad from 'react-lazyload'
import '../../stylesheets/HomeMobile.css'

const HomeMobile = () => {
  return (
    <div className='container'>
      <NavbarHomeMobile />
      <div className='homeContainerMobile'>
        <h5 className='homeContainerMobile-h5'>
          Introducing World Food, an exceptional new series in the tradition of
          classic cookbooks that take you on a journey to the world's greatest
          cuisines and the remarkable cultures they come from.
        </h5>
        <LazyLoad>
          <section className='homeContainerMobile-main'>
            <div className='ipadtl'>
              <img src='https://imgur.com/3AFnSfd.jpg' alt='gal with food' />
            </div>
            <div className='ipadml'>
              <img src='https://imgur.com/m4tAvPX.jpg' alt='corn' />
            </div>
            <div className='ipadbl'>
              <img src='https://imgur.com/CG7o7fq.jpg' alt='older man in hat' />
            </div>

            <div className='carousel-mobile'>
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={4000}
                transitionTime={1000}
                showIndicators={false}
                stopOnHover={true}
                showStatus={false}
                showArrows={false}>
                <div>
                  <img src='https://imgur.com/SAHVLhY.jpg' alt='mexico cover' />
                </div>
                <div>
                  <img src='https://imgur.com/fEBlwqS.jpg' alt='paris cover' />
                </div>
              </Carousel>
            </div>
            <div className='ipadtr'>
              <img src='https://imgur.com/DVSJrF2.jpg' alt='waiter' />
            </div>
            <div className='ipadmr'>
              <img src='https://imgur.com/eG4b0bp.jpg' alt='plate of food' />
            </div>
            <div className='ipadbr'>
              <img
                src='https://imgur.com/QGPjTRp.jpg'
                alt='woman with bowl of food'
              />
            </div>
          </section>
        </LazyLoad>
        <div className='homeContainerMobile-footer'>
          <div className='homeContainerMobile-credits'>
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

          <Link to='/newsletter'>
            <button className='signUpBtn mobile'>NEWSLETTER SIGN UP</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeMobile
