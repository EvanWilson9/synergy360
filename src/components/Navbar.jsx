import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/lpl', label: 'LPL' },
  { to: '/resources', label: 'Resources' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header>
      <div className='header-utility'>
        <div className='header-utility-inner'>
          <p className='header-address'>9165 Otis Avenue Suite 243, Indianapolis, IN 46256</p>
          <a className='header-utility-link' href='https://accountview.lpl.com/web/login' target='_blank' rel='noreferrer'>Account View</a>
        </div>
      </div>
      <div className='header-main'>
        <div className='header-main-inner'>
          <Link className='brand' to='/' onClick={close}>
            Synergy 360<span>, LLC</span>
          </Link>
          <button className='nav-toggle' aria-label='Toggle menu' aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? 'open' : ''}>
            <div className='navbar-links'>
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.end} className='nav-link' onClick={close}>{l.label}</NavLink>
              ))}
            </div>
            <a href='https://accountview.lpl.com/web/login' target='_blank' rel='noreferrer'>
              <button className='header-btn'>Client Login</button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
