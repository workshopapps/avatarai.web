import React from "react";
import logo_opt from './images/sign_up/logo.png';
import info_opt from './images/sign_up/info_outline.png';
import './signup.css';
import {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
let handleclick;
let state;

export default function SignUp_first (){

    state = {
        disabled:true
    }
    handleclick = (e) => {
        if(e.target.checked){
            this.setState({
               disabled: false
            });
        }
        else{
            this.setState({
                disabled: true
            });
        }

    }
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        // 👇️ redirect to /contacts
        navigate('/Opt_sec');
    };
    const [show_s, setShow_s] = useState(true);
    const [show, setShow] = useState(true);
    return(
        <div className="house_opt">
            <div className="nav_opt">
                <img className='logo_opt' src={logo_opt} alt='logo.png' />
                <div className="all_opt">Already have an account?<span className='col_opt'> Log in here</span></div>

            </div>
    <div className='first_opt'>
            
            <div className='get_opt'>Get Started With A Free Account</div>
            <div className='gett_opt'>Sign Up to get your AI-generated avatars</div>
            <div className='motion_opt'>
                <div className='one'></div>
                <div className='two'></div>
                <div className='three'></div>
            </div>
            <div className='provide_opt'>Please provide your name and e-mail</div>

            <form id='myform_opt' onSubmit={handleSubmit} method='post'>
                {  show &&
                    <div>
                        <label>First name</label><br/>
                        <input id='myinput_opt' placeholder='John' type='text' required/><br/>
                        <label>Last name</label><br/>
                        <input id='myinput_opt' placeholder='Doe' type='text' required/><br/>
                        <label>Email</label><br/>
                        <input id='myinput_opt' placeholder='name@example.com' type='email' required/><br/>
                        <label className="container_opt" id="cap"><span className='note_opt'>I agree to the terms & service and privacy policy</span>
                            <input type="checkbox" id='check_opt'onClick={()=> setShow_s(!show_s)} required/>
                            <span className="checkmark"/>
                        </label>
                        <button onClick={()=> setShow(!show)} disabled={show_s} className='mybutton_opt' id='mybutton_opt'>Continue</button>
                        
                    </div>
                }

                { !show &&
                    <div>
                        <label>Password</label><br/>
                        <input id='myinput_opt' placeholder='Choose Password' type='password' required /><br/>
                        <div className='tt'>
                            <img className='info_opt' src={info_opt} alt='info.png'/>
                            <div className='info__opt' >Must be 8 characters long</div>
                        </div>
                        <label>Confirm Password</label><br/>
                        <input id='myinput_opt' placeholder='Choose your password' type='password' required /><br/>
                        <div className='tt'>
                            <img className='info_opt' src={info_opt} alt='info.png'/>
                            <div className='info__opt' >Both passwords must match</div>
                        </div>
                            <button  className='mybutton_opt' id='mybutton_opt' type ='submit'>Continue</button>
                    </div>
                }


            </form>
        </div>
        </div>
    )
}
