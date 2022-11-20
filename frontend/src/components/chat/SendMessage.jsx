const SendMessage = () => {
  return (
    <div className="flex flex-col gap-20 font-nunito items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-10">
          <div className="w-24 h-24">
            <img className="w-full h-full" src="/message-icon.svg" />
          </div>
          <div>
            <p className="text-[#8B70E9] text-[32px] font-bold">
              Your Messages
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#333333]">
            Send Messages, Send Avatars To Friends And Groups
          </p>
        </div>
      </div>
      <div className="bg-[#8B70E9] py-3 px-[15px] text-base font-bold text-white rounded">
        <p>Send Message</p>
      </div>
    </div>
  );
};

export default SendMessage;
