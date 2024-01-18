"use client";
import React from "react";
import { aboutPageData } from "@/app/data";
import { useAppSelector } from "@/app/redux/hooks";
import { AboutPageData } from "@/app/types/types";
import AboutMe from "../components/AboutMe";
import Certification from "../components/Certification";
import WorkExperience from "../components/WorkExperience";
import SkillsSection from "../components/SkillsSection";
import { AnimatePresence,m } from "@lib/framer-motion/motionComponents";

export default function AboutPages() {
  const { about, certifications, experience, skills }: AboutPageData =
    aboutPageData;
  const { currentTab } = useAppSelector((state) => state.appReducer);
  const MotionAboutMe = m(AboutMe);
  const MotionCertification = m(Certification);
  // const MotionWorkExperience = m(WorkExperience);
  // const MotionSkillsSection = m(SkillsSection);

  return (
    <AnimatePresence initial={false} mode="wait">
      {(() => {
        switch (currentTab) {
          case "about":
            return <AboutMe key="about" {...about} />;
          case "certifications":
            return (
              <Certification
                key="certifications"
                certifications={certifications}
              />
            );
          case "experience":
            return <WorkExperience key="experience" experience={experience} />;
          case "skills":
            return <SkillsSection key="skills" skills={skills} />;
          default:
            return <AboutMe key="about" {...about} />;
        }
      })()}
    </AnimatePresence>
  );
}
