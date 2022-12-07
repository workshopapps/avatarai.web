import faqContent from "./questions";
import QuestionCard from "./QuestionCard";
import FaqGetInTouch from "./FaqGetInTouch";
import './faqs.css'


const QuestionSection = () => {
  return (
    <section className="font-nunito flex flex-col items-center px-[24px] py-[40px] gap-[40px]">
             <h2 className="be">Frequently asked questions</h2>

      {/* Expandable cards Section */}
      <div className="w-[87.73%]  max-w-[1036px] md:shadow-2xl md:rounded flex flex-col md:gap-[24px] md:p-[48px]" >
        {faqContent.map((question, i) => (
          <QuestionCard question={question} index={i} />
        ))}
      </div>
      <FaqGetInTouch />
    </section>
  );
};

export default QuestionSection;
