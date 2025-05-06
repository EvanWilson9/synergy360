import React from 'react'
import ContactMe from './ContactMe'

export default function ResourceTemplate (props) {
  return (
    <>
        <section className='resourcet-section'>
            <div className='resourcet-wrapper'>
                <div className='resource-text'>
                    <h2 className='action-title'>{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
                <div className='video-container'>
                    <div className='video'>{props.video}</div>
                </div>
                <div className='video-text'>
                    <h3 className='video-title'>{props.videoTitle}</h3>
                    <div>{props.videoDesc}</div>
                </div>
            </div>
            
        </section>
        <ContactMe/>
    </>
  )
}
