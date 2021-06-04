import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import NavbarSocial from '../../navbars/navbarSocial/NavbarSocial'
import NavbarHomeMobile from '../../navbars/navbarHome/NavbarHomeMobile'
import LazyLoad from 'react-lazyload'
import '../../stylesheets/HomeMobile.css'
import '../../stylesheets/Universal.css'

const HomeMobile = () => {
  return (
    <div className='container'>
      <NavbarHomeMobile />
      <div className='homeContainerMobile'>
        <h5>
          Introducing World Food, an exceptional new series in the tradition of
          classic cookbooks that take you on a journey to the world's greatest
          cuisines and the remarkable cultures they come from.
        </h5>
        <LazyLoad>
          <section className='homeContainerMobile main'>
            <div className='ipadtl'>
              <img src='https://imgur.com/pFJCQVg.png' alt='gal with food' />
            </div>
            <div className='ipadml'>
              <img src='https://imgur.com/9YAUbs6.png' alt='corn' />
            </div>
            <div className='ipadbl'>
              <img src='https://imgur.com/pokfhSn.png' alt='older man in hat' />
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
                  <img src='https://imgur.com/vC8skgZ.png' alt='mexico cover' />
                </div>
                <div>
                  <img src='https://imgur.com/2BytCct.png' alt='paris cover' />
                </div>
              </Carousel>
            </div>
            <div className='ipadtr'>
              <img src='https://imgur.com/5W2uCN4.png' alt='waiter' />
            </div>
            <div className='ipadmr'>
              <img src='https://imgur.com/zGPJQ7t.png' alt='plate of food' />
            </div>
            <div className='ipadbr'>
              <img
                src='https://imgur.com/kfZNdjw.png'
                alt='woman with bowl of food'
              />
            </div>
          </section>
        </LazyLoad>
        <div className='homeContainerMobile footer'>
          <div className='homeContainerMobile credits'>
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

      <NavbarSocial />
    </div>
  )
}

export default HomeMobile
