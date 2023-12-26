'use client'
import { aboutPageData } from "@/app/data"
import Tabs from "./components/Tabs"
import AboutMe from "./components/AboutMe"
import Certification from "./components/Certification"
import WorkExperience from "./components/WorkExperience"
import SkillsSection from "./components/SkillsSection"
import { useAppSelector } from "@/app/redux/hooks"
import { useEffect } from "react"

export default function About() {
  const { currentTab } = useAppSelector(state => state.appReducer)
  useEffect(()=>{
    console.log(currentTab)
  },[currentTab])
  console.log(currentTab)
  return (
    <div className=" container py-8 relative">
      <Tabs/>
      <div className="flex items-center">
        
      <AboutMe />
      <Certification />
      <WorkExperience />
      <SkillsSection/>
     </div>
     
     
    </div>
  )
}

