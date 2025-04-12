import { Calendar, Clock, MapPin } from 'lucide-react'
import React from 'react'

export default function EventCard(props) {
  return (
    <div className='event-card'>
        <div className='event-card-top'>
            <Calendar style={{color:"white", width:'30', height:'30'}}/>
            <div className='event-card-date'>        
                <div>{props.month}</div>
                <div className='day'>{props.day}</div>
                <div>{props.year}</div>
            </div>
        </div>
        <div className='event-card-bottom'>
        <h3>{props.title}</h3>
        <div>{props.desc}</div>
        <div className='event-card-details'>
            <Clock style={{color:"rgb(220, 38, 38)", width:'20', height:'20'}}/>        
            {props.time}
        </div>
        <div className='event-card-details'>                        
            <MapPin style={{color:"rgb(220, 38, 38)", width:'20', height:'20'}}/>        
            {props.address}
        </div>
        </div>
    </div>
  )
}
