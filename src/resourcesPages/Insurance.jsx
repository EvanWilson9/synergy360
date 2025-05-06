import React from 'react'
import ResourceTemplate from '../components/ResourceTemplate'

export default function Insurance() {
window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <ResourceTemplate
        title="Insurance"
        desc="Insurance transfers the financial risk of life's events to an insurance company. A sound insurance strategy can help protect your family from the financial consequences of those events. A strategy can include personal insurance, liability insurance, and life insurance."
        video={<iframe className='youtube-vid' width="560" height="315" src="https://www.youtube.com/embed/r-t6uwDFeno?si=10JzFjnOla_XyICX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
        videoTitle="The Other Sure Thing"
        videoDesc="Though we don't like to think about it, all of us will make an exit sometime. Are you prepared?"
    />
  )
}