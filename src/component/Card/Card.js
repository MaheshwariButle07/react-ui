import React from 'react'
import "./Card.css"

const data = [
    {
        logo: "https://thumbs.dreamstime.com/b/icon-seo-audit-seo-audit-seo-audit-161833615.jpg",
        heading: "Bussiness Website Audit",
        info: "Acess your website's performance and provide important recommendations.",
    },
    {
        logo: "https://www.shutterstock.com/image-vector/strategic-planning-concept-icon-determine-260nw-2258869233.jpg",
        heading: "Stratgic website planning",
        info: "Create a Startegy to align ypour website with bussiness goals and audience needs.",
    },
    {
        logo:"https://img.freepik.com/premium-vector/analysis-logo-with-investment-search-logo-design-inspiration_273648-1505.jpg",
        heading: "Company Analysis",
        info: "Review Compititors sites to uncover oppertunities form differentiation.",
    },
    {
        logo: "https://cdn3.vectorstock.com/i/1000x1000/48/67/conversion-rate-optimisation-icon-business-vector-5994867.jpg",
        heading: "Conversion Rate Optimization",
        info: "Enhance design and functionality to boost user engament and conversion.",
    }
]

function Card() {
    return (
        <div className='card-main-container'>
            {
                data.map((information) => {
                    return (
                        <div className='card-container' >
                            <img className='card-img' src={information.logo} alt='img' />

                            <h1>
                               {information.heading}
                            </h1>

                            <p>
                                {information.info}
                            </p>

                            <button className='card-btn'>Details</button>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Card