import React from 'react'
import ResourceTemplate from '../components/ResourceTemplate';

function Tax() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
    return (
      <ResourceTemplate
          title="Tax"
          desc="Understanding tax strategies and managing your tax bill should be part of any sound financial approach. Some taxes can be deferred, and others can be managed through tax-efficient investing. With careful and consistent preparation, you may be able to manage the impact of taxes on your financial efforts."
          video={<iframe className='youtube-vid' width="560" height="315" src="https://www.youtube.com/embed/LpQrzx12eDA?si=Eo4sG01dwzLj98FM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
          videoTitle="The Facts About Income Tax"
          videoDesc="Millions faithfully file their 1040 forms each April. But some things about federal income taxes may surprise you."
        />
    )
}

export default Tax