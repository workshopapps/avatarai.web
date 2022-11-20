import logo from './images/tapart2.png'

const Subscribe = () => {
    return (
        <div className='bg-[#FAFAFA] flex justify-between items-center px-5 lg:px-20 py-4 gap-5 mt-16 mb-14'>
            <div className="flex flex-col justify-evenly text-left">
                <img src={logo} alt="small-logo" className="w-10 h-10 mb-5"/>
                <h2 className="text-medium font-semibold mb-3">Subscribe to our newsletter for info for new avatar<br />scenes, blogs and updates</h2>
                <p className="text-sm text-[#5A5A5A]">We'd send a confirmation email to you</p>
            </div>
            <div className="flex flex-col justify-start">
                <div className="flex flex-row mb-3">
                    <input type="search" placeholder="Enter your Email Address" id="search-input" className="rounded-l-lg border border-gray py-4 pl-3.5 w-full text-gray placeholder-gray outline-0 border-r-0 block w-[80%] h-[20%]" />
                    <button type="submit" className='bg-purple-500 py-4 px-6 lg:px-20 rounded-r-lg outline-0 text-white text-center w-[20%] h-[20%]'>Subscribe</button>
                </div>
                <div className="text-left">
                    <p className="text-xs text-[#5A5A5A]">By subscribing you agree to accept newsletters and Emails from us</p>
                </div>
            </div>
        </div>
    )
}

export default Subscribe