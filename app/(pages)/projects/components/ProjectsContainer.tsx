import React from "react";
import { projects } from "@/app/data";
import Image from "next/image";
import Tools from "./Tools";
import {
  MotionUl,
  MotionLi,
  itemVariant,
  containerVariant,
} from "@/app/lib/framer-motion/motionComponents";

export default function ProjectsContainer() {
  return (
    <MotionUl
      variants={containerVariant}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-2  gap-5 w-full pt-10  ">
      {projects.map((project, index) => {
        const { title, description, image, tools, url, gitUrl } = project;
        // console.log(gitUrl)
        return (
          <MotionLi
            variants={itemVariant}
            key={index}
            className="relative border w-full  flex flex-col   rounded-lg h-[400px] ">
            <div className="relative w-full  h-1/2 ">
              <Image
                src={image || "/placeholder-img.png"}
                alt={title}
                fill
                className="rounded-t-lg object-cover h-full object-top"
              />
            </div>

            <div className="p-4 h-1/2 text-sm leading-relaxed overflow-y-auto relative ">
              <div className="flex flex-col gap-4 mb-4 ">
                <Tools tools={tools} />
                <div className="flex items-center gap-2">
                  <a
                    className="w-16 text-center capitalize  h-fit py-1 text-sm border rounded hover:bg-light/80 hover:text-dark active:scale-90 border-light/70 text-light/70"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer">
                    live
                  </a>
                  {gitUrl && (
                    <a
                      className="w-16 text-center capitalize  h-fit py-1 text-sm border rounded hover:bg-light/80 hover:text-dark active:scale-90 border-light/70 text-light/70 "
                      href={gitUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      github
                    </a>
                  )}
                </div>
              </div>
              <hr className=" rounded-full mb-1 border-light/30" />
              <h4 className="font-bold capitalize lg:text-lg">{title}</h4>
              <p className="text-light/70 text-base">{description}</p>
            </div>
          </MotionLi>
        );
      })}
    </MotionUl>
  );
}
