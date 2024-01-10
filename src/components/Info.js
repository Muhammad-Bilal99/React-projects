import React from 'react'
import emailIcon from "../images/Mail.png";
import linkedInIcon from "../images/Vector.png";

const Info = () => {
  return (
    <div className='info-container'>
      <div className='image-container'>
      </div>
      <h2 className='name'>Muhammad Bilal</h2>
      <p>Frontend Developer</p>
      <small>mdBilal.web</small>
      <div className='btn-container'>
        <a href='https://www.linkedin.com/in/muhammad-bilal-724002273/' className='linkedIn btn'><img src={linkedInIcon}/>LinkedIn</a>
        <a href='' className='email btn'> <img src={emailIcon}/>Emal</a>
      </div>
    </div>
  )
}

export default Info
