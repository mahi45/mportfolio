import React from "react";
import {
  BsFillHouseAddFill,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlineFileImage } from "react-icons/ai";
import { FaSuitcase, FaBlog } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="z-50">
      <div className="fixed top-0 left-0 bottom-0 w-20 bg-white border">
        <div className="flex flex-col items-left p-4 mb-10 bg-orange">
          <Link to="home" spy={true} smooth={true} offset={-20} duration={500}>
            <img
              src="https://i.ibb.co/0mcCVyh/Mohidul-Hasan.jpg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
          </Link>
        </div>
        <div className="divide-y">
          <ul className="pb-4 space-y-1 text-sm">
            <li className="text-gray-50 border-b border-gray-300">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className="flex items-center justify-center p-3 rounded-md"
                onClick={handleClick}
              >
                <div className="tooltip tooltip-right" data-tip="Home">
                  <BsFillHouseAddFill className="text-black text-3xl" />
                </div>
              </Link>
            </li>
            <li className="text-gray-50 border-b border-gray-300">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="flex items-center justify-center p-3 space-x-3 rounded-md"
                onClick={handleClick}
              >
                <div className="tooltip tooltip-right" data-tip="About">
                  <BiUser className="text-black text-3xl" />
                </div>
              </Link>
            </li>
            <li className="text-gray-50 border-b border-gray-300">
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className="flex items-center justify-center p-3 space-x-3 rounded-md"
              >
                <div className="tooltip tooltip-right" data-tip="Resume">
                  <AiOutlineFileImage className="text-black text-3xl" />
                </div>
              </Link>
            </li>
            <li className="text-gray-50 border-b border-gray-300">
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="flex items-center justify-center p-3 space-x-3 rounded-md"
              >
                <div className="tooltip tooltip-right" data-tip="Work">
                  <FaSuitcase className="text-black text-3xl" />
                </div>
              </Link>
            </li>
            <li className="text-gray-50">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="flex items-center justify-center p-3 space-x-3 rounded-md"
              >
                <div className="tooltip tooltip-right" data-tip="Contact">
                  <BsFillTelephoneOutboundFill className="text-black text-3xl" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
