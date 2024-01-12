import React from 'react'

const Card = () => {
    return (
        <div className='card-container'>
        <div className='image-container'>
        <div className='availability'>
        Sold out
        </div>
        </div>
        <div className='details'>
        <div className='rating'>
        <img src='../images/star.png'/>
        <p>5.0</p> 
        <span>(6).USA</span>
        </div>
        <p className='desc'>
        Life lessons with Katie Zaferes
        </p>
        <p className='price'>
        <span>From $136</span> / person
        </p>
        </div>
        </div>
    )
}

export default Card
