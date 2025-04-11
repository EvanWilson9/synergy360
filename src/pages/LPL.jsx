import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function LPL() {

    const data = [
        {id:1, title:"Independence", desc:"LPL Financial provides me with the freedom to recommend the financial strategies and products that address your needs and goals."},
        {id:2, title:"Research", desc:"LPL's industry-leading research team provides unbiased market analysis and investment strategies to help guide our recommendations."},
        {id:3, title:"Technology", desc:"LPL provides advanced technology solutions that enable us to provide you with a top-tier client experience."}
    ]

  return (
    <>
        <section className='aboutus-section'>
            <div className='aboutus-wrapper'>
                <h1 className='aboutus-title'>LPL Financial</h1>
                <p className='aboutus-desc'>Learn about our broker-dealer and how they support our practice.</p>
            </div>
        </section>
        <section className='aboutlpl-section'>
            <div className='aboutlpl-wrapper'>
                <img className='lpl-logo' src="/images/lpl-logo.png"/>
                <h2>About LPL Financial</h2>
                <div className='about-lpl-text'>
                    <p>LPL Financial is one of the leading financial services companies and the largest independent broker/dealer in the nation.</p>
                    <p>For more than 30 years, LPL has served as an enabling partner, supporting financial advisors in their goals of protecting and growing their clients' wealth.</p>
                    <p>A chief objective of LPL is to reduce the complexity of running a financial services practice so advisors can focus on what they do best—help their clients attain their financial goals and fulfill their dreams.</p>
                    <p>With headquarters in Boston, Charlotte, and San Diego, LPL Financial supports thousands of financial advisors nationwide.</p>
                </div>
                <a className='link' href="https://www.lpl.com/" target="_blank"><button className='learn-more red center'>Visit LPL Financial Website <ArrowRight/></button></a>
            </div>
        </section>
        <section className='whylpl-section'>
            <div className='whylpl-wrapper'>
                <h2 className='center'>Why LPL Financial?</h2>
                <div className='why-card-container'>
                    {
                        data.map((item)=>{
                            return(
                                <div className='why-card' key={item.id}>
                                    <h3>{item.title}</h3>
                                    <div>{item.desc}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <p className='disclaimer'>*As reported by Financial Planning magazine, June 1996-2022, based on total revenue.</p>
            </div>
        </section>
    </>
  )
}
