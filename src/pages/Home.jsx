import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import TakeAction from '../components/TakeAction'
import Meet from '../components/Meet'
import ContactMe from '../components/ContactMe'
import Video  from '../components/Video'

export default function Home() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <>
        <Hero/>
        <Meet/>
        <Video />
        <Services/>
        <TakeAction/>
        <ContactMe/>
    </>
  )
}
