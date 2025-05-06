import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <div className='header-wrapper'>
      {/*Top Nav*/}
      <div className='header-top'>
        <div className='header-top-wrapper'>
        <Link className='link' to="/">
          <h2 className='temp-title'>Synergy 360, LCC</h2>
        </Link>
        <div className='header-top-right'>
          <div className='header-address'>
            <p>9165 Otis Avenue Suite 243</p>
            <p>Indianapolis, IN 46256</p>
          </div>
          <div>
            <a href='https://accountview.lpl.com/web/login' target="_blank"><button className='header-btn'>Client Login</button></a>
          </div>
        </div>
        </div>
      </div>
      {/*Bottom Nav*/}
        <nav>
            <div className='navbar-links'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/about' className='link'>About</Link>
                <Link to="/lpl" className='link'>LPL</Link>
                <Link to="/resources" className='link'>Resources</Link>
                <Link to="/events" className='link'>Events</Link>
                <a href='https://accountview.lpl.com/web/login' target="_blank" className='link'>Account View</a>
                <Link to="/contact" className='link'>Contact</Link>
            </div>
          </nav>
        </div>
    </header>
  )
}
