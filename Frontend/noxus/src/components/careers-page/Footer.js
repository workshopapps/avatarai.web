import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative top-32 lg:top-44 text-light pb-5 px-5 pt-16 lg:px-20 bg-light flex flex-col lg:flex-row justify-between">
            <div>
                <h3>Noxus</h3>
                <p>Noxus is your webapp for creating Artificial Intelligent Avatars, we also offer courses on avatar generation.</p>
            </div>
            <div className="order-last lg:order-1 mt-12 lg:mt-0">
                <div className='lg:order-2'>
                    <h3 className='font-bold text-lg mb-3 lg:mb-3 lg:mb-6 mt-4 lg:mt-0'>Resources</h3>
                    <ul className='text-sm text-darkk flex flex-col gap-y-4'>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div className='lg:order-3'>
                    <h3 className='font-bold text-lg mb-3 lg:mb-3 lg:mb-6 mt-4 lg:mt-0'>Company</h3>
                    <ul className='text-sm text-darkk flex flex-col gap-y-4'>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Events</li>
                    </ul>
                </div>
                <div className='lg:order-4'>
                    <h3 className='font-bold text-lg mb-3 lg:mb-3 lg:mb-6 mt-4 lg:mt-0'>Help</h3>
                    <ul className='text-sm text-darkk flex flex-col gap-y-4'>
                        <li>FAQs</li>
                        <li>Terms & Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <p>&copy; Noxus</p>
            </div>
        </footer>
     );
}
 
export default Footer;