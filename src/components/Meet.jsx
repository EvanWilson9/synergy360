import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Meet() {
  return (
    <section className='meet-section'>
      <div className='meet-wrapper'>
        <img className='meet-img' src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"/>
        <div className='meet-text'>
        <div className='meet-desc'>
          <h2>Meet Richard L. Moss</h2>
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
          <button className='learn-more red'>Learn More About Me <ArrowRight/></button>
        </div>
      </div>
      </div>
    </section>
  )
}