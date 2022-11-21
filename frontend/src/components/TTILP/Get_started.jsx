import './TTILP.css'
import First from './img/1.png';
import Second from './img/2.png';
import Third from './img/3.png';
import Forth from './img/4.png'

function Get_started() {
  return (
    <div className='vic_get'>
      <div className='vic_get_started'>

        <div className='vic_how'>
            <p>How it works</p>
            <h2 id="h2">Get Started in 4 simple steps</h2>   
        </div>
        

        <ul>

          <li id='li'>
            <div>
            <img src={First} />
            <h3 id='h3'>Type in text</h3>
            </div>
            <p>Describe whatever image you want with words in the provided input field</p>
          </li>

          <li id='li'>
            <div>
            <img src={Second} />
            <h3 id='h3'>Generate image</h3>
            </div>
            <p>Describe whatever image you want with words in the provided input field</p>
          </li>

          <li id='li'>
            <div>
            <img src={Third} />
            <h3 id='h3'>Edit image</h3>
            </div>
            <p>Describe whatever image you want with words in the provided input field</p>
          </li>

          <li id='li'>
            <div>
            <img src={Forth} />
            <h3 id='h3'>Download and share</h3>
            </div>
            <p>Describe whatever image you want with words in the provided input field</p>
          </li>

        </ul>

      </div>
    </div>
  )
}

export default Get_started




