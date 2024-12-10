import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import "./Home.css"
import Card from '../../component/Card/Card'


function Home() {
  return (
    <div className='body'>
        <Navbar/>

        <div className='info-main-container-1'>
            <div className='info-container'>
                <h3>
                    Empower your brand 
                </h3>

                <h1>
                    Elevate your bussiness with expert website consulting 
                </h1>

                <p>
                    Transform your onlone presence with expert website consulting. we provide tailored stratigies and degsine to drive your bussiness groeth. Let's build your digital future together.
                </p>

                <button className='info-btn'>Know More</button>

            </div>


            <div className='info-img-container'>

                <img className='info-img' src='https://t3.ftcdn.net/jpg/07/13/35/82/360_F_713358254_pM12hayFvGkMbXwU1wERawwC2Tu3Mfpy.jpg' alt='img' />
            </div>
        </div>

        <div className='info-main-container-2'>
           <div className='info-container'>
           <h2>
                BUSSINESS CONSULTING
            </h2>
            
            <h1>
                What services do we offer for your bussiness
            </h1>

           </div>
            

            <div className='info-container'>
            <p>See how our tailored solutions can boost your business. From planning to support, we provide the expertise to drive your success.</p>
            <a href='#'><span>All services</span></a>
            </div>
        </div>

        <div className='card-main-container'>
            <Card/>
        </div>
    </div>
  )
}

export default Home