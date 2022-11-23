import React from 'react';
import './dashboardcomp.css';
import Mic from './img/mic.svg';
import Arrow from './img/arrowdown.svg';

export default function Dashboardcomp() {
  return (
    <div className='vic_dash_bg'>
        <div className='vic_dash_inner_div'>
            <div className='vic_dash_header'>
                <input type='text' placeholder='Search collections' className='vic_dash_input' /> 
                
                <div className='vic_dash_translate'>
                    <p >English</p> 
                    <img src={Arrow} onClick='' />
                    {/* translation languages come here and will be linked to the onClick event above  */}
                </div>
                
            </div>
            <div className='vic_dash_text_div'>
                <h2 className='vic_dash_h2'>Welcome</h2>
                <p className='vic_dash_p'>Let's create your Avatars.</p>
            </div>
            <div className='vic_dash_content'></div>
        </div>
      
    </div>
  )
}

