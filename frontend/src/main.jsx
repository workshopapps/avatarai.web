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
import reportWebVitals from "./reportWebVitals";

// import * as atatus from 'atatus-spa';
import * as atatus from 'atatus-js';
import ScrollToTop from "./components/scrollToTop/scrollToTop.component";

// atatus.config('b1fd163497f740bfa060a7b67021e6c1').install();
atatus.config('c392113d601e407c8f6cd3c9cd4bb63d').install();

atatus.notify(new Error('Test Atatus Setup'));

process.env.NODE_ENV === "production" && Sentry.init({
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
					<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
						<BrowserRouter>
						<ScrollToTop />
							<App />
						</BrowserRouter>
					</GoogleOAuthProvider>
				</ForgetPasswordProvider>
			</NavProvider>
		</AuthProvider>
	</React.StrictMode>
);

reportWebVitals();

