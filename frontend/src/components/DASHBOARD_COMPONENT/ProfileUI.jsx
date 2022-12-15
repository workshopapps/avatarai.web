import { useAuth } from '../../../context/auth-context';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.png';
import LogoutIcon from './img/Logout.svg';


const ProfileUI = () => {
	const { logout, user } = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		logout();
		navigate('/');
	};
	
	return (
		<div className="flex gap-2 flex-col text-[#6C6C6C] font-semibold justify-between border-t border-box border-[#F4F5F6] pt-4 px-3">
			<div className="flex items-center gap-2 mr-1">
				<div className="bg-[#8B70E94D] w-[25px] h-[25px] rounded-full overflow-hidden">
					<img src={Avatar} alt="avatar" className="w-full h-full" />
				</div>

				<p className="flex flex-col">
					<span className="text-[#6C6C6C] text-sm">{user?.first_name}</span>
					<span className="text-[#6C6C6C] text-sm ">{user?.email}</span>
				</p>
			</div>

			<div className="flex items-center cursor-pointer" onClick={handleLogout}>
				<img src={LogoutIcon} title="Logout" alt="logout" className=" mr-3" />
				<p className="text-[12px] text-[#6C6C6C]">Log out</p>
			</div>
		</div>
	);
};

export default ProfileUI;
