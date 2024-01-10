import React from 'react'
import Github from '../images/GitHub Icon.png';
import Instagram from '../images/Instagram Icon.png';
import Twitter from '../images/Twitter Icon.png';
import Facebook from '../images/Facebook Icon.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <img src={Instagram}/>
      <img src={Facebook}/>
      <img src={Github}/>
      <img src={Twitter}/>
    </div>
  )
}

export default Footer
