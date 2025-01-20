import { Experience } from "@/app/types/types";
import React from "react";
import {
  MotionSection,
  MotionDiv,
} from "@/app/lib/framer-motion/motionComponents";
import {
  containerVariant,
  itemVariant,
} from "@/app/lib/framer-motion/motionComponents";

export default function WorkExperience({
  experience,
}: {
  experience: Experience[];
}) {
  return (
    <MotionSection
      variants={containerVariant}
      initial="hidden"
      animate="show"
      id="experience"
      className="flex flex-col justify-center items-center gap-6  ">
      {experience.map((experience, index) => {
        const { company, employmentType, details } = experience;
        return (
          <MotionDiv
            variants={itemVariant}
            key={index}
            className="  p-2 border border-light rounded-lg text-left px-10 ">
            <p className="">{company}</p>
            <p className=" capitalize pb-2">{employmentType}</p>
            {details.map((item, i) => {
              const { description, date, role } = item;
              return (
                <div key={i} className="pb-2">
                  <p className="capitalize flex justify-between">
                    <span>{role}</span> <span>{date}</span>
                  </p>
                  <ul
                    key={i}
                    className="mx-auto  text-left flex flex-col  gap-1.5 pb-2">
                    {description.map((desc, i) => {
                      return (
                        <li
                          key={i}
                          className="text-light/75 text-sm sm:text-base list-disc  leading-relaxed">
                          {desc}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </MotionDiv>
        );
      })}
    </MotionSection>
  );
}
