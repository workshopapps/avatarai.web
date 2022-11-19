import './paymentflow1.2.css'

function PaymentFlow12(){
    return(
        <div className="cbk fixed w-screen h-screen modal-overlay">
            <div className='cbk bg-white modal p-6 rounded-md'>
                <div className='flex flex-row justify-between'>
                    <img src='logo.svg'/>
                    <div className='text-right'>
                        <p>johndoe@gmail.com</p>
                        <p>pay<span className='text-2xl text-violet-500'> $14</span></p>
                    </div>
                </div>
                <div className='mt-10 text-center v-center'>
                    <p className='w-10/12'>Kindly enter the OPT sent to 234814***1378</p>
                    <form className='cbk mt-7'>
                        <input type='number' max='2'/>
                        <input type='number'/>
                        <input type='number'/>
                        <input type='number'/><br/>
                        <p className='hidden mt-5 w-9/12 max-[768px]:block'>A token should be sent to you within two minutes</p>
                        <button className='bg-violet-500 text-white w-1/2 p-2 rounded-md mt-7 mb-5 authorize'>Authorize</button>
                    </form>
                    <p className='max-[768px]:hidden'>A token should be sent to you within two minutes</p>
                    <button className='mt-6 mb-10 text-violet-500 max-[768px]:mt-4'>Cancel</button>
                </div>
                <button className='text-violet-500 mt-5 hidden max-[768px]:inline'><img src='cancel.svg'  className='inline'/>Cancel Payment</button>
            </div>
        </div>
    )
}
export default PaymentFlow12