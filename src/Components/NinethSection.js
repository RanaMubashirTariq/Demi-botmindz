import React from 'react'
import './NinethSection.css'


export default function NinethSection() {
  return (
    <div className='nineth-section-d'>
         <div className='nineth-section-top-part'>
            <div className='nineth-section-para'><p>Projects</p></div>
            <div className='nineth-section-heading'><h2>Our <span>Projects</span></h2></div>
         </div>

         {/* part two */}
            
            <div className='nineth-section-bottom-part'>
                  <div className='nineth-section-right-part'>
                         <div><img src="/Images/ninethSectionPic1.svg"/></div>
                         <div className='nineth-section-left-part'>
                            <div  className='nineth-section-content-heading'><h2>Testimonial</h2></div>
                            <div className='nineth-section-content-para'><p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly  </p></div>
                            <div className='nineth-section-content'>
                                <div className='nineth-section-par2'><p>Services</p></div>
                                <div className='nineth-section-pic'><img src="/Images/mainSectionArrow.svg"/></div>
                            </div>
                            </div>  
                  </div>
                  <div className='nineth-section-right-part'>
                         <div><img src="/Images/ninethSectionPic1.svg"/></div>
                         <div className='nineth-section-left-part'>
                            <div  className='nineth-section-content-heading'><h2>Testimonial</h2></div>
                            <div className='nineth-section-content-para'><p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly  </p></div>
                            <div className='nineth-section-content'>
                                <div className='nineth-section-par2'><p>Services</p></div>
                                <div className='nineth-section-pic'><img src="/Images/mainSectionArrow.svg"/></div>
                            </div>
                            </div>  
                  </div>
            </div>

    </div>
  )
}
