import React from 'react'
import Logo1 from '../assets/motionarteffect-img2.png'

const Navbar = () => { 
    return( 
            <nav className='navbar'>
                <div className='left-part'>
                    <div className='envato-logo' style={{ backgroundImage: `url(${Logo1})` }}> </div>
                    <h1><a href="#" className='nav-link'>envato<span>market</span></a></h1>
                </div>
           
                <div>
                   <a className='nav-btn'>Buy now</a>
                </div>
            </nav>
    )
}
export default Navbar
