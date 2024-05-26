import React from 'react'
import Logo2 from '../assets/MotionArtEffect-logo.png'

const Pheader = () => {
   return( 
      <div className='Preview-header'> 
         <img src= {Logo2} alt="" className='logo2'/>
         <div className='purchase-btn'>
            <a href="#">Purchase Now</a>
         </div>
      </div>
   )
}

export default Pheader