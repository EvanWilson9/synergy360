import React from 'react'
import ResourceTemplate from '../components/ResourceTemplate';

function Insurance() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
    return (
      <ResourceTemplate
          title="Investment"
          desc="Investing should be easy – just buy low and sell high – but most of us have trouble following that simple advice. There are principles and strategies that may enable you to put together an investment portfolio that reflects your risk tolerance, time horizon, and goals. Understanding these principles and strategies can help you avoid some of the pitfalls that snare some investors."
          video={<iframe className='youtube-vid' width="560" height="315" src="https://www.youtube.com/embed/KoYjHTvcd8c?si=9jtCPeKDLpAOVnM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
          videoTitle="Jane Bond Infiltrating the Market"
          videoDesc="Agent Jane Bond is on the case, cracking the code on bonds."
      />
    )
}

export default Insurance