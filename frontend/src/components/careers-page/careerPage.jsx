//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intro from './Intro';
import Main from './Main';
import Subscribe from './Subscribe';
// import Footer from "../Footerpage/Footer";
import Navbar from "../landingPage/Navbar/Navbar";
import Foooter from '../footer/Foooter';


const CareerPage = () => {
    return ( 
        <div>
            <Navbar />
            <Intro />
            <Main />
            <Subscribe />
            {/* <Footer /> */}
            <Foooter />
        </div>
     );
}
 
export default CareerPage;