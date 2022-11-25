import React, { useState } from "react";

import { Link } from "react-router-dom";
import QuestionSection from "../faq/QuestionSection";
import faq from "../faq";

export const Faq = () => {
  const [questions, setQuestions] = useState([
    {
      title:
        "Do I need to upload a picture with a human face to generate avatars?",
      comment:
        "Digital avatars can serve a number of purposes including representing a person, an online friend, a brand, or an influencer",
    },
    {
      title: "What are digital avatars used for?",
      comment:
        "Digital avatars can serve a number of purposes, including representing a person, an online friend, a brand, or an influencer.",
    },
    {
      title: "Can you create avatars directly from your camera",
      comment: "the answers to the questions",
    },
    {
      title: "Can I Choose the background for my avatar?",
      comment: "the answers to the questions",
    },
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
        <h1 className="text-5xl p-8 mt-4  font-jakarta font-bold">FAQS</h1>
        <p className="py-6 w-5/6 mx-auto font-nunito text-center">
          Have any questions? Here are answers to some of them
        </p>
      </div>

      {/* <div className=" mx-auto w-5/6 break2:w-46rem  break1:w-faqWidth">
        {questions.map((question, index) => (
          <div>
            <div
              onClick={() => click(index)}
              key={index}
              className="rounded-lg vnc_border p-3 mb-3 flex justify-between"
            >
              <p className="font-semibold">{question.title}</p>

              <p
                className="text-lg cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                +
              </p>
            </div>
            {toggle === index ? (
              <div className="rounded-lg vnc_border1 mb-5 p-4  ">
                <div className="flex justify-between">
                  <p className="font-bold font-nunito">{question.title}</p>

                  <p className="text-lg " onClick={() => setToggle(toggle)}>
                    -
                  </p>
                </div>

                <p className="font-jakarta">{question.comment}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div> */}
      <QuestionSection />
    </section>
  );
};
