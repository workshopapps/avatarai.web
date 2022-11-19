import './TTILP.css';
import Thousand from './img/thousand.png'
import Creativity from './img/creativity.png'
import Group from './img/Group.png'
import Button from './Button';

function Creative() {
  return (
    <div className='vic_mid'>

      <div className='vic_mid_section'>
        <div>
          <h2 className='one'>An image is worth <span>a thousand words</span></h2>
          <p>Tell the story you always wanted to tell in the way only you can tell it, with your words coming to life and taking a visual style.</p>
        </div>     
        <div className='br'></div>
        <img src={Thousand} />  
        </div>      
        
        <div className='vic_mid_section ' id='two'>       
            <div>
              <h2><span>Creativity </span>without Borders</h2>
              <p>Tell the story you always wanted to tell in the way only you can tell it, with your words coming to life and taking a visual style.</p>
            </div>      
            <div className='br'></div>
            <img src={Creativity} />     
        </div>      

        <div className='vic_creative'>
            <div className='vic_mid_start'>
                <img src={Group} />
                <h3>Start your creative journey here</h3>
                <p>Create tons of beautiful images from the comfort of your mind</p>
                <Button />
            </div>
        </div>
    </div>
  )
}

export default Creative
