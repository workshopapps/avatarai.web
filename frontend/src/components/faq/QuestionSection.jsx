import faqContent from "./questions";
import QuestionCard from "./QuestionCard";
import FaqGetInTouch from "./FaqGetInTouch";
import './faqs.css'


const QuestionSection = () => {
  return (
    <section className="font-nunito flex flex-col items-center px-[24px] py-[80px] gap-[94px]">
      {/* FAQs and Contact Us Toggle */}
      <div className="flex items-center gap-4 justify-between p-[5px] h-[52px] w-full max-w-[290px] bg-[#F6F6FF] border border-[#CFD6FF] rounded">
        <div className="cursor-pointer bg-[#8B70E9] h-full flex items-center font-nunito font-bold text-white rounded px-[40px] py-[8px]">
          <span className="text-white">FAQ's</span>
        </div>
        <div className="cursor-pointer h-full flex items-center justify-center font-nunito font-bold grow text-[#848484] rounded py-[8px]">
          <span>Contact Us</span>
        </div>
      </div>
      {/* Expandable cards Section */}
      <div className="w-full md:max-w-[1000px] md:shadow-2xl md:rounded flex flex-col md:gap-[24px] md:p-[48px]" >
        {faqContent.map((question, i) => (
          <QuestionCard question={question} index={i} />
        ))}
      </div>
      <FaqGetInTouch />
    </section>
  );
};

export default QuestionSection;
