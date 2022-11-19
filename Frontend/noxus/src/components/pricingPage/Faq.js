import React, { useState } from "react";

export const Faq = () => {
  const [questions, setQuestions] = useState([
    { title: "Title of the question", comment: "the answers to the questions" },
    { title: "Title of the question", comment: "the answers to the questions" },
    { title: "Title of the question", comment: "the answers to the questions" },
    { title: "Title of the question", comment: "the answers to the questions" },
  ]);

  const [toggle, setToggle] = useState(false);
  const click = (index) => {
    if (toggle === index) {
      return setToggle(null);
    }
    setToggle(index);
  };

  return (
    <section className="">
      <div className="text-center ">
        <h1 className="text-5xl p-8 mt-4  font-Jakarta font-bold">FAQS</h1>
        <p className="py-6 w-5/6 mx-auto font-Nunito text-center">
          Have any questions? Here are answers to some of them
        </p>
      </div>

      <div className=" mx-auto w-5/6 break2:w-46rem  break1:w-faqWidth">
        {questions.map((question, index) => (
          <div>
            <div
              onClick={() => click(index)}
              key={index}
              className="rounded-lg border-first  p-3 mb-3 flex justify-between">
              <p>{question.title}</p>
              <p
                className="text-lg cursor-pointer"
                onClick={() => setToggle(!toggle)}>
                +
              </p>
            </div>
            {toggle === index ? (
              <div className="rounded-lg border-first mb-5 p-4 ">
                <div className="flex justify-between">
                  <p>{question.title}</p>
                  <p className="text-lg " onClick={() => setToggle(toggle)}>
                    -
                  </p>
                </div>
                <p className="font-Jakarta">{question.comment}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};
