import React from "react";
import logo_opt from './images/sign_up/logo.png';
import info_opt from './images/sign_up/info_outline.png';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
let handleclick;
let state;

export default function SignUp_for (){

    state = {
        disabled:true
    }
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();

        navigate('/Opt_fi');

    };
    return(
        <div className='first_opt'>
              <div className="nav_opt">
            <img className='logo_opt logo_opt_2' src={logo_opt} alt='logo.png' />
            </div>
            <div className='get_opt'>Get Started With A Free Account</div>
            <div className='gett_opt'>Sign Up to get your AI-generated avatars</div>
            <div className='motion_opt'>
                <div className='one' id='full_bg'></div>
                <div className='two' id='full_bg'></div>
                <div className='three' id='full_bg'></div>
            </div>
            <div className='provide__opt'>Create username and submit links to share posts on social accounts</div>
            <form id='myform_opt' onSubmit={handleSubmit} method='post'>
                <div className='opt_merg'>
                    <label>Username</label><br/>
                    <input id='myinput_opt' placeholder='Display name' type='text' required /><br/>
                    <label>Facebook</label><br/>
                    <input id='myinput_opt' placeholder='https://www.facebook.com/username' type='text' /><br/>
                    <label>Twitter</label><br/>
                    <input id='myinput_opt' placeholder='https://www.twitter.com/username' type='text'  /><br/>
                    <label>Instagram</label><br/>
                    <input id='myinput_opt' placeholder='https://www.instagram.com/username' type='text'  /><br/>
                    <button className='mybutton_opt' id='mybutton_opt' type='submit'>Continue</button>
                </div>

            </form>
        </div>
    )
}
