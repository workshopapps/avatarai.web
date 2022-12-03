import React, { useState, createContext, useContext } from 'react';
export const pages = {
    Home:"home",
AboutUs:"aboutus",
Pricing:"pricing",
ContactUs:"contactus",
Faqs:"faqs",
 }

 export const NavContext = createContext({
    page:"",
    setPage: () => {},
 });

export const NavProvider = ({ children }) => {
	const [page, setPage] = useState(pages.Home);
	
	/* reset email flow state */
	const [resetEmail, setResetEmail] = useState('placeholder@gmail.com')


	
	

	const navContextValue = {
		page,
		setPage,
		/* context value for reset email flow */
		resetEmail,
		setResetEmail
	};


	return <NavContext.Provider value={navContextValue}>{children}</NavContext.Provider>;
};


