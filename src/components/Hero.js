import React from 'react'
import gridImg from '../images/Group 77.png'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='image-container'>
       <img className='gridImg' src={gridImg}/>
      </div>
      <div className='text-container'>
      <h1>
        Online Experiences
      </h1>
      <p>
      Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
      </div>
    </div>
  )
}

export default Hero
