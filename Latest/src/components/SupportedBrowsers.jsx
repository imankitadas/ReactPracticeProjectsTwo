import React from 'react'
import Simg from '../assets/motionarteffect-img8.png'

const Sbrowsers = () => {
   return( 
      <div className="supportedbrowsers">
          <div className="s-box">
             <h2>supported by All Popular Browsers</h2>
             <h3>Rest assured, Motion Art is designed to be compatible <br/> with all major web browsers</h3>
             <img src= {Simg} alt="" />
          </div>
      </div>
   )
}

export default Sbrowsers