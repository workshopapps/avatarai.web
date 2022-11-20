import MessagesEditAndPreview from "./MessagesEditAndPreview";
import SendMessage from "./SendMessage";

const ChatMain = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex border border-purple-200 grow max-w-5xl">
        <MessagesEditAndPreview />
        <div className="flex items-center justify-center grow">
          <SendMessage />
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
