import React from 'react'
import Credentials from './Credentials'

export default function AboutMeetMe() {
  return (
    <section className='ameet-section'>
      <div className='ameet-wrapper'>
        <img className='meet-img' src="/images/richard-moss-img.jpg"/>
        <div className='meet-text'>
        <div className='meet-desc'>
          <h2 className='action-title'>Meet Richard L. Moss</h2>
            <p>
            Richard L. Moss has been a trusted advocate for his clients providing them with consistent guidance and
            timely advice on their most important financial matters since April of 2001. Richard began his career as
            a Financial Advisor with an international firm, globally recognized for its advisor training program and
            corporate culture. While at the firm, Richard received many honors for his client focused approach to
            wealth management and financial planning.
            </p>
            <p>
            After several years of running a successful practice, Richard was recruited by a team of financial
            entrepreneurs to establish an Indiana based broker dealer and investment firm. In his role as Retail
            Sales Manager for the firm, Richard was primarily responsible for establishing the sales culture of the
            firm as well as strategic business development amongst local and national institutional entities. As a
            native Hoosier, the chance to become significant within the community, not just a successful member of
            the community has been a key source of motivation throughout Richard’s career.
            </p>
            <p>
            In 2014, Richard became certified as a Collaborative Law Financial Specialist. This unique training allows
            Richard to assist divorcing couples to effectively manage and resolve the many financial and budgetary
            issues that may arise during one of the most emotionally difficult moments in their lives.
            </p>
            <p>
            With years of genuine experience at highly reputable firms exploring the various methods of distributing
            investment advice, Richard now utilizes his expertise and innate ability to create and maintain authentic
            relationships as a Partner at Synergy 360 LLC, a full service investment firm based in Indianapolis,
            Indiana.
            </p>
            <p>
            Richard is the proud father of two amazing daughters, Sydney and Chloe and enjoys watching them both
            excel in softball and volleyball.
            </p>
        </div>
        <div>
          <Credentials/>
        </div>
      </div>
      </div>
    </section>
  )
}
