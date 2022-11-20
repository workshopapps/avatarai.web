import React from "react";
import './courses.css';
import img1 from "../courses/images/completed.png";
import img2 from "../courses/images/earned.png";
import img3 from "../courses/images/progress.png";
import img4 from "../courses/images/web.png";
import img5 from "../courses/images/java.png";
import img6 from "../courses/images/html.png";
import img7 from "../courses/images/next.png";
import img8 from "../courses/images/script.png";
import img9 from "../courses/images/front.png";
import img10 from "../courses/images/learn.png";
import img11 from "../courses/images/jimmy.png";
import img12 from "../courses/images/daniel.png";
import img13 from "../courses/images/amanda.png";
import Lines from "../courses/images/lines.png";
import L75 from "../courses/images/75.png";
import L40 from "../courses/images/40.png";
import L58 from "../courses/images/58.png";
import { Link } from 'react-router-dom';
import Lock from "../courses/images/lock.png";

const CoursePage = () => {
  const OVER_VIEW = [
    {
      name: "Courses in progress",
      imgSrc: img3,
      amount: "05",
    },
    {
      name: "Courses Completed",
      imgSrc: img1,
      amount: "24",
    },
    {
      name: "Certificate Earned",
      imgSrc: img2,
      amount: "15",
    },
  ];

  const UP_COMING = [
    {
      name: "Web Design",
      imgSrc: img4,
    },
    {
      name: "Javascript",
      imgSrc: img5,
    },
    {
      name: "Html Basics",
      imgSrc: img6,
    },
  ];

  const PRO_GRESS = [
    {
      name: "Web Design",
      imgSrc: L75,
      number: "05",
    },
    {
      name: "Javascript",
      imgSrc: L40,
      number: "25",
    },
    {
      name: "Html Basics",
      imgSrc: L58,
      number: "13",
    },
  ];

  const NEW_COURSES = [
    {
      name: "Javascript Course",
      imgSrc: img8,
      id: "javascript",
      description: "HTML",
      lesson: "30",
      hour: "75",
    },
    {
      name: "Front-end Development",
      imgSrc: img9,
      id: "frontend",
      description: "HTML",
      lesson: "34",
      hour: "67",
    },
    {
      name: "Learn Creative Design",
      imgSrc: img10,
      id: "ui",
      description: "UI DESIGN",
      lesson: "20",
      hour: "25",
    },
  ];

  return (
    <section className="h-full pt-[6rem] md:pt-[5.5rem] pb-[2rem] md:pb-[3.2rem] mx-auto">
      <div className="w-full mx-auto px-[2rem] md:px-[3rem] md:flex md:justify-between md:gap-5">
        <div className="w-full md:w-[70%]">
          <div>
            <h2 className="text-[#333333] font-bold text-2xl">
              Course Overview
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mt-3">
            {OVER_VIEW.map((data) => (
              <div
                className="rounded-[8px] border-[1px] border-[#D3D3D3] p-4"
                key={data.imgSrc}
              >
                <div className="flex items-center gap-2">
                  <img src={data.imgSrc} alt={data.name} />
                  <p className="text-[#333333] font-bold">{data.name}</p>
                </div>

                <div className="flex flex-col gap-1 mt-4">
                  <p className="font-semibold text-2xl text-[#333333]">
                    {data.amount}
                  </p>
                  <img src={Lines} alt="lines" className="self-start" />
                </div>
              </div>
            ))}
          </div>

          {/* MY COURSES */}
          <div className="mt-[2rem]">
            <div className="flex items-center justify-between">
              <h2 className="text-[#333333] font-bold text-2xl">My Courses</h2>

              <p className="text-[#7454E5] font-bold">See all</p>
            </div>

            <div className="rounded-[8px] border-[1px] border-[#D3D3D3] p-4 mt-4 text-sm lg:text-base">
              <table className="w-full text-left">
                <tr>
                  <th className="text-left border-b-[1px] border-[#D3D3D3] pb-1">
                    Course Title
                  </th>
                  <th className="text-left border-b-[1px] border-[#D3D3D3] pb-1">
                    Level
                  </th>
                  <th className="text-left border-b-[1px] border-[#D3D3D3] pb-1 okt_hide">
                    Lessons Completed
                  </th>
                  <th className="text-left border-b-[1px] border-[#D3D3D3] pb-1 okt_hide">
                    Duration
                  </th>
                  <th className="text-left border-b-[1px] border-[#D3D3D3] pb-1 okt_hide">
                    Tutor
                  </th>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 py-2">
                    <img src={img4} alt="web" />
                    <p>Web Design</p>
                  </td>
                  <td>Intermediate</td>
                  <td className="okt_hide">7/35 (20%)</td>
                  <td className="okt_hide">08h 04m 12s</td>
                  <td className="md:flex items-center gap-2 py-2 hidden">
                    <img src={img11} alt="web" />
                    <p>Jimmy</p>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 py-2">
                    <img src={img5} alt="java" />
                    <p>Javascript</p>
                  </td>
                  <td>Beginner</td>
                  <td className="okt_hide">21/23 (97%)</td>
                  <td className="okt_hide">13h 24m 02s</td>
                  <td className="md:flex items-center gap-2 py-2 hidden">
                    <img src={img12} alt="web" />
                    <p>Daniel</p>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 py-2">
                    <img src={img6} alt="html" />
                    <p>Html Basics</p>
                  </td>
                  <td>Beginner</td>
                  <td className="okt_hide">18/40 (48%)</td>
                  <td className="okt_hide">17h 15m 00s</td>
                  <td className="md:flex items-center gap-2 py-2 hidden">
                    <img src={img13} alt="web" />
                    <p>Amanda</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          {/* NEW COURSES */}
          <div className="mt-[2rem]">
            <div className="flex items-center justify-between">
              <h2 className="text-[#333333] font-bold text-2xl">New Courses</h2>

              <p className="text-[#7454E5] font-bold">See all</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 mt-4">
              {NEW_COURSES.map((data) => (
                <Link
                  to={`/details/${data.id}`}
                  className="w-full rounded-[8px] border-[1px] border-[#D3D3D3] p-4"
                  key={data.imgSrc}
                >
                  <div>
                    <img
                      src={data.imgSrc}
                      alt={data.name}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="pt-2">
                    <p className="text-[#7454E5] text-sm font-semibold">{data.description}</p>
                    <p className="text-[#333333] font-bold">{data.name}</p>
                    <p className="text-[#909090] font-medium">
                      {data.lesson} Lessons <span className="border-[1px] mx-[3px]" /> {data.hour} Hours
                    </p>
                  </div>
                  <button className="bg-[#7454E5] w-full flex items-center justify-center text-[#fff] gap-2 mt-2 rounded-[4px] py-4 text-center font-medium text-[13px]">
                    <span>
                        <img src={Lock} alt="lock" />
                    </span>
                    Enroll
                  </button>
                </Link>
              ))}
            </div>
          </div>
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
                    <img src={img7} alt="arrow.png" />
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
                    <img src={img7} alt="arrow.png" />
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

export default CoursePage;
