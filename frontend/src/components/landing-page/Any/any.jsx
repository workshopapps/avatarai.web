import React from 'react'
import './any.css'
import { Link } from 'react-router-dom'


 const Any = () => {
  return (
    <section className='any-sect'>
        <h4 className="be">Create avatars of more than 20 styles with zuvatar</h4>
        <p>
          Upload 5 - 20 images and generate avatars on the go. We’ll train the AI model to generate avatars that look just like you in any style you want.
        </p>
        {/* <button className='button-bat'>   
          <Link to='/Signup'>
            Start Generating           
          </Link>  
        </button> */}
    </section>
  )
}
export default Any