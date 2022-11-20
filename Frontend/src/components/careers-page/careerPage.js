//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar';
import Intro from './Intro';
import Main from './Main';
import Subscribe from './Subscribe';
import Footer from './Footer';


const CareerPage = () => {
    return ( 
        <div>
            <Navbar />
            <Intro />
            <Main />
            <Subscribe />
            <Footer />
        </div>
     );
}
 
export default CareerPage;