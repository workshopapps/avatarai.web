import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-light pb-5 px-5 pt-16 lg:px-20 bg-light flex flex-col lg:flex-row justify-between">
            <div className="text-left">
                <h3 className="font-bold text-light text-sm mb-4">Noxus</h3>
                <p className="text-sm text-[#5A5A5A]">Noxus is your webapp for creating Artificial Intelligent Avatars, we also<br /> offer courses on avatar generation.</p>
            </div>
            <div className="order-last lg:order-1 mt-12 lg:mt-0 flex flex-row justify-between">
                <div className='lg:order-2'>
                    <h3 className='font-bold text-lg mb-3 lg:mb-3 lg:mb-6 mt-4 lg:mt-0'>Resources</h3>
                    <ul className='text-sm text-darkk flex flex-col gap-y-4'>
                        <li className="mb-3">Careers</li>
                        <li className="mb-3">Blog</li>
                        <li className="mb-3">Reviews</li>
                    </ul>
                </div>
                <div className='lg:order-3'>
                    <h3 className='font-bold text-lg mb-3 lg:mb-3 lg:mb-6 mt-4 lg:mt-0'>Company</h3>
                    <ul className='text-sm text-darkk flex flex-col gap-y-4'>
                        <li className="mb-3">Contact Us</li>
                        <li className="mb-3">About Us</li>
                        <li className="mb-3">Events</li>
                    </ul>
                </div>
                <div className='lg:order-4'>
                    <h3 className='font-bold text-lg mb-3 lg:mb-3 lg:mb-6 mt-4 lg:mt-0'>Help</h3>
                    <ul className='text-sm text-darkk flex flex-col gap-y-4'>
                        <li className="mb-3">FAQs</li>
                        <li className="mb-3">Terms & Policy</li>
                        <li className="mb-3 text-[#FAFAFA]">Contact Us</li>
                    </ul>
                </div>
                
            </div>
            
        </footer>
     );
}
 
export default Footer;