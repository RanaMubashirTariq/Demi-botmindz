import React from 'react'
import './FifthSection.css'

export default function FifthSection() {
  return (
    <div className='fifth-section-d'>
        <div className='fifth-section-right-part'>
               <div className='part-1'><p>About us</p></div>
               <div className='part-2'><h2>Empowering <span>People</span> By
               Keeping Them Well</h2></div>
               <div className='part-3'><p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. </p></div>  
               <div className='part-4'>
                  <div className='part-4-inner-d'>
                    <div className='part-4-inner-pic'><img src='/Images/mashinelearning.svg'/></div>
                    <div className='part-4-content'>
                        <div className='part-4-heading'><h2>Machine Learning</h2></div>
                        <div className='part-4-para'><p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly . </p></div>
                    </div>
                  </div>
                  {/* part 2 */}
                  <div className='part-4-inner-d'>
                    <div className='part-4-inner-pic'><img src='/Images/pic3CardIcon.svg'/></div>
                    <div className='part-4-content'>
                        <div className='part-4-heading'><h2>Machine Learning</h2></div>
                        <div className='part-4-para'><p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly . </p></div>
                    </div>
                  </div>
               </div>
               <div className='part-5-btn'>
                    <button>Click Here</button>
                   </div>
        </div>

        {/* left-part */}
        <div className='fifth-section-left-part'>
            <img src="/Images/fifthSectionPic.svg"/>
        </div>
    </div>
  )
}
