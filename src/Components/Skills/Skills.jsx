import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "HTML5",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "CSS & Framework",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
  {
    name: "React",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
  {
    name: "Node and Express JS",
    numberPercent: "70",
    startCount: "0",
    endCount: "70",
  },
  {
    name: "MongoDB",
    numberPercent: "70",
    startCount: "0",
    endCount: "70",
  },
];

const Skills = () => {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className="content py-20 px-0"
      id="resume"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="200"
    >
      <h1 className="flex justify-start text-3xl font-bold pb-12">
        Education & Skills
      </h1>
      <div className="grid grid-cols-1 justify-start  md:grid-cols-2 md:justify-center me-16 md:me-0">
        <div className="ps-10 md:ps-0 bg-[#f7f7ff] md:w-4/5">
          <div className="md:ps-4 lg:ps-16 py-8 ">
            <p className="">2010-2014</p>
            <p className="font-semibold">
              BSc in Computer Science & Engineering
            </p>
            <p>Pabna University of Science & Technology</p>
          </div>
          <div className="md:ps-4 lg:ps-16 py-8 ">
            <p className="">2007-2009</p>
            <p className="font-semibold">Higher Secondary</p>
            <p>Alamdanga Degree College</p>
          </div>
        </div>
        <div className="pt-13 lg:pe-16">
          {skillContent.map((skill, index) => (
            <div className="flex flex-col justify-center py-3" key={index}>
              <h6 className="ml-[86px] font-semibold">{skill.name}</h6>
              <div className="flex flex-row-reverse gap-4 justify-center items-center">
                <span className="order-1">
                  <CountUp
                    start={focus ? skill.startCount : null}
                    end={skill.endCount}
                    duration={1}
                    redraw={true}
                  >
                    {({ countUpRef }) => (
                      <VisibilitySensor
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setFocus(true);
                          }
                        }}
                      >
                        <span
                          ref={countUpRef}
                          className="text-4xl font-semibold"
                        />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span className="text-4xl font-semibold">%</span>
                </span>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-400 h-3"
                    style={{
                      width: skill.numberPercent + "%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
