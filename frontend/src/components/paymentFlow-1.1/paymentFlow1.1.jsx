import { useEffect } from 'react'
import './paymentflow1.1.css'


function PaymentFlow11(props){
    useEffect(()=>{displayModal(props.display)}, [props.display])
    
    function displayModal(display){
        document.getElementById('Paymentflow11').style.display = display
        document.getElementById('cardpin-form').reset()
    }
    return(
        <div className="cbk fixed w-screen h-screen modal-overlay" id='Paymentflow11' data-testid='Paymentflow11'>
            <div className='cbk bg-white modal p-6 rounded-md'>
                <div className='flex flex-row justify-between'>
                    <img src='logo.svg'/>
                    <div className='text-right'>
                        <p>johndoe@gmail.com</p>
                        <p>pay<span className='text-2xl text-violet-500'> $14</span></p>
                    </div>
                </div>
                <div className='mt-10 text-center v-center'>
                    <p className='w-10/12'>Please enter your 4-digit card pin to authorize this process</p>
                    <form className='cbk mt-7' id='cardpin-form'>
                        <input type='number' data-testid='input' />
                        <input type='number' data-testid='input' />
                        <input type='number' data-testid='input' />
                        <input type='number' data-testid='input' />
                    </form>
                    <button className='mt-8 mb-10 text-violet-500' onClick={() => {displayModal('none')}} data-testid='cancel-btn'>Cancel</button>
                </div>
               <button className='text-violet-500 mt-5 hidden max-[768px]:inline close' onClick={() => {displayModal('none')}} data-testid='cancel-btn'><img src='cancel.svg'  className='inline'/>Cancel Payment</button> 
            </div>
    </div>
  )
}
export default PaymentFlow11
