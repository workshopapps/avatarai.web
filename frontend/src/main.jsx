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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      {/*<App />*/}
      <Logo />
      <NavigationLink text={`Create avatar`} image={`/tapart.svg`} />
      <NavigationFooter
        username={`Akuya Ekorot`}
        email={`akuyaekorot@gmail.com`}
      />
      <MessageEdit />
      <div className="w-[438px]">
        <MessageEditSection />
      </div>
      <MessagePreview
        name={`Martins`}
        message={`can you help me apply this foundation in tomorrow's show?`}
        time={`49 mins`}
      />
      <SendMessage />
      <ChatSideBar />
      <ChatPage />
    </>
  </React.StrictMode>
);
