import ChatSideBar from "./ChatSideBar";
import ChatMain from "./ChatMain";

const ChatPage = () => {
  return (
    <div className="bg-[#FCFCFC] w-full flex">
      <div className="flex pt-11 pb-5 px-12 bg-white h-screen">
        <ChatSideBar />
      </div>
      <ChatMain />
    </div>
  );
};

export default ChatPage;
