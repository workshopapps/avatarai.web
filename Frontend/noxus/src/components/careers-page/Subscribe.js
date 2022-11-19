import logo from './images/tapart2.png'

const Subscribe = () => {
    return (
        <div className='bg-grayy flex justify-between items-center px-5 lg:px-20 py-4 gap-5 mt-16 mb-14'>
            <div>
                <img src={logo} alt="small-logo" />
                <h2>Subscribe to our newsletter for info for new avatar scenes, blogs and updates</h2>
                <p>We'd send a confirmation email to you</p>
            </div>
            <div className="flex justify-start">
                <input type="search" placeholder="Enter your Email Address" id="search-input" className="rounded-l-lg border border-gray py-4 pl-3.5 w-full text-grayy placeholder-grayy outline-0 border-r-0 block" />
                <button type="submit" className='bg-purple py-4 px-6 lg:px-20 rounded-r-lg outline-0 text-white'>Subscribe</button>
                <div>
                    <p>By subscribing you agree to accept newsletters and Emails from us</p>
                </div>
            </div>
        </div>
    )
}

export default Subscribe