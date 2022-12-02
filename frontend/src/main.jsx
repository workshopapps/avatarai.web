import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "../context/auth-context";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "../context/nav-context";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <NavProvider>
        <GoogleOAuthProvider clientId="835762326165-94q22eof4arhg4g3gnogj0gd55e6blle.apps.googleusercontent.com">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </NavProvider>
    </AuthProvider>
  </React.StrictMode>
);
