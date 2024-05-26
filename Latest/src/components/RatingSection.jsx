import React from 'react'

import Rimg1 from '../assets/motionarteffect-img2.png';
import Rimg2 from '../assets/motionarteffect-img1.png';
import Rimg3 from '../assets/motionarteffect-img3.png';
import Rimg4 from '../assets/motionarteffect-img4.png';



const Rating = () => {
   return( 
      <div className="rating-section">
         <h2>Trusted by thousands of users around the world</h2>
         <div className="rating-columns">
            <div className="rcolumn1">
               <div className="r-img1">
                  <img src={Rimg1} alt="" />
               </div>
               <div className="description">
                  <img src={Rimg4} alt="" />
                  <p>4.5 Score, 9 Reviews</p>
               </div>
            </div>

            <div className="rcolumn2">
               <div className="r-img2">
                  <img src={Rimg2} alt="" />
               </div>
               <div className="description">
                   <img src={Rimg4} alt="" />
                   <p>4.5 Score, 9 Reviews</p>
               </div>
            </div>

            <div className="rcolumn3">
               <div className="r-img2">
                  <img src={Rimg3} alt="" />
               </div>
               <div className="description">
                  <img src={Rimg4} alt="" />
                  <p>4.5 Score, 9 Reviews</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Rating