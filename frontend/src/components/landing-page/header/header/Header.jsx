import React from 'react';
import './header.css'
import Hero from './img/Hero1.png';
import { Link } from 'react-router-dom'



const Header = () => {
  return (
        <header className='bat-header'>
          <div className="bat-header-content">
            <h2>Create your own <span>AI-generated </span>avatars</h2>
            <p>Create Profile pictures, Online gaming display pictures, Pet potraits and much more on the go.</p>
            <Link to='/Signupfirst'>
            <button className="bat-btn">Generate Avatars</button>
            </Link>
          </div>
          <div className="bat-header-overlay"></div>
        </header>
  )
}

export default Header