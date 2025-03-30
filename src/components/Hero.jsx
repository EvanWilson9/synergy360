import React from 'react'

export default function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-wrapper'>
        <h1 className='hero-title'>Synergy 360, LLC</h1> 
        <p className='hero-desc'>Financial planning for your today and tommorow.</p>
        <div className='hero-button-container'>
          <button className='hero-btn red'>Learn More</button>
          <button className='hero-btn transparent'>Contact Me</button>
        </div>
       </div>
    </section>
  )
}
