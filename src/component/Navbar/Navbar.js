import React from 'react'
import "./Navbar.css"
import homeImg from "./logo/home.png"
import aboutImg from "./logo/information-button.png"
import serviceImg from "./logo/support.png"
import contctImg from "./logo/phone.png"
function Navbar() {
  return (
    <div className='navbar-container'>

        <ul type="none" className='navbar web-view'>
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Conatct</li>
        </ul>

        <ul type="none" className='navbar mob-view'>
            <li><img src={homeImg} alt='home-icom'/></li>
            <li><img src={serviceImg} alt='home-icom'/></li>
            <li><img src={aboutImg} alt='home-icom'/></li>
            <li><img src={contctImg} alt='home-icom'/></li>
        </ul>
    </div>
  )
}

export default Navbar