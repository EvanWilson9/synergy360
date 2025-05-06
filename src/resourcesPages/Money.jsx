import React from 'react'
import ResourceTemplate from '../components/ResourceTemplate';

function Money() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
    return (
      <ResourceTemplate
          title="Money"
          desc="One of the keys to a sound financial strategy is spending less than you take in, and then finding a way to put your excess to work. A money management approach involves creating budgets to understand and make decisions about where your money is going. It also involves knowing where you may be able to put your excess cash to work."
          video={<iframe className='youtube-vid' width="560" height="315" src="https://www.youtube.com/embed/bZ-xNeWRT7I?si=a0QN-uAMOqFIoYN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
          videoTitle="The Latte Lie and Other Myths"
          videoDesc="Check out this video to begin separating fact from fiction."
        />
    )
}

export default Money