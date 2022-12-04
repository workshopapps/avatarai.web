import React from "react";
import { Link, useParams } from "react-router-dom";
import details from "./Detaildata";
import Button from "../landingPage/Button/Button";

const CourseDetail = () => {
  const { detailId } = useParams();
  const detail = details.find((detail) => detail.id === detailId);

  const ABOUT_STATE = [
    {
      imgSrc:
        "https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072644/world_psxvey.png",
      about: "100% Onlne Courses",
      hint: "Start instantly and learn at your own schedule.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072641/schedule_dzhnlw.png",
      about: "Flexible Schedule",
      hint: "Set and maintain flexible deadlines.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072644/time_mkew43.png",
      about: "Approximately 4 months to complete",
      hint: "Suggested pace of 4 hours/week",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072639/message_iqod0h.png",
      about: "English",
      hint: "Subtitles: English",
    },
  ];

  const UP_COMING = [
    {
      name: "Web Design",
      imgSrc:
        "https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072644/web_mfkbzm.png",
    },
    {
      name: "Javascript",
      imgSrc:
        "https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072636/java_rcycwh.png",
    },
    {
      name: "Html Basics",
      imgSrc:
        "https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072636/html_u2l90a.png",
    },
  ];

  const PRO_GRESS = [
    {
      name: "Web Design",
      imgSrc:
        "https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072632/75_fchswg.png",
      number: "05",
    },
    {
      name: "Javascript",
      imgSrc:
        "https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072632/40_eavnaz.png",
      number: "25",
    },
    {
      name: "Html Basics",
      imgSrc:
        "https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072632/58_flalmc.png",
      number: "13",
    },
  ];


  return (
    <section className="h-full pt-[6rem] md:pt-[5.5rem] pb-[2rem] md:pb-[3.2rem] mx-auto">
      <div className="w-full mx-auto px-[2rem] md:px-[3rem] md:flex md:justify-between md:gap-5">
        <div className="w-full md:w-[70%]">
          <div className="h-[120px] overflow-hidden rounded-[8px]">
            <img
              src={detail.imgSrc}
              alt={detail.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-2 flex flex-col space-y-2">
            <h1 className="font-bold text-[#1C1C1E] text-base md:text-[20px]">
              {detail.name}
            </h1>
            <img
              src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072643/Star_aozor9.png"
              alt="star"
              className="self-start"
            />
            <p className="text-[#333333] font-semibold text-sm md:text-[14px]">
              {detail.rating}{" "}
              <span className="text-[#909090] pl-2">
                {detail.reviews} Reviews
              </span>
            </p>
            <p className="text-[#1C1C1E] py-2">{detail.about}</p>
            <Button className="bg-[#7454E5] w-full flex items-center justify-center md:hidden text-[#fff] gap-2 mt-2 rounded-[4px] py-4 text-center font-medium text-[13px]">
              <span>
                <img
                  src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072638/lock_vbny3m.png"
                  alt="lock"
                />
              </span>
              Enroll
            </Button>
          </div>

          <div className="w-full md:flex items-center my-4 justify-between gap-5 hidden">
            <Button className="bg-[#7454E5] w-[50%] flex items-center justify-center text-[#fff] gap-2 mt-2 rounded-[4px] py-4 text-center font-medium text-[13px]">
              <span>
                <img
                  src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072638/lock_vbny3m.png"
                  alt="lock"
                />
              </span>
              Enroll
            </Button>

            <div className="w-[50%]">
              <p className="font-bold text-sm md:text-base text-[#333333]">
                Enroll to start your 7day full access free trial
              </p>
              <p className="text-sm font-semibold text-[#909090] py-1">
                Starts Nov 21, 2022
              </p>
            </div>
          </div>

          <div className="my-5 md:hidden">
            <hr />
            <p className="font-bold text-sm md:text-base text-[#333333] py-1">
              Enroll to start your 7day full access free trial
            </p>
            <p className="text-sm font-semibold text-[#909090] py-1">
              Starts Nov 21, 2022
            </p>
            <hr />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-4 space-y-3 py-3">
            {ABOUT_STATE.map((about) => (
              <div className="flex items-start space-x-3" key={about.imgSrc}>
                <div>
                  <img src={about.imgSrc} alt="world" />
                </div>

                <div>
                  <p className="text-[#333333] font-bold">{about.about}</p>
                  <p className="font-medium text-sm text-[#909090]">
                    {about.hint}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="my-3 text-[#6C6C6C]">
            Learners will be able to follow along with the instructor and be
            able to apply and practice their learning through a series of
            low-stakes challenges and projects. Quizzes are the main assessment
            for this Specialization, along with Honor options in a couple of the
            courses.
          </p>

          <Link
            to="/"
            className="bg-[#7454E5] w-full flex items-center justify-center text-[#fff] gap-2 mt-6 rounded-[4px] py-4 text-center font-medium text-[13px]"
          >
            Go Back
          </Link>
        </div>

        {/* SIDEBAR */}
        <div className="w-[30%] hidden md:flex md:flex-col">
          <div>
            <h2 className="text-[#333333] font-bold text-2xl">
              Upcoming Tests
            </h2>

            <div className="flex flex-col space-y-4 rounded-[8px] border-[1px] border-[#D3D3D3] p-4 mt-4">
              {UP_COMING.map((data) => (
                <div
                  className="flex items-center justify-between space-x-2"
                  key={data.imgSrc}
                >
                  <div>
                    <img src={data.imgSrc} alt={data.name} />
                  </div>
                  <div>
                    <p className="text-[#333333] text-sm lg:text-lg font-semibold">
                      {data.name}
                    </p>
                    <p className="pt-1 text-sm font-semibold text-[#909090]">
                      Intermediate Class{" "}
                      <span className="pl-2 text-[#7454E5] font-bold">
                        25 Nov
                      </span>
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072640/next_hfj9gc.png"
                      alt="arrow.png"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-[#333333] font-bold text-2xl">
              Tasks Progress
            </h2>

            <div className="flex flex-col space-y-5 rounded-[8px] border-[1px] border-[#D3D3D3] p-4 mt-4">
              {PRO_GRESS.map((data) => (
                <div
                  className="flex items-center justify-between space-x-2"
                  key={data.imgSrc}
                >
                  <div>
                    <img src={data.imgSrc} alt={data.name} />
                  </div>
                  <div>
                    <p className="text-[#333333] text-sm lg:text-lg font-semibold">
                      {data.name}
                    </p>
                    <p className="pt-1 text-sm font-semibold text-[#909090]">
                      Intermediate Class{" "}
                      <span className="pl-2 text-[#7454E5] font-bold">
                        {data.number} Tasks
                      </span>
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670072640/next_hfj9gc.png"
                      alt="arrow.png"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
