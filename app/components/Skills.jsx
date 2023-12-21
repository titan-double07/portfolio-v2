import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <div className="  flex flex-wrap justify-center gap-8 pt-10 lg:w-4/5 ">
      {skills.map((skill, index) => {
        const { icon, text } = skill;

        return (
          <div key={index} className="flex flex-col items-center ">
            <i key={index} className="text-3xl sm:text-4xl">
              {icon}
            </i>
            <p className="text-sm sm:text-lg ">{text}</p>
          </div>
        );
      })}
    </div>
  );
}
