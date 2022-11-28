import React from 'react'
import './any.css'
import { Link } from 'react-router-dom'


 const Any = () => {
  return (
    <section className='any-sect'>
        <p className="be">Be Anywhere</p>
        <p>Choose as many template as you want and put yourself anywhere you choose to be.
             Avart offers you the ability to elect amazing scenes and backgrounds to create amazing AI avatars
        </p>
        <button className='button-bat'>   
          <Link to='/Signupfirst'>
            Start Generating           
          </Link>  
        </button>
    </section>
  )
}
export default Any