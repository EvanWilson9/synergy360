import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

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
                <Link className='link' to="/about">
                    <button className='action-learn-more'>Learn More <ArrowRight/></button>
                </Link>
            </div>
        </div>
    </div>
  )
}
