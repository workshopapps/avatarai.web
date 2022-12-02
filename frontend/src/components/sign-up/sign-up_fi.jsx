import React from "react";
import logo_opt from './images/sign_up/logo.png';
import tick_opt from './images/sign_up/tick-circle.png';
import './signup.css';
import clap from './images/sign_up/clap.png';
import {Link} from "react-router-dom";
export default function SignUp_fi(){

    return(
        <div className='first_opt'>
            <div className="nav_opt">
            <img className='logo_opt logo_opt_2' src={logo_opt} alt='logo.png' />
            </div>
            <img className='mail_opt' src={tick_opt} alt='tick.png' />
            <div className='bb_opt'>
                <div className='ch___opt'>Weldone, Tolu </div>
                <img className='clap_opt' src={clap} alt='clap.png'/>
            </div>
            <div className='li_opt'>Your account has been created successfully</div>

            <div className="button_div_opt">
                <Link to='/Dashboard'>
                    <button className='mybutton_opt' id='mybutton_opt' >Proceed to Dashboard</button>
                </Link>
            </div>

        </div>
    )
}
