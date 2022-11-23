import React from 'react'
import './DD4.css'
import arrowright from './img/arrow-right.png'
import Arrowright from './img/arrowright.png'
import three from './img/3.png'
import left from './img/arrowpleft.png'
import right from './img/arrowpright.png'
import Her from './img/her.png';
import Button from './../landingPage/Button/Button'

function DD4content() {
  return (
    <div className='vic_content'>
        <div className='vic_img_div'>
            <div>
                <img src={arrowright} className='vic_1'/>
                <img src={Arrowright} className='vic_2'/>
            </div>
            <div>
                <img src={three} className='vic_3'/>
            </div>
            <div></div>
        </div>
        
        <h3>Preview your Images</h3>
        <div className='vic_img_and_direction'>
            <img src={left} className='vic_left'/>
            <div>
                <img src={Her} className='vic_her' />
            </div>
            <img src={right} className='vic_right'/>
        </div>
        <Button id='vic_dash_button'
        children='Generate Avatar'
        />
      
    </div>
  )
}

export default DD4content
