'use client'
import { aboutPageData } from "@/app/data"
import Tabs from "./components/Tabs"
import AboutMe from "./components/AboutMe"
import Certification from "./components/Certification"
import WorkExperience from "./components/WorkExperience"
import SkillsSection from "./components/SkillsSection"
import { useAppSelector } from "@/app/redux/hooks"
import { useEffect } from "react"
import { AboutPageData } from "@/app/types/types"

export default function About() {
  const{about,certifications,experience,skills}:AboutPageData=aboutPageData
  const { currentTab } = useAppSelector(state => state.appReducer)
 
  return (
    <div className="container pt-6 sm:pt-12 relative flex flex-col gap-8 sm:gap-12 text-center h-full">
      <Tabs/>
      <div className="flex justify-center ">
        {
          (() => {
            switch (currentTab) {
              case "about":
                return <AboutMe {...about} />;
              case "certifications":
                return <Certification certifications=
                {certifications} />;
              case "experience":
                return <WorkExperience experience={experience} />;
              case "skills":
                return <SkillsSection  skills={skills} />;
              default:
                return <AboutMe {...about} />;
            }
          })()
      }
     </div>
     
     
    </div>
  )
}

