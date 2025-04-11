import React from 'react'
import EventCard from '../components/EventCard'

export default function Events() {

    const events = [
        {
            id: 1, 
            title:"Retirement Planning Workshop",
            desc:"Join us for an informative session on retirement planning strategies in today's economic environment.",
            time: "6:00 PM - 7:30 PM",
            address: "9165 Otis Avenue, Indianapolis",
            month:"APR",
            day:"15",
            year:"2025"
        },
        {
            id: 2, 
            title:"Social Security Strategies",
            desc:"Learn about maximizing your Social Security benefits and integrating them into your retirement plan.",
            time: "10:00 AM - 11:30 AM",
            address: "Virtual Webinar",
            month:"JUN",
            day:"06",
            year:"2025"
        }
    ]

  return (
    <>
        <section className='aboutus-section'>
            <div className='aboutus-wrapper'>
                <h1 className='aboutus-title'>Upcoming Events</h1>
                <p className='aboutus-desc'>More events are on the way! Check back soon for more information.</p>
            </div>
        </section>
        <section className='events-section'>
            <div className='events-wrapper'>
                <div className='events-container'>
                    {
                        events.map((item)=>{
                            return(
                                <EventCard
                                    key={item.id}
                                    month={item.month}
                                    day={item.day}
                                    year={item.year}
                                    title={item.title}
                                    desc={item.desc}
                                    time={item.time}
                                    address={item.address}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}
