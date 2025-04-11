import React from 'react'
import ContactMe from '../components/ContactMe'

export default function Contact() {
  return (
    <>
        <section className='aboutus-section'>
            <div className='aboutus-wrapper'>
                <h1 className='aboutus-title'>Contact Me</h1>
                <p className='aboutus-desc'>I'm here to answer your questions and help you take the next step toward your financial goals.</p>
            </div>
        </section>
        <ContactMe/>
    </>
  )
}
