import React from 'react'
import './MainSection.css' 

export default function MainSection() {
  return (
        <div className='main-section-d'>
            <div className='main-section-right-d'>
            <div className='main-section-content'>
            <div className='main-section-content-part1'><h2>Let’s Horizon <span>Robotics</span> Handle It,</h2></div>
            <div className='main-section-content-part2'><p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. </p></div>
            </div>
            <div className='Progress-bar-d'>
                  <div className='bar-d'><img src="/Images/mainSectionBar.svg"/></div>
                  <div className='Progress-bar-heading-part'>
                    <div className='Progress-bar-heading'><p>Learn More</p></div>
                      <div className='Progress-bar-pic'><img src="/Images/mainSectionArrow.svg"/></div>
                  </div>
            </div>
        </div>
        <div className='main-section-left-d'><img src="/Images/robotImage.svg"/></div>
    </div>
  )
}
