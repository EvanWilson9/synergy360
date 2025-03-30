import React from 'react'
import { ArrowRight, ZoomIn, Brain, ShieldCheck, Bandage, ChartNoAxesColumn } from 'lucide-react';
import ActionCard from './ActionCard';


export default function Services() {
  return (
    <section className='action-section'>
        <div className='action-wrapper'>
                <h2 className='action-title'>How We Do It</h2>
                <h3 className='action-card-title'>We use a comprehensive process to help clients address five key concerns:</h3>
                <div className='action-card-container'>
                    <ActionCard
                    icon={<Brain style={{color:"rgb(220, 38, 38)", width:'30', height:'30'}}/>}
                    title="Smart Investing"
                    desc="Make smart decisions with their money and investments."
                    />
                    <ActionCard
                    icon={<ChartNoAxesColumn style={{color:"rgb(220, 38, 38)", width:'30', height:'30'}}/>}
                    title="Tax Planning"
                    desc="Use tax-efficient strategies to save money."
                    />
                    <ActionCard
                    icon={<Bandage style={{color:"rgb(220, 38, 38)", width:'30', height:'30'}}/>}
                    title="Family Care"
                    desc="Secure financial protection for loved ones."
                    />
                    <ActionCard
                    icon={<ZoomIn style={{color:"rgb(220, 38, 38)", width:'30', height:'30'}}/>}
                    title="Charity Growth"
                    desc="Maximize impact through smart giving strategies."
                    />
                    <ActionCard
                    icon={<ShieldCheck style={{color:"rgb(220, 38, 38)", width:'30', height:'30'}}/>}
                    title="Asset Protection"
                    desc="Protect their assets from being unnecessarily taken."
                    />
                </div>
                <div>
                    <button className='learn-more red'>Take Action <ArrowRight /></button>
                </div>
            </div>
    </section>
  )
}
