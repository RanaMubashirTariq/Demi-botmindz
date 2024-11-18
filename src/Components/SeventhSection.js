import React from 'react'
import './SeventhSection.css'

export default function SeventhSection() {
  return (
    <div className='seventh-section-d'>
        <div className='seventh-section-content'>
           <div className='seventh-section-para'><p>Team</p></div>
           <div className='seventh-section-heading'><h2>Our Certified <span>Scientists</span> WithsSmart Solutions</h2></div>
           </div>

           {/* Cards part */}

           <div className='seventh-section-cards-d'>
                    <div className='inner-pic'><img src="/Images/seventhSectionCard1.svg"/></div>
                <div className='inner-pic'><img src="/Images/seventhSectionCard2.svg"/></div>  
                <div className='inner-pic'><img src="/Images/seventhSectionCard3.svg"/></div>
           </div>
    </div>
  )
}

