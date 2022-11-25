import MessagePreview from "./MessagePreview";

const Modal = () => {
  return (
    <div className="items-center justify-center w-full font-nunito top-0 h-screen absolute flex bg-[#344054B2] backdrop-blur-lg">
      <div className="rounded-3xl h-[520px] w-[480px] bg-white flex flex-col">
        <div className="relative flex items-center justify-center py-[28px]">
          <img className="absolute left-8" src="/close-circle.svg" />
          <p className="font-bold text-2xl text-[#8648DB]">New Message</p>
        </div>
        <div className="flex px-8 items-center border-y border-[#8648DB] w-full h-[52px]">
          <div className="flex gap-2">
            <p>To: </p>
            <input
              className="grow outline-none"
              type={`text`}
              placeholder={`Search`}
            />
          </div>
        </div>
        <div className="flex flex-col py-5 justify-center">
          <p className="ml-8 font-semibold text-xl">Suggested</p>
          <MessagePreview
            name={`Akuya Ekorot`}
            message={`Can you help me check out this new project i've been working on`}
            time={`43mins`}
          />
          <MessagePreview
            name={`Akuya Ekorot`}
            message={`Can you help me check out this new project i've been working on`}
            time={`43mins`}
          />
          <MessagePreview
            name={`Akuya Ekorot`}
            message={`Can you help me check out this new project i've been working on`}
            time={`43mins`}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
