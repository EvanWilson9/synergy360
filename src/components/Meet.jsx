import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Meet() {
  return (
    <section className='meet-section'>
      <div className='meet-wrapper'>
        <img className='meet-img' src="/images/richard-moss-img.jpg"/>
        <div className='meet-text'>
        <div className='meet-desc'>
          <h2 className='action-title'>Meet Richard L. Moss</h2>
            <p>
              With over 20 years of experience in financial planning and wealth management,
              I'm dedicated to helping clients achieve their financial goals and secure their future.
            </p>
            <p>
              My approach is simple: I listen to your needs, understand your objectives, and work with 
              you to develop a personalized strategy that aligns with your goals and values.
            </p>
        </div>
        <div>
          <Link className='link' to="/about">
            <button className='learn-more red'>Learn More About Me <ArrowRight/></button>
          </Link>
        </div>
      </div>
      </div>
    </section>
  )
}