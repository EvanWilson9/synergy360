import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function TakeAction() {
  return (
    <section className='take-action-section'>
      <div className='take-action-wrapper'>
          <h2>Take Action</h2>
          <p>Contact us to schedule a no-obligation Discovery meeting.
          We will walk in your shoes and begin mapping out where
          you are and where you’d like to be. This meeting is all
          about you. We prefer to take on clients for whom we can
          make a big impact. If the fit is mutually right, we then
          schedule a follow-up meeting to discuss solutions. Please
          call us today to schedule your Discovery meeting.</p>
        <div>
          <button className='learn-more red'>Get Started <ArrowRight/></button>
        </div>
      </div>
    </section>
  )
}
