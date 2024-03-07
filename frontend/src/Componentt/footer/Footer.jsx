import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom'

export const Footer = () => {
  let navigate = useNavigate();
  return (
    <div className="footer">
      <ul className='footer0'>
        <li>Contact No : 1234567890</li>
        <li>
          <a href="https://www.google.com/maps?q=28.6670872,77.0647369&z=17&hl=en" target="_blank" className='address' >
            G-83/21 ,laxmi park nangloi, New Delhi-110041
          </a>
        </li>
        <li>Email : sahneetu754@gmail.com</li>
        <li>
          <a href="https://www.linkedin.com/in/neetu-sah-b9b1aa233/" target="_blank" className='about'>Learn more about me...</a>
        </li>
      </ul>

      <ul className='footer1'>
        <li>React js</li>
        <li>Nodejs</li>
        <li>Mysql</li>
        <li>Expressjs</li>
        <div className="icons">
          <a href="https://github.com/Neetu-12" target="_blank" class="fa fa-github"></a>
          <a href="https://www.linkedin.com/in/neetu-sah-b9b1aa233/" target="_blank" class="fa fa-linkedin"></a>
          <a href="https://www.instagram.com/ne.etu3968/" target="_blank" rel="noreferrer" class="fa fa-instagram"></a>
          <a href="https://twitter.com/NeetuSah9" target="_blank" class="fa fa-twitter"></a>
        </div>
      </ul>

      <ul className='footer2'>
        <li>Qualifications</li>
        <li>Email :- neetus21@navgurukul.org</li>

        <li> &copy; 2023 <a href="/home" className='foodMenu'>Foodmenu</a></li>
        <li> Made with <span class="heart">♥</span> remotely from Anywhere</li>
        {((window.location.href.split('/')[[3]]) === 'Dynamic') ? (<button onClick={() => {
          navigate('./FoodInfo')
        }} className='button'>Add food Items </button>) : ("")}

      </ul>
    </div>
  )
}
