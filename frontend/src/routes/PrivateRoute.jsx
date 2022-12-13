import { useAuth } from '../../context/auth-context';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
	const { user, token } = useAuth();

	return token ? <Outlet /> : <Navigate to="/login" />;
};
