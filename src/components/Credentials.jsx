import { Check } from 'lucide-react'
import React from 'react'

export default function Credentials() {

    const credentials = [
        {id: 1, title: "Emtpy Credential"},
        {id: 2, title: "Emtpy Credential"},
        {id: 3, title: "Emtpy Credential"},
        {id: 4, title: "Emtpy Credential"},

    ]

  return (
    <section className='credentials-section'>
        <div className='credentials-wrapper'>
            <h3>Credentials</h3>
            <div className='credentials-container'>
                {
                    credentials.map((item)=>{
                        return(
                            <div className='credential' key={item.id}>
                                <Check style={{color:"rgb(220, 38, 38)", width:'25', height:'25'}}/> 
                                <div>{item.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
