import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for better world</h1>
        <p>Edusity’s platform fits the needs of your business to create a workforce prepared to meet the demands of today’s workplace easily and cost-effectively.</p>
        <button className='btn'>Explore more <img src= {dark_arrow} alt=""/> </button>
      </div>
      
    </div>
  )
}

export default Hero
