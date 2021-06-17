import React from 'react'
import '../../stylesheets/AboutWF.css'

const Images = [
  {
    img: (
      <img
        src='https://imgur.com/Goh5CJu.png'
        className='images-spread opener'
        alt='paris cover'
      />
    ),
  },

  {
    img: (
      <img
        src='https://imgur.com/GeTVIXU.png'
        className='images-spread'
        alt='other park spread'
      />
    ),
  },
  {
    img: (
      <img
        src='https://imgur.com/UswFLRh.png'
        className='images-spread'
        alt='girl chefs'
      />
    ),
  },
  {
    img: (
      <img
        src='https://imgur.com/4tSP4Om.png'
        className='images-spread'
        alt='oysters'
      />
    ),
  },
  {
    img: (
      <img
        src='https://imgur.com/U0aEoTl.png'
        className='images-spread'
        alt='young chef'
      />
    ),
  },

  {
    img: (
      <img
        src='https://imgur.com/RWThjCg.png'
        className='images-spread'
        alt='picnic'
      />
    ),
  },
  // {
  //   img: (
  //     <img
  //       src=' https://imgur.com/98D7CMq.png'
  //       className='images-spread'
  //       alt='other park spread'
  //     />
  //   ),
  // },
  {
    img: (
      <img
        src='https://imgur.com/LTNOm3M.png'
        className='images-spread'
        alt='paris and food'
      />
    ),
  },
  {
    img: (
      <img
        src='https://imgur.com/0r6cZ1e.png'
        className='images-spread'
        alt='young girl'
      />
    ),
  },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/6sFjYix.png'
  //       className='images-spread'
  //       alt='4 squares'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/RToV3qn.png'
  //       className='images-spread'
  //       alt='ad'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/58CEeOw.png'
  //       className='images-spread'
  //       alt='chef at home'
  //     />
  //   ),
  // },

  {
    img: (
      <img
        src='https://imgur.com/DrRCHsx.png'
        className='images-spread'
        alt='flowers spread'
      />
    ),
  },
  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/LTNOm3M.png'
  //       className='images-spread'
  //       alt='paris and food'
  //     />
  //   ),
  // },
  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/Goh5CJu.png'
  //       className='images-spread opener'
  //       alt='paris cover'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/GeTVIXU.png'
  //       className='images-spread'
  //       alt='other park spread'
  //     />
  //   ),
  // },
  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/UswFLRh.png'
  //       className='images-spread'
  //       alt='girl chefs'
  //     />
  //   ),
  // },
  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/4tSP4Om.png'
  //       className='images-spread'
  //       alt='oysters'
  //     />
  //   ),
  // },
  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/U0aEoTl.png'
  //       className='images-spread'
  //       alt='young chef'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/RWThjCg.png'
  //       className='images-spread'
  //       alt='picnic'
  //     />
  //   ),
  // },
  // {
  //   img: (
  //     <img
  //       src=' https://imgur.com/98D7CMq.png'
  //       className='images-spread'
  //       alt='other park spread'
  //     />
  //   ),
  // },
  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/okJs4BJ.png'
  //       className='images-spread'
  //       alt='minis'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/0r6cZ1e.png'
  //       className='images-spread'
  //       alt='young girl'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/okJs4BJ.png'
  //       className='images-spread'
  //       alt='minis'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/RToV3qn.png'
  //       className='images-spread'
  //       alt='ad'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/58CEeOw.png'
  //       className='images-spread'
  //       alt='chef at home'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/DrRCHsx.png'
  //       className='images-spread'
  //       alt='flowers spread'
  //     />
  //   ),
  // },
  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/LTNOm3M.png'
  //       className='images-spread'
  //       alt='paris and food'
  //     />
  //   ),
  // },
  {
    img: (
      <img
        src='https://imgur.com/Goh5CJu.png'
        className='images-spread opener'
        alt='paris cover'
      />
    ),
  },

  {
    img: (
      <img
        src='https://imgur.com/GeTVIXU.png'
        className='images-spread'
        alt='other park spread'
      />
    ),
  },
  {
    img: (
      <img
        src='https://imgur.com/UswFLRh.png'
        className='images-spread'
        alt='girl chefs'
      />
    ),
  },
  {
    img: (
      <img
        src='https://imgur.com/4tSP4Om.png'
        className='images-spread'
        alt='oysters'
      />
    ),
  },
  {
    img: (
      <img
        src='https://imgur.com/U0aEoTl.png'
        className='images-spread'
        alt='young chef'
      />
    ),
  },

  {
    img: (
      <img
        src='https://imgur.com/RWThjCg.png'
        className='images-spread'
        alt='picnic'
      />
    ),
  },
  {
    img: (
      <img
        src='https://imgur.com/LTNOm3M.png'
        className='images-spread'
        alt='paris and food'
      />
    ),
  },
  // {
  //   img: (
  //     <img
  //       src=' https://imgur.com/98D7CMq.png'
  //       className='images-spread'
  //       alt='other park spread'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/0r6cZ1e.png'
  //       className='images-spread'
  //       alt='young girl'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/6sFjYix.png'
  //       className='images-spread'
  //       alt='4 squares'
  //     />
  //   ),
  // },

  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/RToV3qn.png'
  //       className='images-spread'
  //       alt='ad'
  //     />
  //   ),
  // },

  {
    img: (
      <img
        src='https://imgur.com/58CEeOw.png'
        className='images-spread'
        alt='chef at home'
      />
    ),
  },

  {
    img: (
      <img
        src='https://imgur.com/DrRCHsx.png'
        className='images-spread'
        alt='flowers spread'
      />
    ),
  },
  // {
  //   img: (
  //     <img
  //       src='https://imgur.com/LTNOm3M.png'
  //       className='images-spread'
  //       alt='paris and food'
  //     />
  //   ),
  // },
]
export default Images
