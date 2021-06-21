import React from 'react'
import LazyLoad from 'react-lazyload'
import '../../stylesheets/AboutWF.css'

const ParisMobileImages = () => {
  return (
    <LazyLoad>
      <img
        src='https://imgur.com/r8vgFm4.jpg'
        className='image-spread paris-opener'
        alt='paris cover'
      />
      <img
        src='https://imgur.com/fgSiDbX.jpg'
        className='image-spread'
        alt='park spread'
      />
      <img
        src='https://imgur.com/jj6KmpT.jpg'
        className='image-spread'
        alt='girl chefs'
      />
      <img
        src='https://imgur.com/H6fve1j.jpg'
        className='image-spread'
        alt='oysters'
      />

      <img
        src='https://imgur.com/amuppfm.jpg'
        className='image-spread'
        alt='young chef'
      />

      <img
        src='https://imgur.com/DQBsB0H.jpg'
        className='image-spread'
        alt='picnic'
      />
      <img
        src='https://imgur.com/XvnDYKS.jpg'
        className='image-spread'
        alt='cheese spread'
      />
      <img
        src='https://imgur.com/0sqkvxI.jpg'
        className='image-spread'
        alt='piegal'
      />
      <img
        src='https://imgur.com/jQjDvvb.jpg'
        className='image-spread'
        alt='paris and food'
      />
      <img
        src='https://imgur.com/6BAt0iw.jpg'
        className='image-spread'
        alt='chef at home'
      />
      <img
        src='https://imgur.com/L1WJaM2.jpg'
        className='image-spread'
        alt='flowers spread'
      />
    </LazyLoad>
  )
}

export default ParisMobileImages
