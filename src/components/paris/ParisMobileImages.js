import React from 'react'
import LazyLoad from 'react-lazyload'
import '../../stylesheets/AboutWF.css'

const ParisMobileImages = () => {
  return (
    <LazyLoad>
      <img
        src='https://imgur.com/dm1Yv2W.png'
        className='image-spread paris-opener'
        alt='paris cover'
      />
      <img
        src='https://imgur.com/GeTVIXU.png'
        className='image-spread'
        alt='park spread'
      />
      <img
        src='https://imgur.com/UswFLRh.png'
        className='image-spread'
        alt='girl chefs'
      />
      <img
        src='https://imgur.com/4tSP4Om.png'
        className='image-spread'
        alt='oysters'
      />
      <img
        src='https://imgur.com/U0aEoTl.png'
        className='image-spread'
        alt='young chef'
      />
      <img
        src='https://imgur.com/RWThjCg.png'
        className='image-spread'
        alt='picnic'
      />
      <img
        src='https://imgur.com/LTNOm3M.png'
        className='image-spread'
        alt='paris and food'
      />
      <img
        src='https://imgur.com/58CEeOw.png'
        className='image-spread'
        alt='chef at home'
      />
      <img
        src='https://imgur.com/DrRCHsx.png'
        className='image-spread'
        alt='flowers spread'
      />
    </LazyLoad>
  )
}

export default ParisMobileImages
