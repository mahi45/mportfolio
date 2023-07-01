import React from "react";
import { BsEnvelopeOpen } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { useForm } from "react-hook-form";
import Map from "./Map";

const Contact = () => {
  return (
    <div
      className="content pt-20 pb-20 ps-9 lg:ps-0 pe-14 md:pe-0"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
    >
      <div className="grid grid-cols-1 text-center md:text-left lg:grid-cols-3 gap-16">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold ">Get in touch with me</h1>
          <p className="py-3">Feel free to message or knock me.</p>
          <h3 className="flex items-start gap-2 text-lg font-semibold justify-center md:justify-start">
            <span>
              <ImLocation2 className="text-3xl text-orange-400" />
            </span>
            Nikunja-2, Khilkhet, Dhaka, Bangladesh
          </h3>
          <h3 className="flex items-center gap-2 text-lg font-semibold justify-center md:justify-start">
            <span>
              <BsEnvelopeOpen className="text-2xl text-orange-400" />
            </span>
            mohidulhasan145@gmail.com
          </h3>
          <h3 className="flex items-center gap-2 text-lg font-semibold justify-center md:justify-start">
            <span>
              <FaMobileAlt className="text-2xl text-orange-400"></FaMobileAlt>
            </span>
            +8801724318008
          </h3>
        </div>
        <div className="col-span-2 pe-08">
          <form className="space-y-4">
            <div className="flex gap-4 ">
              <div className="form-control w-full border border-gray-400">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control w-full border border-gray-400">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered "
                />
              </div>
            </div>
            <div className="form-control w-full border border-gray-400">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>
            <textarea
              className="textarea h-24 w-full border border-gray-400 rounded-none"
              placeholder="Message"
            ></textarea>
            <button className="btn bg-black px-8 py-2 text-white hover:bg-white hover:text-black hover:border-black">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Map></Map>
    </div>
  );
};

export default Contact;
