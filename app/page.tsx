import React from "react";
import Tools from "./components/Tools";
import Link from "next/link";
import { MotionDiv, MotionLink } from "./lib/framer-motion/motionComponents";
import { Variants } from "framer-motion";

export default function page() {
  const opacityVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
  return (
    <div className="w-full flex flex-col items-center xl:justify-center text-center container h-full pt-8 pb-5 sm:pt-10  ">
      <MotionDiv
        initial={"hidden"}
        animate="visible"
        variants={opacityVariant}
        className="flex flex-col ">
        <h1 className="font-semibold capitalize">chisom okereke</h1>
        <h2 className="text-tetiary pb-3 font-semibold capitalize">
          web developer
        </h2>
        <p>
          {`  Hi, I develop functional, responsive and
          user-friendly websites. Whether you're a business seeking innovative
          web solutions or a team looking for a skilled developer, I specialize
          in technologies like React.js, Next.js, and TypeScript to deliver
          exceptional digital experiences.`}
        </p>
      </MotionDiv>
      <Tools />
      <MotionLink
        variants={opacityVariant}
        initial="hidden"
        animate="visible"
        transition={{ ...opacityVariant, delay: 4 }}
        href="https://drive.google.com/file/d/1cXMznTFdK8RXDO1FPuRWD67zv0EhPOUf/view?usp=sharing"
        className=" text-lg px-10 py-4 font-bold rounded-lg  mt-16   uppercase  bg-secondary  text-dark hover:border-4 hover:border-tetiary hover:text-tetiary hover:bg-dark active:scale-90 active:border-tetiary/50 xl:hidden ">
        Download CV
      </MotionLink>
    </div>
  );
}
