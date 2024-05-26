import React from 'react'
import Mimg from '../assets/motionarteffect-img5.png'

const Magic = () => {
   return( 
      <div className="Magicwandsection">
         <div className="magicwandleft">
            <h1>Turn Your Cursor Into A Colorful<br/> Magic Wand & Charm Your Visitors</h1>
            <h3>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse <br/> your website with visually stunning motion art elements.</h3>
            <div className="btn-default">
               <a href="#">Purchase From Envato<span><i className="fa-solid fa-arrow-right-long"></i></span></a>
            </div>
         </div>
         
         <div className="magicwandright">
            <img src={Mimg} alt="" />
         </div>
      </div>
   )
}

export default Magic

