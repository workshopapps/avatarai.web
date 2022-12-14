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
		<div className="flex items-center justify-between border-t border-box border-[#F4F5F6] pt-4 px-3">
			<div className="flex items-center gap-3 ">
				<div className="bg-[#8B70E94D] w-[30px] h-[30px] rounded-full overflow-hidden">
					<img src={Avatar} alt="avatar" className="w-full h-full" />
				</div>

				<p className="flex flex-col">
					<span className="text-[#0D0F11] font-medium text-sm">{user?.first_name}</span>
					<span className="text-[#0d0f11] text-sm ">{user?.email}</span>
				</p>
			</div>
			<div>
				<img src={LogoutIcon} title="Logout" alt="logout" onClick={handleLogout} className="cursor-pointer" />
			</div>
		</div>
	);
};

export default ProfileUI;
