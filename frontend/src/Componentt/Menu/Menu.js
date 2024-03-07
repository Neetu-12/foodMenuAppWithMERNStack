import React from 'react';
// import images from '../images/home-foodi-3.png';
// import images2 from '../images/foodmenu.png';
import images3 from '../images/mixupfood.png';
// import images4 from '../images/home-foodi-4.png';

import './menu.css'

export const Menu = () => {
  return (
    <div className='main-menu'>

      <div className='foodie2'>
        <img src={images3} alt="Something went wrong!" className='foodi3' />
        {/* <img src={images2} alt="Something went wrong!" className='foodi3' /> */}
        {/* <img src={images4} alt="Something went wrong!" className='foodi3' /> */}
        {/* <img src={images} alt="Something went wrong!" className='foodi3' /> */}
      </div>
    </div>
  )
}
