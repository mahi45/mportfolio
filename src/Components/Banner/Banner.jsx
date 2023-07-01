import React from "react";

const Banner = () => {
  return (
    <div className="content md:ml-[75px] md:mr-0 mt-8" name="home">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between lg:px-10">
        <div
          className="flex justify-between lg:justify-normal gap-8 ps-6 pe-11
        "
        >
          <p>+8801724318008</p>
          <p>mohidulhasan145@gmail.com</p>
        </div>
        <div className="hidden lg:flex justify-end gap-4 text-sm">
          <p className="bg-orange-400 px-2">EN</p>
          <p>BN</p>
        </div>
      </div>
      {/* Slider area */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center text-center md:text-left md:justify-between items-center">
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
          <div className="md:ml-10 lg:ml-16 py-12">
            <p className="text-2xl font-semibold">Hello, My name is</p>
            <h1 className="text-6xl md:text-4xl font-bold py-4">
              Md. Mohidul Hasan
            </h1>
            <p className="text-3xl text-orange-400 font-semibold">
              Professional Web Developer
            </p>
            <p className="text-md py-5">
              A professional web developer proficient in the MERN stack. Already
              completed couple of full stack project using mongo DB, Express js,
              React and Node js. Alwasys want to explore something new in web
              technology.
            </p>
            <a
              href="https://drive.google.com/file/d/1lgvy188JTNBaKeHtLBbA1SQMlLBaAClw/view?usp=sharing"
              target="_blank"
            >
              <button className="btn bg-black text-white px-10 py-2  border-2 hover:bg-white hover:text-black">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center order-first md:order-last pt-16 md:pt-16">
          <img
            src="../../../public/img/Mohidul.png"
            alt=""
            className="w-3/4 md:w-2/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
