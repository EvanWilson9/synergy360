import React from 'react'
import ResourceTemplate from '../components/ResourceTemplate';

function Lifestyle() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
    return (
      <ResourceTemplate
          title="Lifestyle"
          desc="Creating a life map involves a close review of personal finances and an assessment of other building blocks. Lifestyle matters look at how to balance work and leisure, how to make smart choices for the future, and many other items in an effort to help an individual “enjoy the journey.”"
          video={<iframe className='youtube-vid' width="560" height="315" src="https://www.youtube.com/embed/3gRumktzoQs?si=ATqCQ7fAC3y9gbjx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
          videoTitle="It May Be Time for a Financial Checkup"
          videoDesc="It’s never a bad time to speak with your financial professional about changes in your situation."
      />
    )
}

export default Lifestyle