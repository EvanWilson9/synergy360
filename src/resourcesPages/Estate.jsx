import React from 'react'
import ResourceTemplate from '../components/ResourceTemplate'

export default function Estate() {
window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <ResourceTemplate
        title="Estate"
        desc="Effective estate management enables you to manage your affairs during your lifetime and control the distribution of your wealth after death. An effective estate strategy can spell out your healthcare wishes and ensure that they're carried out – even if you are unable to communicate. It can even designate someone to manage your financial affairs should you be unable to do so."
        video={<iframe className='youtube-vid' width="560" height="315" src="https://www.youtube.com/embed/R6bcjcwkqAI?si=QT-fsqEncl0_DCYt&amp;start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        videoTitle="4 Elements of an Estate Strategy"
        videoDesc="Learn about the importance of having an estate strategy in this helpful and informative video."
    />
  )
}
