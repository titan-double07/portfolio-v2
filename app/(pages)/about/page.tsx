import Tabs from "./components/Tabs";
import { aboutPageData } from "@/app/data";

import { AboutPageData } from "@/app/types/types";
import AboutPages from "./components/AboutPages";
import { MotionDiv, itemVariant } from "@/app/lib/framer-motion/motionComponents";

export default function About() {
  // const { about, certifications, experience, skills }: AboutPageData =
  //   aboutPageData;

  return (
    <MotionDiv
      variants={itemVariant}
      initial="hidden"
      animate="show"
      className="container py-6 sm:py-10  relative flex flex-col gap-8 sm:gap-10 text-center  ">
      <Tabs />
      <div className="flex justify-center  ">
        <AboutPages  />
      </div>
    </MotionDiv>
  );
}
