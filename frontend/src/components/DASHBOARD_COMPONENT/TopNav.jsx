import MenuIcon from './img/menu.svg';
import { Link } from 'react-router-dom';
import Logo from './img/logo.svg';
import Dashboardtranslate from './dashboardtranslate';


export const TopNav = ({ title, text, show, setShow }) => {

  return (
		<div className="mb-[60px] z-0">
			<nav className="">
				<div className="flex items-center justify-between mb-[40px] py-5 xl:py-0 fixed top-0 xl:relative w-full xl:mb-0 bg-[#FFFFFF] lg:bg-[#FAFAFA]">
					<div className="">
						<div className="text-gray-600 xl:hidden relative" onClick={() => setShow(!show)}>
							{show ? ' ' : <img src={MenuIcon} alt="Menu" className="md:w-[40px] md:h-[40px]" />}
						</div>
					</div>
					<div className="xl:hidden block">
						<Link to="/">
							<img src={Logo} alt="Logo" />
						</Link>
					</div>

					<div></div>
				</div>

				<div className="flex items-center justify-between pt-[50px] xl:pt-0 gap-5 bg-[#FFFFFF] lg:bg-[#FAFAFA]">
					<div>
						<h1 className="text-[24px] md:text-[40px] text-[#000] font-bold">{title}</h1>
						<p className="text-[#6c6c6c] text-sm md:text-[18px]">{text}</p>
					</div>

					<div>
						<Dashboardtranslate />
					</div>
				</div>
			</nav>
		</div>
	);
};