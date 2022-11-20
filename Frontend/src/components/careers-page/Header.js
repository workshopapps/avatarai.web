import Navbar from './Navbar';
import logo from './images/Union.png';

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
                
            </div>
            <Navbar />
        </header>
    )
}

export default Header