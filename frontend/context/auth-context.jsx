import React, { useState, createContext, useContext, useEffect } from 'react';

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);
	const [resetDetails, setResetDetails] = useState({
		pin: '',
		email: '',
	});

	const login = (user) => {
		setUser(user);
	};

	const logout = () => {
		localStorage.removeItem('zvt_token');
		localStorage.removeItem('zvt_user');
		setUser(null);
		setToken(null);
	};

	const authContextValue = {
		user,
		setUser,
		token,
		setToken,
		logout,
		resetDetails,
		setResetDetails,
	};

	useEffect(() => {
		const token = localStorage.getItem('zvt_token');
		const user = localStorage.getItem('zvt_token');
		if (token && user) {
			setToken(token);
			setUser(user);
		}
	}, [token, user]);

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
