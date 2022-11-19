import faqContent from "./questions";
import QuestionCard from "./QuestionCard";
import FaqGetInTouch from "./FaqGetInTouch";

const QuestionSection = () => {
  return (
    <section className="font-nunito flex flex-col items-center px-[24px] py-[80px] gap-[94px]">
      {/* FAQs and Contact Us Toggle */}
      <div className="h-[52px] w-full max-w-[290px] bg-[#8B70E9] rounded"></div>
      {/* Expandable cards Section */}
      <div className="w-full md:max-w-[1000px] md:shadow-2xl md:rounded flex flex-col md:gap-[24px] md:p-[48px]">
        {faqContent.map((question, i) => (
          <QuestionCard question={question} index={i} />
        ))}
      </div>
      <FaqGetInTouch />
    </section>
  );
};

export default QuestionSection;
