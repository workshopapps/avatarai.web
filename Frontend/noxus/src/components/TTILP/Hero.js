import './TTILP.css';
import Get_started from './Get_started';
import Heroimg from './img/heroimg.png';
import Creative from './Creative';
import Hero_img from './img/heroimg2.png';
import Button from './Button';


function Hero() {
  return (
    <div className='vic'>

      <div className='vic_hero'>
        
        <div className='vic_hero_text'>
          <h1>Generate Eye cacthy images with just your words</h1>
          <p>Bring your words to life with our new and improved text to Image AI generator.</p>
          <Button />
        </div>

        <div className='vic_hero_img_div'>
          <img src={Heroimg} className='imageone' />
          <img src={Hero_img} className='imagetwo'/>
        </div>

      </div>

      <Get_started />
      <Creative />

  

    </div>
  )
}

export default Hero
