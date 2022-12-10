import { useAuth } from '../../context/auth-context';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const PrivateRoute = ({ children }) => {
	const { user, token, setToken } = useAuth();
	const location = useLocation();
	console.log(token);

	if (token === null) {
		return <Navigate to="/login" />;
	}

	return children;
};
