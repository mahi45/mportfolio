import React from "react";
import { CiMobile2 } from "react-icons/ci";

const About = () => {
  return (
    <div className="bg-[#f7f7ff]">
      <div className="content " name="about">
        <div
          className=" py-20 bg-[#f7f7ff]"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center ">
            <div className="flex flex-col justify-center items-center">
              <img
                src="../../../public/img/Mohidul.png"
                alt=""
                className="w-[300px] h-[300px] rounded-full border-4 border-orange-400 p-1"
              />
              <div className="flex flex-col items-center py-4">
                <p className="text-md font-semibold">Web Developer</p>
                <h1 className="text-2xl font-bold">Md. Mohidul Hasan</h1>
              </div>
            </div>
            <div
              className="col-span-2 flex flex-col px-8  lg:pe-2 space-y-6 justify-center"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <h1 className="text-3xl font-bold">Biography</h1>
              <p>
                I'm a Front-end Developer with over 2 years of experience. I'm
                from Dhaka, Bangladesh. I can code and create amazing web UI for
                amazing people around the world. A passionate web developer to
                learn new technology and explore myself.
              </p>
              <p>
                Also i have a professional experience as Master Trainer about
                web application over 3 years.
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col space-y-2">
                  <p>Name:Md. Mohidul Hasan</p>
                  <p>Expertise: Front End</p>
                  <p>Stack:MERN</p>
                  <p>Address:Dhaka, Bangladesh</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p>Phone:+8801724318008</p>
                  <p>Email:mohidulhasan145@gmail.com</p>
                  <p>Skype:mahi110145</p>
                  <p>Freelance:Available</p>
                </div>
              </div>
            </div>
          </div>
          {/* What do i do */}
          <h1 className="flex justify-start text-3xl font-bold pt-16 pb-12 px-8">
            What do i do?
          </h1>
          <div className="px-16 lg:px-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pb-6 gap-4">
            <div className="card w-96 lg:w-64 xl:w-96 bg-base-100 shadow-xl border">
              <CiMobile2 className="flex justify-start items-center text-6xl m-4" />
              <div className="card-body">
                <h2 className="card-title font-bold">Web Design</h2>
                <p>
                  <span className="font-bold">Technologies:</span> HTML, CSS,
                  Tailwind CSS, Bootstrap
                </p>
              </div>
            </div>
            <div className="card w-96 lg:w-64 xl:w-96 bg-base-100 shadow-xl border">
              <CiMobile2 className="flex justify-start items-center text-6xl m-4" />
              <div className="card-body">
                <h2 className="card-title font-bold">Front End Development</h2>
                <p>
                  <span className="font-bold">Technologies:</span> HTML, CSS,
                  Tailwind CSS, Bootstrap, JavaScript, React
                </p>
              </div>
            </div>
            <div className="card w-96 lg:w-64 xl:w-96 bg-base-100 shadow-xl border">
              <CiMobile2 className="flex justify-start items-center text-6xl m-4" />
              <div className="card-body">
                <h2 className="card-title font-bold">Back End Development</h2>
                <p>
                  <span className="font-bold">Technologies:</span> PHP, Laravel,
                  MySQL, JavaScript, Node JS, Express JS, MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
