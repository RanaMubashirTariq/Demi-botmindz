import React from 'react'
import './TwelveSection.css'

export default function TwelveSection() {
  return (
    <div className='twelve-section-d'>
        
            <div className='twelve-section-right-part'><img src="/Images/twelveSectionPic.svg"/></div>
    
            {/* Left Card */}

             <div className='twelve-section-left-part'>
                      <div className='twelve-left-top-part'>
                          <div className='twelve-left-part1'><p>Contact</p></div>
                          <div className='twelve-left-part2'><h2>Be Well Stay Calm And <span>Keep In Touch</span></h2></div>
                      </div>

                      {/* bottom part */}

                      <div className='twelve-left-bottom-part'>
                               
                               <div className='twelve-left-bottom-inner-part'> 
                                      
                                      <div className='twelve-left-input-part'>
                                             <div className='twelve-left-input'><input type="text" placeholder='First Name' /></div>
                                             <div className='twelve-left-input'><input type="text" placeholder='Last Name' /></div>
                                      </div>
                                      <div className='twelve-left-input-part'>
                                             <div className='twelve-left-input'><input type="text" placeholder='Email' /></div>
                                             <div className='twelve-left-input'><input type="text" placeholder='Phone Number' /></div>
                                      </div>
                                      <div className='twelve-left-input-part'>
                                             <div className='twelve-left-input-msg'><textarea name="Massage" placeholder='Maasage' id=""></textarea></div>
                                             
                                      </div>

                                      <div className='twelve-btn'>
                                    <button>Submit</button>
                              </div>
                                  
                               </div>
                                
                               

                      </div>
             </div>
    
    </div>
  )
}
