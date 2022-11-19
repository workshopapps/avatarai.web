import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = ({handleModal, menuOpen, handleMenuOpen}) => {
    const nav = [
        {
            id: 1,
            path: '/',
            children: 'Home',
        },
        {
            id: 2,
            path: '/about',
            children: 'About Us',
        },
        {
            id: 3,
            path: 'pricing',
            children: 'Pricing',
        },
        {
            id: 4,
            path: 'contact',
            children: 'Contact Us',
        },
        {
            id: 5,
            path: 'faq',
            children: 'FAQs',
        },
    ];

 //   const handleFunctions =() => {
 //       handleMenuOpen()
 //       handleModal()
 //   }

    const navigation = nav.map(({ id, path, children }) => (
        <li key={id}>
            <Link
                to={path}
                onClick={handleMenuOpen}
            >
                {children}
            </Link>
        </li>
    ))
    return (
        <nav className="flex flex-col lg:flex-row lg: justify-center lg:justify-between items-center lg:gap-x-44 gap-y-0 fixed lg:static w-full lg:w-max lg:h-max top-16">
            <div>
                <img src="..careers-page/images/Union.png" alt="Header icon"/>
            </div>
            <ul className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-x-12 gap-y-9 lg:gap-y-0 text-light lg:text-blackk text-2xl lg:text-xl mt-16 lg:mt-0">
                {navigation}
            </ul>
            <div>
                <Button type="button" className="">Log in</Button>
                <Button type="button">Sign Up</Button>
            </div>
        </nav>
    )
}
export default Navbar