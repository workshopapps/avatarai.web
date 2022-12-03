import React from 'react'
// import '../socialproof/SocialProof.css';
import Learn1 from './learn.png'
import './learn.css'
import { Link } from 'react-router-dom'

const Learn = () => {
  return (
    <div className='learn'>
        <h2>Learn more about <span>AI</span></h2>
        <div className="learn2">
            <img src={Learn1} alt="" />
            <div>
                <p id='and'>Scrutinized and elaborate courses in every AI aspect</p>
                <p>Access every course ranging from beginner level to expert level and up your game in the web3 space without any hassle. <br/>
                    These courses are scrutinized by top industry experts and folks who love what we are doing. Get in here and discover what works for you.
                </p>
                <Link to='/signup'>
                    <button className="social-btn">
                        Start Learning                    
                    </button>
                </Link>  
            </div>
        </div>
    </div>
  )
}
export default Learn
