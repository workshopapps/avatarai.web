import { useAuth } from '../../../context/auth-context';
import { useNavigate } from 'react-router-dom';
import Avatar from './img/avatar.svg';
import LogoutIcon from './img/Logout.svg';


const ProfileUI = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		logout();
		navigate('/');
	};
	const user = JSON.parse(localStorage.getItem("userData"));
	
	return (
		<div className="flex items-center justify-between border-t border-[#F4F5F6] pt-4 px-5">
			<div className="flex items-center gap-3 ">
				<img src={Avatar} alt="avatar" />
				<p className="flex flex-col">
					<span className="text-[#0D0F11] font-medium text-sm">{user?.Firstname}</span>
					<span className="text-[#AFB6B6] text-[10px]">{user?.email}</span>
				</p>
			</div>
			<div>
				<img src={LogoutIcon} title="Logout" alt="logout" onClick={handleLogout} className="cursor-pointer" />
			</div>
		</div>
	);
};

export default ProfileUI;
