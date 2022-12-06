import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "../context/auth-context";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "../context/nav-context";
import { ForgetPasswordProvider } from "../context/forgetpassword-context";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

// process.env.NODE === "production" && 
Sentry.init({
	dsn: "https://10e43f27c83a4abc8e9c2605b69e557d@o4504280846565376.ingest.sentry.io/4504280979275777",
	integrations: [new BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<NavProvider>
				<ForgetPasswordProvider>
					<GoogleOAuthProvider clientId="730438514566-heblqc7dtqc29cuqbc0dp24igg4lbo7m.apps.googleusercontent.com">
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</GoogleOAuthProvider>
				</ForgetPasswordProvider>
			</NavProvider>
		</AuthProvider>
	</React.StrictMode>
);
