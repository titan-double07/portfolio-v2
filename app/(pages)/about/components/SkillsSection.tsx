import { Skill } from '@/app/types/types';
import React from 'react'
import { MotionDiv, MotionSection } from "@/app/lib/framer-motion/motionComponents";
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
        const toBold = [
          "html",
          "css",
          "javascript",
          "typescript",
          "react.js",
          "next.js",
          "tailwind",
          "bootstrap",
          "framer",
          "motion",
          "git",
          "nodejs",
          "express",
          "mongoDB",
          "figma",
          "photoshop",
        ];
        const { name, description } = skill;
        const words = description.split(" ");
        const boldedWords = words.map((word, innerIndex) => {
          // Remove commas from the word
          const cleanedWord = word.replace(",", "");
          if (toBold.includes(cleanedWord.toLowerCase())) {
            return (
              <span
                key={innerIndex}
                className="font-bold capitalize text-light">
                {word}{" "}
              </span>
            );
          }
          //returns word with a space
          return word + " ";
        });

        return (
          <MotionDiv
            variants={itemVariant}
            key={index}
            className="border rounded-lg p-4  lg:h-[300px] lg:overflow-auto ">
            <h3 className="font-bold capitalize text-xl subpixel-antialiased">
              {name}
            </h3>
            <hr className=" border-light/50 my-2" />
            <p className="text-light/90 text-base lg:text-lg  subpixel-antialiased">
              {boldedWords}
            </p>
          </MotionDiv>
        );
      })}
    </MotionSection>
  );
}
