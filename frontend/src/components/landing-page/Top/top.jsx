import React from 'react'
import './top.css'
import one from './Frame31.png'
import two from './Frame32.png'
import three from './Frame33.png'

const Top = () => {
  return (
    <div className='top'>
        <h4>Top courses on Avart</h4>
        <p id='some'>Some of the most in demand courses we have at bloom. You might want to check them out</p>
        <div className="top-section">
            <div className="item">
                <img src={one} alt="" />
                <h6>Understanding the basics of AI</h6>
                <p>Join Emily Pratt as she extensively explains the fundamentals and the cores of artificial intelligence</p>
            </div>
            <div className="item">
                <img src={two} alt="" />
                <h6>Beginner’s guide to generative AI</h6>
                <p>Phoebe Drowy teaches what are generative AI are and how it works</p>
            </div>
            <div className="item">
                <img src={three} alt="" />
                <h6>Do you get machine learning yet?</h6>
                <p>Machine learning can be a difficult concept do understand, but Jen Yu breaks it down here properly</p>
            </div>
        </div>
    </div>
  )
}

export default Top