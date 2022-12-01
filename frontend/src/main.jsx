import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "../context/auth-context";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<GoogleOAuthProvider clientId="730438514566-heblqc7dtqc29cuqbc0dp24igg4lbo7m.apps.googleusercontent.com">
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</GoogleOAuthProvider>
		</AuthProvider>
	</React.StrictMode>
);
