import { Skill } from "@/app/types/types";
import React from "react";
import {
  MotionDiv,
  MotionSection,
} from "@/app/lib/framer-motion/motionComponents";
import {
  containerVariant,
  itemVariant,
} from "@/app/lib/framer-motion/motionComponents";

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <MotionSection
      variants={containerVariant}
      initial="hidden"
      animate="show"
      id="skills"
      className="grid grid-cols-1 lg:grid-cols-2  gap-5 w-full">
      {skills.map((skill, index) => {
        // commented out functionality to bold certain words in the description
        // const toBold = [
        //   "html",
        //   "css",
        //   "javascript",
        //   "typescript",
        //   "react.js",
        //   "next.js",
        //   "tailwind",
        //   "bootstrap",
        //   "framer",
        //   "motion",
        //   "git",
        //   "nodejs",
        //   "express",
        //   "mongoDB",
        //   "figma",
        //   "photoshop",
        // ];
        const { name, description } = skill;
        // const words = description.split(" ");
        // const boldedWords = words.map((word, innerIndex) => {
        //   // Remove commas from the word
        //   const cleanedWord = word.replace(",", "");
        //   if (toBold.includes(cleanedWord.toLowerCase())) {
        //     return (
        //       <span
        //         key={innerIndex}
        //         className="font-bold capitalize text-light">
        //         {word}{" "}
        //       </span>
        //     );
        //   }
        //   //returns word with a space
        //   return word + " ";
        // });
        
        return (
          <MotionDiv
            variants={itemVariant}
            key={index}
            className="border rounded-lg p-4   lg:overflow-auto ">
            <h3 className="font-bold capitalize text-xl subpixel-antialiased">
              {name}
            </h3>
            <hr className=" border-light/50 my-2" />
            <p className="text-light/75 text-sm pb-2  subpixel-antialiased">
              {description}
            </p>
            <hr className=" border-light/50 my-2" />
            <div className="flex flex-wrap items-center justify-center gap-3">
              {skill.tools.map((tool, index) => {
                const { text, icon } = tool;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-1 text-light/90">
                    <p className="capitalize text-sm">{text}</p>
                    <i className="text-lg">{icon}</i>
                  </div>
                );
              })}
            </div>
          </MotionDiv>
        );
      })}
    </MotionSection>
  );
}
