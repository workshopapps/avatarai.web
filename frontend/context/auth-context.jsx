import React, { useState, createContext, useContext, useEffect } from 'react';

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);
	console.log(token);

	const login = (user) => {
		setUser(user);
	};

	const logout = () => {
		localStorage.removeItem('zvt_token');
		setUser(null);
		setToken(null);
	};

	const authContextValue = {
		user,
		login,
		token,
		setToken,
		logout,
	};


	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
