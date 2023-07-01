import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterestAlt,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="content border-t-2 border-gray-150 py-5">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between items-center w-full lg:w-auto">
        <div className="flex gap-4 font-bold text-lg items-center justify-center lg:justify-start pb-4 lg:pb-0">
          <BiLogoFacebook />
          <BiLogoTwitter />
          <BiLogoInstagram />
          <BiLogoLinkedin />
          <BiLogoPinterestAlt />
        </div>
        <div className="flex justify-center lg:justify-end text-lg md:text-sm">
          &copy;2023 copyright
          <span className="text-orange-500 px-1">Mohidul Hasan </span>
          all right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
