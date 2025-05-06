import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-wrapper-wrapper'>
        <div className='hero-wrapper'>
          <h1 className='hero-title'>Synergy 360, LLC</h1> 
          <p className='hero-desc'>Financial planning for your today and tommorow.</p>
          <div className='hero-button-container'>
            <Link className='full' to="/about">
              <button className='hero-btn red'>Learn More</button>
            </Link>
            <Link className='full' to="/contact">
              <button className='hero-btn transparent'>Contact Me</button>
            </Link>
          </div>
        </div>
       </div>
    </section>
  )
}
