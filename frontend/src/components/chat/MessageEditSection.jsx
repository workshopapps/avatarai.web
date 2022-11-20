import MessageEdit from "./MessageEdit";

const MessageEditSection = () => {
  return (
    <div className="flex relative items-center justify-center p-[8px] h-[100px]">
      <div className="">
        <p className="font-jakarta text-2xl font-semibold">Dhemmex</p>
      </div>
      <div className="absolute right-2">
        <MessageEdit />
      </div>
    </div>
  );
};

export default MessageEditSection;
