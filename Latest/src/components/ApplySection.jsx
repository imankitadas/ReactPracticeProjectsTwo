import React from 'react'
import Lpageimg from '../assets/motionarteffect-img11.png'
import Rpageimg from '../assets/motionarteffect-img10.png'


const Apply = () => {
   return( 
      <div className="applysection">
         <h1>Apply On Any Section Enable OR<br/> For Whole Page</h1>
         <div className="applypages">
            <div className="lapply-box">
               <h2>Apply on Section</h2>
               <p>Apply on section is a game-changer, offering an unparalleled way to<br/> manage applications directly from your website.</p>
               <img src={Lpageimg} alt="" />
            </div>
            <div className="rapply-box">
            <h2>Apply on Page</h2>
               <p>Take Your website to new heights with Motion Art for Elementor. <br/> Embrance The power of motion and animation</p>
               <img src={Rpageimg} alt="" />
            </div>
         </div>
      </div>
   )
}

export default Apply