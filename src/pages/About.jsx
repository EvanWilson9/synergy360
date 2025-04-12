import React from 'react'
import AboutUs from '../components/AboutUs'
import ProductsServices from '../components/ProductsServices'
import MissionStatement from '../components/MissionStatement'
import AboutMeetMe from '../components/AboutMeetMe'
import UsefulLinks from '../components/UsefulLinks'

export default function About() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  return (
    <>
        <AboutUs/>
        <ProductsServices/>
        <MissionStatement/>
        <AboutMeetMe/>
        <UsefulLinks/>
    </>
  )
}
