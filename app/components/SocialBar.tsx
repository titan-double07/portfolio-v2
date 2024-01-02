import React from "react";

import { FaGithubSquare, FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";
export default function SocialBar() {
  return (
    <div className="social-bar  flex items-center justify-center gap-10 sm:gap-20 pt-5 xl:pt-0 sm:pt-8 capitalize xl:flex-col xl:gap-5   ">
      <a
        href="tel:+2347014385856"
        className="hover:text-tetiary xl:hover:text-light xl:w-full xl:justify-start flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
        <FaPhoneSquare className="text-2xl sm:text-3xl xl:text-2xl" />
        <p className="text-sm sm:text-lg "> phone no</p>
      </a>
      <a
        href="mailto:chisomwebdev@outlook.com"
        className="hover:text-tetiary xl:hover:text-light xl:w-full xl:justify-start flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
        <BsEnvelopeAtFill className="text-2xl sm:text-3xl xl:text-2xl" />
        <p className="text-sm sm:text-lg ">email</p>

      </a>
      <a
        href="https://www.linkedin.com/in/chisom-okereke-39324323a/"
        className="hover:text-tetiary xl:hover:text-light xl:w-full xl:justify-start flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
        <FaLinkedin className="text-2xl sm:text-3xl xl:text-2xl" />
        <p className="text-sm sm:text-lg ">linkedIn</p>
      </a>
      <a
        href="https://github.com/titanwarlord007"
        className="hover:text-tetiary xl:hover:text-light xl:w-full xl:justify-start flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
        <FaGithubSquare className="text-2xl sm:text-3xl xl:text-2xl" />
        <p className="text-sm sm:text-lg ">Github</p>
      </a>
    </div>
  );
}
