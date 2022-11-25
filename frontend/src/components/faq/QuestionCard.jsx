import { useState } from "react";
import './faqs.css'

const QuestionCard = ({ question, index }) => {
  const [hidden, setHidden] = useState(() => true);

  const handleClick = () => {
    setHidden((prev) => !prev);
  };
  return (
    <div
      key={index}
      className={`${
        !hidden && "border-[#8B70E9]"
      } flex flex-col gap-[8px] py-[24px] md:px-[20px] border-b md:border md:rounded`}
    >
      {/* Card Heading and Symbol */}
      <div
        onClick={() => handleClick(index)}
        className={`flex justify-between `}
      >
        <h2 id="faqs" className="md:w-full text-[20px] font-medium pr-3">{question.q}</h2>
        <p id="plus" className="text-[20px] font-bold">{hidden ? "+" : "-"}</p>
      </div>
      {/* Card Description */}
      <p
        className={`${
          hidden ? "hidden" : "block"
        } md:w-full max-w-[800px] pr-8`}
      >
        {question.a}
      </p>
    </div>
  );
};

export default QuestionCard;
