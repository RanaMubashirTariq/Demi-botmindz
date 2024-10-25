import React from 'react'
import './TenthSection.css'

export default function TenthSection() {
  return (
    <div className='tenth-section-d'>
             <div className='nineth-section-top-part'>
            <div className='nineth-section-para'><p>Pricing Plan</p></div>
            <div className='nineth-section-heading'><h2>Our <span>Pricing Plan</span></h2></div>
         </div>


         <div className='tenth-section-bottom-part'>
            <div className='tenth-section-right-card'>
                <div className='tenth-section-inner-card'>
                         <div className='tenth-section-inner-pic'><img src="/Images/tenthSectionPic.svg"/></div>
                         <div className='tenth-section-inner-content'>
                            <div className='tenth-section-inner-heading'><h2>2.99 <span>$</span></h2></div>
                            <div className='tenth-section-inner-list'>
                                <ul>
                                    <li><img src="/Images/tenthSectionLiDot.svg"/> In publishing and graphic </li>
                                    <li><img src="/Images/tenthSectionLiDot.svg"/> In publishing and graphic </li>
                                    <li><img src="/Images/tenthSectionLiDot.svg"/> In publishing and graphic </li>
                                    <li><img src="/Images/tenthSectionLiDot.svg"/> In publishing and graphic </li>
                                    <li><img src="/Images/tenthSectionLiDot.svg"/> In publishing and graphic </li>
                                </ul>
                            </div>
                            
                            <div className='navbar-btn'>
                                <button>Contact Us</button>
                            </div>

                         </div>
                </div>
            </div>

            {/* second card */}

            <div className='tenth-section-right-card'>
                <div className='tenth-section-inner-card'>
                         <div className='tenth-section-inner-pic'><img src="/Images/tenthSectionPic.svg"/></div>
                         <div className='tenth-section-inner-content'>
                            <div className='tenth-section-inner-heading'><h2>2.99 <span>$</span></h2></div>
                            <div className='tenth-section-inner-list'>
                                <ul>
                                    <li><img src="/Images/tenthSectionLiDot.svg"/> In publishing and graphic </li>
                                    <li><img src="/Images/tenthSectionLiDot.svg"/> In publishing and graphic </li>
                                    <li><img src="/Images/tenthSectionLiDot.svg"/> In publishing and graphic </li>
                                    <li><img src="/Images/tenthSectionLiDot.svg"/> In publishing and graphic </li>
                                    <li><img src="/Images/tenthSectionLiDot.svg"/> In publishing and graphic </li>
                                </ul>
                            </div>
                            
                            <div className='navbar-btn'>
                                <button>Contact Us</button>
                            </div>

                         </div>
                </div>
            </div>

         </div>
    </div>
  )
}
