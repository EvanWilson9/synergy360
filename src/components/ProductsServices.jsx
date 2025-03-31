import { Check } from 'lucide-react';
import React from 'react'

export default function ProductsServices() {

    const investments = [
        { id: 1, title: "Mutual Funds" },
        { id: 2, title: "ETFs" },
        { id: 3, title: "College Savings Plans" },
        { id: 4, title: "Traditional IRA" },
        { id: 5, title: "Rollover IRA" },
        { id: 6, title: "Roth IRA" },
        { id: 7, title: "SEP IRA" },
        { id: 8, title: "Simple IRA" },
        { id: 9, title: "Advisory Accounts" },
        { id: 10, title: "Brokerage Accounts" },
        { id: 11, title: "Fixed/ Fixed Index Annuity" },
        { id: 12, title: "Variable Annuity" }
      ];
      
      const financialPlanning = [
        { id: 1, title: "Retirement Income Planning" },
        { id: 2, title: "Cash Flow/ Budgeting" },
        { id: 3, title: "Hourly Consulting" },
        { id: 4, title: "College Funding" },
        { id: 5, title: "Insurance" }
      ];
      
      const insurance = [
        { id: 1, title: "Disability Income Insurance" },
        { id: 2, title: "Life Insurance" },
        { id: 3, title: "Long-Term-Care Insurance" }
      ];

  return (
    <section className='ps-section'>
        <div className="ps-wrapper">
            <h2>Products & Services</h2>
            <div className='ps-container'>
                <div className='service-container'>
                    <h3>Investments</h3>
                    <div>
                        { 
                            investments.map((item) => {
                                return (
                                <div className='service' key={item.id}>
                                    <Check style={{color:"rgb(220, 38, 38)", width:'25', height:'25'}}/> 
                                    {item.title}
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='service-container'>
                    <h3>Financial Planning</h3>
                    <div>
                        { 
                            financialPlanning.map((item) => {
                                return (
                                <div className='service' key={item.id}>
                                    <Check style={{color:"rgb(220, 38, 38)", width:'25', height:'25'}}/> 
                                    {item.title}
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='service-container'>
                    <h3>Insurance</h3>
                    <div>
                        { 
                            insurance.map((item) => {
                                return (
                                <div className='service' key={item.id}>
                                    <Check style={{color:"rgb(220, 38, 38)", width:'25', height:'25'}}/> 
                                    {item.title}
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
