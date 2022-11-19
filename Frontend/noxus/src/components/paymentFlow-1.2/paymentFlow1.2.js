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
                <div className='mt-10 text-center'>
                    <p>Kindly enter the OPT sent to 234814***1378</p>
                    <form className='cbk mt-7'>
                        <input type='number' max='2'/>
                        <input type='number'/>
                        <input type='number'/>
                        <input type='number'/><br/>
                        <button className='bg-violet-500 text-white w-1/2 p-2 rounded-md mt-7 mb-5'>Authorize</button>
                    </form>
                    <p>A token should be sent to you within two minutes</p>
                    <button className='mt-6 mb-10 text-violet-500'>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default PaymentFlow12;