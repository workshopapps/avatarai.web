import React from 'react'
import './final.css'
import { Link } from 'react-router-dom'

const Final = () => {
  return (
    <div className='final'>
        <h1>Get started generating amazing <br/> AI <span>avatars</span> for yourself</h1>
        <Link to='/signup'>
          <button className="social-btn">
            Sign up for free
          </button>
        </Link>  
    </div>
  )
}

export default Final