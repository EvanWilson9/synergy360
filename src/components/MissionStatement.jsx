import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MissionStatement() {
  return (
    <section className='ms-section'>
        <div className='ms-wrapper'>
            <h2 className='action-title'>Mission Statement</h2>
            <p className='ms-desc'>Our mission at Synergy 360, LLC is to empower our clients through personalized financial guidance,
            helping them achieve their goals while providing exceptional service built on trust, integrity, and transparency.</p>
            <Link className='link' to="/contact">
              <button className='learn-more red'>Contact Me <ArrowRight/></button>
            </Link>
        </div>
    </section>
  )
}
