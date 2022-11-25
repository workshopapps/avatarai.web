import React from "react";
import logo_opt from './images/sign_up/logo.png';
import mail_opt from './images/sign_up/mailbox.png';
import './signup.css';
import {Link} from "react-router-dom";
let handleclick;
let state;

export default function SignUp_sec(){

    state = {
        disabled:true
    }
    handleclick = (e) => {
        if(e.target.checked === true){
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
    return(
        <div className="houset_opt">
        <div className='first__opt'>
            <img className='logo_opt logo_opt_2' src={logo_opt} alt='logo.png' />
            <img className='mail_opt' src={mail_opt} alt='mail.png' />
            <div className='ch_opt'>Check your e-mail</div>
            <div className='li_opt'>A verification link has been sent to toluadepoju@gmail.com, click on the link to continue</div>

            <div className="button_div_opt">
               <Link to="/Login"> <button className='mybutton_opt' id='mybutton_opt' >Continue</button></Link>
                <div className="all_opt" id="--opt">Didn’t receive the e-mail? <span className='col_opt'>Click here to resend</span></div>
            </div>
            </div>
       </div>
    )
}
