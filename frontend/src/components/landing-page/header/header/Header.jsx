import React from 'react';
import './header.css'
import Hero from './img/Hero1.png';
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <section className='header'>
      <div className='header__content-ony'>
        <h1 className='header__title-ony'>Create your own <span className='span__color-ony'>AI-generated </span>Avatars</h1>
        <p className='header__description-ony'>Create profile pictures, online gaming display pictures, pet potraits and much more on the go</p>
        <button className='button'>
          <Link to='/Signupfirst'>
            Sign Up
          </Link>  
        </button>
            
      </div>
      <div className="hero-img">
        <img src={Hero} alt="" />
      </div>
    </section>
  )
}

export default Header