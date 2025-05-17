import React from 'react'
import EventCard from '../components/EventCard'

export default function Events() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const events = [
        // {
        //     id: 1, 
        //     title:"Retirement Planning Workshop",
        //     desc:"Join us for an informative session on retirement planning strategies in today's economic environment.",
        //     time: "6:00 PM - 7:30 PM",
        //     address: "9165 Otis Avenue, Indianapolis",
        //     month:"APR",
        //     day:"15",
        //     year:"2025"
        // },
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
                    {events.length > 0 ? (
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
                    ) :
                    (
                        <div>There are no events at the moment.</div>
                    )
                    }
                </div>
            </div>
        </section>
    </>
  )
}
