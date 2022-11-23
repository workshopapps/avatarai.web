import ApiUseSection from './components/ApiUseSection';
import Hero from './components/Hero';
import Section3 from './components/Section3';
import Navbar from '../landingPage/Navbar/Navbar';
// import Footer from '../Footerpage/Footer';
import Foooter from '../footer/Foooter';

const ApiPage = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<ApiUseSection />
			<Section3 />
			{/* <Footer /> */}
			<Foooter />
		</div>
	);
};

export default ApiPage;
