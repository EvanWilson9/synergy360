import React from 'react'
import { Link } from 'react-router-dom'

export default function ResourceCard(props) {
  return (
    <Link className='link' to={props.link}>
        <div className='resource-card'>
            <div>
                <div className='icon'>{props.icon}</div>
            </div>
            <div className='resource-card-text'>
                <h3>{props.title}</h3>
                <div className='gray'>{props.desc}</div>
            </div>
        </div>
    </Link>
  )
}
