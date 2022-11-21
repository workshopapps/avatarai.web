import { useEffect } from 'react'
import Logo from './images/logo.svg'
import Close from './images/close.svg'
import './paymentflow1.2.css'
import { Link } from 'react-router-dom'

function PaymentFlow12(props){
    useEffect(()=>{displayModal(props.display)}, [props.display])

    function displayModal(display){
        document.getElementById('Paymentflow12').style.display = display
        document.getElementById('cardopt-form').reset()
    }
    return(
        <div className="cbk hidden fixed w-screen h-screen modal-overlay" id='Paymentflow12' data-testid='Paymentflow12'>
            <div className='cbk bg-white modal p-6 rounded-md'>
                <div className='flex flex-row justify-between'>
                    <img src={Logo}/>
                    <div className='text-right'>
                        <p>johndoe@gmail.com</p>
                        <p>pay<span className='text-2xl text-violet-500'> $14</span></p>
                    </div>
                </div>
                <div className='mt-10 text-center v-center2'>
                    <p className='max-[768px]:w-10/12'>Kindly enter the OPT sent to 234814***1378</p>
                    <form className='cbk mt-7' id='cardopt-form'>
                        <input type='number' data-testid='input'/>
                        <input type='number' data-testid='input'/>
                        <input type='number' data-testid='input'/>
                        <input type='number' data-testid='input'/><br/>
                        <p className='hidden mt-5 w-9/12 max-[768px]:block'>A token should be sent to you within two minutes</p>
                        <Link to='/Paymentauth'>
                            <button className='bg-violet-500 text-white w-1/2 p-2 rounded-md mt-7 mb-5 authorize'>Authorize</button>
                        </Link>
                    </form>
                    <p className='max-[768px]:hidden'>A token should be sent to you within two minutes</p>
                    <button className='mt-6 mb-10 text-violet-500 max-[768px]:mt-4' data-testid='cancel-btn' onClick={() => {props.resetFlow2('none')}}>Cancel</button>
                </div>
                <button className='text-violet-500 mt-5 hidden max-[768px]:block close' data-testid='cancel-btn' onClick={() => {props.resetFlow2('none')}}><img src={Close} className='inline'/>Cancel Payment</button>
            </div>
        </div>
    )
}
export default PaymentFlow12