import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function ActionCard(props) {
  return (
    <div className='action-card'>
        <div className='action-card-wrapper'>
            <div>
                <div className='icon'>{props.icon}</div>
            </div>
            <div className='action-card-text'>
                <h3>{props.title}</h3>
                <div className='action-card-desc'>{props.desc}</div>
            </div>
            <div>
                <button className='action-learn-more'>Learn More <ArrowRight/></button>
            </div>
        </div>
    </div>
  )
}
