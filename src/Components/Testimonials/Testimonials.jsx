import React, { useRef } from 'react'
import './Testimonials.css'
import nexticon from '../../assets/nexticon.png'
import backicon from '../../assets/backicon.png'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
const Testimonials = () => {
      let slider = useRef();
      let tx = 0;
 let slideforward=()=>{
   if(tx>-50){
      tx -=25;
   }
   slider.current.style.transform = `translateX(${tx}%)`
 } 
 let slidebackward=()=>{
      if(tx<0){
            tx +=25;
         }
         slider.current.style.transform = `translateX(${tx}%)`   
 } 
  return (
    <div className='testimonials'>
     <img src={nexticon} alt="Next" className="next-btn" onClick={slideforward} />
     <img src={backicon} alt="Back" className="back-btn" onClick={slidebackward} />
      <div className="slider">
     <ul ref={slider}>
      <li>
            <div className="slide">
                  <div className="user-info">
                        <img src={user1} alt="" />
                        <div>
                              <h3>Luna</h3>
                              <span>Edusity, USA</span>
                        </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decision i've ever made. The supportive comuity ,state of the art faclities,and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
      </li>
      <li>
            <div className="slide">
                  <div className="user-info">
                        <img src={user2} alt="" />
                        <div>
                              <h3>James</h3>
                              <span>Edusity, USA</span>
                        </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decision i've ever made. The supportive comuity ,state of the art faclities,and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
      </li>
      <li>
            <div className="slide">
                  <div className="user-info">
                        <img src={user3} alt="" />
                        <div>
                              <h3>Sophia</h3>
                              <span>Edusity, USA</span>
                        </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decision i've ever made. The supportive comuity ,state of the art faclities,and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
      </li>
      <li>
            <div className="slide">
                  <div className="user-info">
                        <img src={user4} alt="" />
                        <div>
                              <h3>Wiliam Jackson</h3>
                              <span>Edusity, USA</span>
                        </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decision i've ever made. The supportive comuity ,state of the art faclities,and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
      </li>
     </ul>
      </div>
    </div>
  )
}

export default Testimonials
