'use client'
import React, { useEffect } from "react";
import { tools } from "../data";
import { MotionDiv, useAnimate,stagger } from "../lib/framer-motion/motionComponents";
export default function Tools() {
const [scope, animate] = useAnimate();
 
  useEffect(() => {
    if(scope.current)
    animate('.tool', {opacity:[0,1],y:[50,0]},{delay:stagger(0.2, { startDelay:1 },),duration:0.5}  )
  },[scope,animate])
  return (
    <MotionDiv
      ref={scope}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      className="  flex flex-wrap justify-center gap-8 md:pt-10 pt-6 lg:w-4/5 ">
      {tools &&
        tools?.map((tool, index) => {
          const { icon, text } = tool;

          return (
            <MotionDiv
              key={index}
              className="tool flex flex-col items-center ">
              <i key={index} className="text-3xl ">
                {icon}
              </i>
              <p className="text-sm sm:text-base ">{text}</p>
            </MotionDiv>
          );
        })}
    </MotionDiv>
  );
}
