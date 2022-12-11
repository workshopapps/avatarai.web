import { setUser } from '@sentry/react';
import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

const BaseUrl = `${import.meta.env.VITE_API_URL}`;

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);
	const [resetDetails, setResetDetails] = useState({
		pin: '',
		email: '',
	});

	async function getUser() {
		const locUser = localStorage.getItem('zvt_user');
		const User = JSON.parse(locUser);
		await axios
			.get(`${BaseUrl}/user/${User?.email}`, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				const user = response?.data?.userData;

				setUser(user);
				console.log(user, 'user');
			})
			.catch((e) => {
				const err = e?.response?.data?.detail;
				console.log(err);
			});
	}

	const logout = () => {
		localStorage.removeItem('zvt_token');
		localStorage.removeItem('zvt_user');
		setUser(null);
		setToken(null);
	};

	const authContextValue = {
		user,
		setUser,
		getUser,
		token,
		setToken,
		logout,
		resetDetails,
		setResetDetails,
	};

	useEffect(() => {
		const locToken = localStorage.getItem('zvt_token');

		if (locToken) {
			setToken(JSON.parse(locToken));
			getUser();
		}
	}, [token]);

	useEffect(() => {
		if (user) {
			localStorage.setItem('zvt_user', JSON.stringify(user));
		}
	}, [user]);

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
