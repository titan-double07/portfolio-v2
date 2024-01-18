"use client";
import React, { useEffect } from "react";
import { FaGithubSquare, FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { stagger, useAnimate } from "../lib/framer-motion/motionComponents";
export default function SocialBar() {
  const xl = useMediaQuery({ minWidth: 1280 });
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (scope.current) {
      animate(
        "a",
        { opacity: [0, 1], scale: [0, 1] },
        {
          type: "spring",
          duration: 1,
          delay: stagger(0.2,),
          ease: "easeIn",
        }
      );
    }
  },[scope,animate]);
  return (
    <div
      ref={scope}
      className="social-bar  flex items-center justify-center gap-10 sm:gap-20 pt-5 xl:pt-0 sm:pt-8 capitalize xl:flex-col xl:gap-5   ">
      <a
        href="tel:+2347014385856"
        target="_blank"
        className="hover:text-tetiary xl:hover:text-light xl:w-full xl:justify-start flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
        <FaPhoneSquare className="text-2xl sm:text-3xl xl:text-2xl" />
        <p className="text-sm sm:text-lg "> phone no</p>
      </a>
      <a
        href="mailto:chisomwebdev@outlook.com"
        target="_blank"
        className="hover:text-tetiary xl:hover:text-light xl:w-full xl:justify-start flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
        <BsEnvelopeAtFill className="text-2xl sm:text-3xl xl:text-2xl" />
        <p className="text-sm sm:text-lg ">email</p>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/chisom-okereke-39324323a/"
        className="hover:text-tetiary xl:hover:text-light xl:w-full xl:justify-start flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
        <FaLinkedin className="text-2xl sm:text-3xl xl:text-2xl" />
        <p className="text-sm sm:text-lg ">linkedIn</p>
      </a>
      <a
        target="_blank"
        href="https://github.com/titanwarlord007"
        className="hover:text-tetiary xl:hover:text-light xl:w-full xl:justify-start flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
        <FaGithubSquare className="text-2xl sm:text-3xl xl:text-2xl" />
        <p className="text-sm sm:text-lg ">Github</p>
      </a>
    </div>
  );
}
