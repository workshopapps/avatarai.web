import Logo from "./Logo";
import NavigationFooter from "./NavigationFooter";
import chatSideBarContent from "./chatSideBarContent";

const ChatSideBar = () => {
  return (
    <div className="flex flex-col">
      <div className="h-12 mb-[70px]">
        <Logo />
      </div>
      <div className="flex flex-col gap-3">
        {chatSideBarContent.map((content) => {
          return (
            <div
              className="flex gap-3 px-[20px] py-[15px]"
              key={content.imageUrl}
            >
              <img src={content.imageUrl} alt={content.name} />
              <p>{content.name}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-auto">
        <NavigationFooter
          username={`Akuya Ekorot`}
          email={`akuyaekorot@gmail.com`}
        />
      </div>
    </div>
  );
};

export default ChatSideBar;
