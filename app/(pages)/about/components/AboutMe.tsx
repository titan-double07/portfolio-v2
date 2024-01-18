import {
  MotionSection,
  MotionP,
} from "@/app/lib/framer-motion/motionComponents";
import { About } from "@/app/types/types";
import React from "react";
import { PiCertificateFill } from "react-icons/pi";
import { containerVariant,itemVariant } from "@/app/lib/framer-motion/motionComponents";
export default function AboutMe({
  description,
  education: { degree, date, institution },
}: About) {

    // const container = {
    //   hidden: { opacity: 0 },
    //   show: {
    //     opacity: 1,
    //     transition: {
    //       duration: 0.1,
    //       ease: "easeInOut",
    //       when: "beforeChildren",
    //       staggerChildren: 0.2,
    //     },
    //   },
    //   exit: { opacity: 0 },
    // };

    // const item = {
    //   hidden: { opacity: 0, y: -10 },
    //   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    // };
  return (
    <MotionSection
      variants={containerVariant}
      initial="hidden"
      animate="show"
      id="about"
      className="flex flex-col gap-4 lg:px-10  ">
      {description.map((desc, index) => {
        return (
          <MotionP
            variants={itemVariant}
            key={index}
            className="sm:text-xl sm:leading-relaxed pb-1.5 ">
            {desc}
          </MotionP>
        );
      })}
    </MotionSection>
  );
}

{
  /* <p className="sm:text-xl sm:leading-relaxed ">
  <span className="font-bold">I Graduated</span> from{" "}
  <span className="font-bold underline">{institution}</span> in{" "}
  <span className="font-bold">{date}</span> with a{" "}
  <span className="font-bold underline">{degree}</span>
</p> */
}
