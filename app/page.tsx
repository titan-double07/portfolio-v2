import React from "react";
import Tools from "./components/Tools";
import Link from "next/link";
import { MotionDiv } from "./lib/framer-motion/motionComponents";

export default function page() {
  return (
    <div className="w-full flex flex-col items-center xl:justify-center text-center container h-full pt-8 pb-5 sm:pt-10  ">
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        className="flex flex-col   ">
        <h1 className="font-semibold capitalize">chisom okereke</h1>
        <h2 className="text-tetiary pb-3 font-semibold capitalize">
          web developer
        </h2>
        <p>
          As a web developer, my goal is simple: to build visually stunning,
          easy-to-navigate sites that leave a positive impression and works
          seamlessly well.
        </p>
      </MotionDiv>
      <Tools />
      <Link
        href="https://drive.google.com/file/d/1cXMznTFdK8RXDO1FPuRWD67zv0EhPOUf/view?usp=sharing"
        className=" text-lg px-10 py-4 font-bold rounded-lg  mt-16   uppercase  bg-secondary  text-dark hover:border-4 hover:border-tetiary hover:text-tetiary hover:bg-dark active:scale-90 active:border-tetiary/50 xl:hidden ">
        Download CV
      </Link>
    </div>
  );
}
//https://drive.google.com/file/d/1cXMznTFdK8RXDO1FPuRWD67zv0EhPOUf/view?usp=sharing