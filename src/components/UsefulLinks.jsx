import React from 'react'

export default function UsefulLinks() {

    const data = [
        {
            id:1,
            title: "Resources",
            items: [
                { id: 1, title: "LPL Financial", link: "https://www.lpl.com/"},
                { id: 2, title: "FINRA", link: "https://www.finra.org/"},
                { id: 3, title: "SIPC", link: "https://www.sipc.org/"}
            ]
        },
        {
            id:2,
            title: "Planning Tools",
            items: [
                { id: 1, title: "Social Security Administration", link: "https://www.ssa.gov/"},
                { id: 2, title: "Medicare", link: "https://www.medicare.gov/"},
                { id: 3, title: "Internal Revenue Service", link: "https://www.irs.gov/"}
            ]
        },{
            id:3,
            title: "Market Insights",
            items: [
                { id: 1, title: "MarketWatch", link: "https://www.marketwatch.com/"},
                { id: 2, title: "Morningstar", link: "https://www.morningstar.com/"},
                { id: 3, title: "Bloomberg", link: "https://www.bloomberg.com/"}
            ]
        }
    ]

  return (
    <section className='ul-section'>
        <div className='ul-wrapper'>
            <h2 className='action-title'>Useful Links</h2>
            <div className='ul-card-container'>
                {
                    data.map((item)=>{
                        return(
                            <div className='ul-card' key={item.id}>
                                <h3>{item.title}</h3>

                                <div className='ul-links-container'>{item.items.map((item)=>{
                                    return(
                                        <div key={item.id}>
                                            <a className='link' href={item.link} target='_blank'><div className='ul-link'>{item.title}</div></a>
                                        </div>
                                    )
                                })}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
