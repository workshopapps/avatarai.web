import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Logo from "./components/chat/Logo";
import NavigationLink from "./components/chat/NavigationLink";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      {/*<App />*/}
      <Logo />
      <NavigationLink text={`Create avatar`} image={`/tapart.svg`} />
    </>
  </React.StrictMode>
);
