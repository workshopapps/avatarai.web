import MessageEditSection from "./MessageEditSection";
import MessagePreview from "./MessagePreview";

const messages = Array(7).fill("m");

const MessagesEditAndPreview = () => {
  return (
    <div className="border-r border-purple-200">
      <MessageEditSection />
      <div className="flex flex-col py-6 gap-6 border-t border-purple-200">
        {messages.map((m, i) => {
          return (
            <MessagePreview
              key={i}
              name={`Akuya Ekorot`}
              message={`Can you help me check out this new project i've been working on`}
              time={`43mins`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MessagesEditAndPreview;
