import React, { useState, createContext, useContext } from 'react';

 export const ForgetPasswordContext = createContext({
    emailForgot:"",
    setEmailForgot: () => {},
 });

export const ForgetPasswordProvider = ({ children }) => {
	const [emailForgot, setEmailForgot] = useState("");
	


	
	

	const ForgetPasswordContextValue = {
		emailForgot,
		setEmailForgot,
	};


	return <ForgetPasswordContext.Provider value={ForgetPasswordContextValue}>{children}</ForgetPasswordContext.Provider>;
};


