import ChatSideBar from "./ChatSideBar";

const ChatPage = () => {
  return (
    <div className="bg-[#FCFCFC] w-full flex">
      <div className="flex pt-11 pb-5 px-12 bg-white h-screen">
        <ChatSideBar />
      </div>
    </div>
  );
};

export default ChatPage;
