import { useEffect } from 'react'
import Logo from './images/logo.svg'
import Close from './images/close.svg'
import './paymentflow1.1.css'


function PaymentFlow11(props){
    useEffect(()=>{displayModal(props.display)}, [props.display])
    
    function displayModal(display){
        document.getElementById('Paymentflow11').style.display = display
        document.getElementById('cardpin-form').reset()
    }
    return(
        <div className="hidden cbk fixed w-screen h-screen modal-overlay" id='Paymentflow11' data-testid='Paymentflow11'>
            <div className='cbk bg-white modal p-6 rounded-md'>
                <div className='flex flex-row justify-between'>
                    <img src={Logo}/>
                    <div className='text-right'>
                        <p>johndoe@gmail.com</p>
                        <p>pay<span className='text-2xl text-violet-500'> $14</span></p>
                    </div>
                </div>
                <div className='mt-10 text-center v-center'>
                    <p className='max-[768px]:w-10/12'>Please enter your 4-digit card pin to authorize this process</p>
                    <form className='cbk mt-7' id='cardpin-form' onSubmit={event => {event.preventDefault()}}>
                        <input type='number' data-testid='input' />
                        <input type='number' data-testid='input' />
                        <input type='number' data-testid='input' />
                        <input type='number' data-testid='input' /><br/>
                        <button type='submit' className='bg-violet-500 text-white w-1/2 p-2 rounded-md mt-7 mb-5 authorize' onClick={() => {props.resetFlow2('block'); props.resetFlow1()}}>Continue</button>
                    </form>
                    <button className='mt-8 mb-10 text-violet-500' onClick={() => {props.resetFlow1()}} data-testid='cancel-btn'>Cancel</button>
                </div>
<<<<<<< HEAD:frontend/src/components/paymentFlow-1.1/paymentFlow1.1.jsx
                <button className='text-violet-500 mt-5 hidden max-[768px]:inline close' onClick={() => {props.resetFlow1()}} data-testid='cancel-btn'><img src={Close}  className='inline'/>Cancel Payment</button>
=======
               <button className='text-violet-500 mt-5 hidden max-[768px]:inline close' onClick={() => {displayModal('none')}} data-testid='cancel-btn'><img src='cancel.svg'  className='inline'/>Cancel Payment</button> 
>>>>>>> 2a0ed959f06da72de4e511bdf7f9ea090d37b1b0:frontend/src/components/paymentFlow-1.1/paymentFlow1.1.js
            </div>
    </div>
  )
}
export default PaymentFlow11
