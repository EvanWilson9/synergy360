import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <div className='header-wrapper'>
      {/*Top Nav*/}
      <div className='header-top'>
        <h2 className='temp-title'>Synergy 360, LCC</h2>
        <div className='header-top-right'>
          <div className='header-address'>
            <p>9165 Otis Avenue Suite 243</p>
            <p>Indianapolis, IN 46256</p>
          </div>
          <div>
            <button className='header-btn'>Client Login</button>
          </div>
        </div>
      </div>
      {/*Bottom Nav*/}
        <nav>
            <div className='navbar-links'>
                <Link className='link'>Home</Link>
                <Link className='link'>About</Link>
                <Link className='link'>LPL</Link>
                <Link className='link'>Resources</Link>
                <Link className='link'>Events</Link>
                <Link className='link'>Account View</Link>
                <Link className='link'>Contact</Link>
            </div>
          </nav>
        </div>
    </header>
  )
}
