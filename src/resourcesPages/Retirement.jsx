import React from 'react'
import ResourceTemplate from '../components/ResourceTemplate';

function Retirement() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
    return (
      <ResourceTemplate
          title="Retirement"
          desc="Where will your retirement money come from? If you’re like most people, qualified-retirement plans, Social Security, personal savings and investments are expected to play a role. Once you have estimated the amount of money you may need for retirement, a sound approach involves taking a close look at your potential retirement-income sources."
          video={<iframe className='youtube-vid' width="560" height="315" src="https://www.youtube.com/embed/TdqcsAdWZJo?si=iMlIlKLnO1AAZNk3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
          videoTitle="A Bucket Plan to Go with Your Bucket List"
          videoDesc="A bucket plan can help you be better prepared for a comfortable retirement."
        />
    )
}

export default Retirement