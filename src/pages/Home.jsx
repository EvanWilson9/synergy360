import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import TakeAction from '../components/TakeAction'
import Meet from '../components/Meet'
import ContactMe from '../components/ContactMe'

export default function Home() {
  return (
    <>
        <Hero/>
        <Services/>
        <TakeAction/>
        <Meet/>
        <ContactMe/>
    </>
  )
}
