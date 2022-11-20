import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Logo from "./components/chat/Logo";
import NavigationFooter from "./components/chat/NavigationFooter";
import NavigationLink from "./components/chat/NavigationLink";
import MessageEdit from "./components/chat/MessageEdit";
import "./index.css";
import MessageEditSection from "./components/chat/MessageEditSection";
import MessagePreview from "./components/chat/MessagePreview";
import SendMessage from "./components/chat/SendMessage";
import ChatSideBar from "./components/chat/ChatSideBar";
import ChatPage from "./components/chat/ChatPage";
import Modal from "./components/chat/Modal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      {/*<App />*/}
      <div className="relative ">
        <ChatPage />
        <Modal />
      </div>
    </>
  </React.StrictMode>
);
