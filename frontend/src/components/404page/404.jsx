import React from 'react'
import './404.css'
import { Link } from 'react-router-dom'
import Button from '../landingPage/Button/Button'
 const Page404 = () => {
  return (
    <div className="bat-error-main">
      <div className="bat-error-content">
        <h3>Page Not Found</h3>
        <p>
          Ah, the dreaded 404. Let’s get you back on track head back to the
          homepage!
        </p>
        <Link to="/" id="bat-btn-one" className="bat-home-btn">
          Go home
        </Link>
      </div>
      <div className="bat-error-img">
        <img
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670062689/error_bq2tln.png"
          alt=""
        />
        <Button>
          <Link to="/" id="bat-btn-two" className="bat-home-btn">
            Go home
          </Link>
        </Button>
      </div>
    </div>
  );
}
export default Page404
