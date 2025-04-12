import React from 'react'
import ResourceCard from '../components/ResourceCard'
import { Bandage, BanknoteArrowDown, Brain, CircleDollarSign, House, RockingChair, TrendingUp, WavesLadder } from 'lucide-react'
import ContactMe from '../components/ContactMe'

export default function Resources() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const data = [
        {id:1, title: "Estate", desc: "Manage personal affairs while you're alive and control the distribution of wealth upon your death.", link:"/estate", icon: <House style={{ color: "rgb(220, 38, 38)", width: 30, height: 30 }} />},
        {id:2, title: "Insurance", desc: "A well-structured insurance strategy can help protect your loved ones from the financial consequences of unexpected events.", link:"/insurance", icon: <Bandage style={{ color: "rgb(220, 38, 38)", width: 30, height: 30 }} />},
        {id:3, title: "Investment", desc: "Create an investment strategy that’s designed to pursue your risk tolerance, time horizon, and goals.", link:"/investment", icon: <TrendingUp style={{ color: "rgb(220, 38, 38)", width: 30, height: 30 }} />},
        {id:4, title: "Lifestyle", desc: "How to strike a balance between work and leisure is just one aspect of the wide-ranging Lifestyle matters.", link:"/lifestyle", icon: <WavesLadder style={{ color: "rgb(220, 38, 38)", width: 30, height: 30 }} />},
        {id:5, title: "Money", desc: "Managing your money involves more than simply making and following a budget.", link:"/money", icon: <CircleDollarSign style={{ color: "rgb(220, 38, 38)", width: 30, height: 30 }} />},
        {id:6, title: "Retirement", desc: "Steps to consider so you can potentially accumulate the money you'll need to pursue the retirement activities you want.", link:"/retirement", icon: <RockingChair style={{ color: "rgb(220, 38, 38)", width: 30, height: 30 }} />},
        {id:7, title: "Tax", desc: "Understanding tax strategies can potentially help you better manage your overall tax situation.", link:"/tax", icon: <BanknoteArrowDown style={{ color: "rgb(220, 38, 38)", width: 30, height: 30 }} />},
    ]

  return (
    <>
        <section className='aboutus-section'>
            <div className='aboutus-wrapper'>
                <h1 className='aboutus-title'>Resources</h1>
                <p className='aboutus-desc'>Access valuable resources to help you make informed financial decisions.</p>
            </div>
        </section>
        <section className='resources-section'>
            <div className='resources-wrapper'>
                <h2>Resources</h2>
                <div className='resources-container'>
                    {
                        data.map((item)=>{
                            return(
                                <ResourceCard
                                key={item.id}
                                title={item.title}
                                desc={item.desc}
                                link={item.link}
                                icon={item.icon}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
        <ContactMe/>
    </>
  )
}

