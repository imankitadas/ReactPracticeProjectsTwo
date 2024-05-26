import React from 'react'
import Fimg1 from '../assets/motionarteffect-img9.png'
import Fimg2 from '../assets/motionarteffect-img6.png'
import Fimg3 from '../assets/motionarteffect-img7.png'


const Plugin = () => {
   return( 
      <div className="pluginsection">
         <div className="plugin-head">
           <h2>An All-Round Plugin with<br/> Powerful Features</h2>
           <p>Wheather You're a seasoned web desginer or just starting out,Motion Art for <br/> Elementor seamlessly integrates with the Elementor platform, providing you <br/> with seamless and intutive experience.</p>
         </div>
         <div className="features-box">
               <div className="f-box1">
                  <img src={Fimg1} alt="" />
                  <h3>Light Weight</h3>
                  <p>Motion Art for elementor is desgined  to be<br/> lightweight</p>
               </div>

               <div className="f-box2">
                  <img src={Fimg2} alt="" />
                  <h3>100% Responsive</h3>
                  <p>Create a consistent visual experience <br/>acros all devices</p>
               </div>
           
               <div className="f-box3">
                  <img src={Fimg3} alt="" />
                  <h3>User Friendly Interface</h3>
                  <p>Ensure a smooth experience for both<br/> applicants and administrators</p>
               </div>
         </div>
      </div>
   )
}

export default Plugin